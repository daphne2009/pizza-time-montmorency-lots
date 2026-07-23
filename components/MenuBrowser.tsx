"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, menu, type MenuItem } from "@/data/menu";

function allergensFor(item: MenuItem) {
  const text = `${item.name} ${item.description}`.toLowerCase();
  const allergens = new Set<string>();
  if (["Pizzas", "Burgers", "Sandwichs", "Paninis", "Tacos"].includes(item.category)) allergens.add("Gluten");
  if (item.category === "Desserts") { allergens.add("Gluten"); allergens.add("Lait"); allergens.add("Œufs"); }
  if (item.category === "Menus") allergens.add("Selon les produits choisis");
  if (/fromage|crème|cheddar|mozza|lait|panna|mousse|glace/.test(text)) allergens.add("Lait");
  if (/œuf|oeuf/.test(text)) allergens.add("Œufs");
  if (/thon|saumon|surimi/.test(text)) allergens.add("Poisson");
  if (/crevette/.test(text)) allergens.add("Crustacés");
  if (/calamar/.test(text)) allergens.add("Mollusques");
  if (/noix/.test(text)) allergens.add("Fruits à coque");
  if (/nugget|pané|frit|onion ring|wings/.test(text)) allergens.add("Gluten possible");
  return [...allergens];
}

function sizesFor(item: MenuItem) {
  if (item.category !== "Pizzas") return [];
  return item.price.split("·").map((part) => part.trim()).filter(Boolean);
}

function labelsFor(item: MenuItem) {
  const labels: string[] = [];
  const name = item.name.toLowerCase();
  if (item.popular) labels.push("Populaire");
  if (/végétarienne|margherita|4 fromages|chèvre miel/.test(name)) labels.push("Végétarien");
  if (/mexicaine|buffalo|jalape/.test(name)) labels.push("Épicé");
  if (item.category === "Menus") labels.push("Formule");
  return labels.slice(0, 2);
}

export function MenuBrowser() {
  const [category, setCategory] = useState("Tout");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("categorie");
    if (requested && categories.includes(requested)) setCategory(requested);
    setPage(1);
  }, []);

  const visibleCategories = categories.filter((value) => value !== "Tout");
  const items = useMemo(() => menu.filter((item) =>
    (category === "Tout" || item.category === category) &&
    `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);
  const pageSize = 12;
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const displayedItems = items.slice((page - 1) * pageSize, page * pageSize);

  return <>
    <section id="catalogue" className="scroll-mt-36">
      <nav aria-label="Catégories de la carte" className="mb-10 flex gap-3 overflow-x-auto pb-3">
        {visibleCategories.map((name) => <button key={name} onClick={() => { setCategory(name); setPage(1); }} className={`flex min-w-[105px] flex-col items-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${category === name ? "bg-tomato text-white shadow-lg" : "bg-white text-neutral-800 shadow-sm hover:-translate-y-1 hover:text-tomato"}`}><CategoryIcon name={name} className="h-8 w-8"/><span>{name}</span></button>)}
      </nav>

      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4"><h2 className="text-4xl font-black uppercase">{category === "Tout" ? "Tous les produits" : category}</h2>{category !== "Tout" && <button onClick={() => { setCategory("Tout"); setPage(1); }} className="text-sm font-bold text-tomato">Tout afficher</button>}</div>
        <input aria-label="Rechercher dans la carte" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Rechercher un produit ou un ingrédient…" className="rounded-full border border-black/10 bg-white px-5 py-4 text-neutral-950 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-tomato" />
      </div>

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{displayedItems.map((item, index) => <button style={{ animationDelay: `${index * 45}ms` }} onClick={() => setSelected(item)} key={`${item.category}-${item.name}`} className="product-reveal group rounded-3xl px-3 py-4 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-tomato">
        <div className="relative mx-auto aspect-square w-full overflow-hidden"><div className="absolute inset-10 rounded-full bg-red-100/70 blur-3xl"/><Image src={item.image} alt={item.name} fill quality={78} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px" className={`object-contain p-5 drop-shadow-[0_18px_18px_rgba(0,0,0,.18)] transition duration-500 group-hover:scale-105 ${item.category === "Pizzas" ? "mix-blend-multiply [clip-path:inset(5px)]" : ""}`} /><div className="absolute left-3 top-3 flex flex-wrap gap-2">{labelsFor(item).map((label) => <span key={label} className={`rounded-full px-3 py-1 text-xs font-black ${label === "Épicé" ? "bg-red-600 text-white" : "bg-[#d7ae54] text-black"}`}>{label}</span>)}</div></div>
        <h3 className="mt-1 text-xl font-black text-neutral-950">{item.name}</h3><p className="two-lines mx-auto mt-2 min-h-10 max-w-xs text-sm leading-5 text-neutral-600">{item.description}</p><p className="mt-3 text-xl font-black text-tomato">{item.price}</p><p className="mt-3 text-sm font-black text-tomato opacity-0 transition group-hover:opacity-100">Voir et commander →</p>
      </button>)}</div>

      {!items.length && <p className="py-10 text-center">Aucun résultat.</p>}
      {items.length > 0 && pageCount > 1 && <nav aria-label="Pagination" className="mt-14 flex flex-wrap items-center justify-center gap-3">{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} onClick={() => { setPage(number); document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" }); }} className={`grid h-12 w-12 place-items-center rounded-full font-black ${page === number ? "bg-tomato text-white" : "border border-black/10 bg-white text-neutral-950"}`}>{number}</button>)}{page < pageCount && <button onClick={() => setPage(page + 1)} className="rounded-full border border-black/10 bg-white px-6 py-3 font-black text-neutral-950">Page suivante →</button>}</nav>}
    </section>

    {selected && <div role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
      <article onClick={(event) => event.stopPropagation()} className="relative max-h-[94vh] w-full max-w-4xl overflow-auto rounded-[2rem] bg-[#fffaf5] shadow-2xl">
        <button onClick={() => setSelected(null)} aria-label="Fermer" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-black text-2xl text-white">×</button>
        <div className="grid md:grid-cols-[1.05fr_.95fr]"><div className="relative min-h-80 overflow-hidden md:min-h-[560px]"><Image src={selected.image} alt={selected.name} fill quality={82} sizes="(max-width: 768px) 100vw, 55vw" className={`object-contain p-8 drop-shadow-2xl ${selected.category === "Pizzas" ? "mix-blend-multiply [clip-path:inset(5px)]" : ""}`} /></div><div className="flex flex-col justify-center p-8 md:p-12"><p className="font-bold uppercase tracking-widest text-tomato">{selected.category}</p><h2 className="mt-2 text-4xl font-black">{selected.name}</h2><p className="mt-6 text-xl italic leading-relaxed text-black/65">{selected.description}</p>{sizesFor(selected).length > 0 && <div className="mt-6"><h3 className="text-sm font-black uppercase tracking-wider">Tailles disponibles</h3><div className="mt-2 flex flex-wrap gap-2">{sizesFor(selected).map((size) => <span key={size} className="rounded-full bg-white px-3 py-2 text-sm font-bold shadow-sm">{size}</span>)}</div></div>}<div className="mt-6"><h3 className="text-sm font-black uppercase tracking-wider">Allergènes</h3><div className="mt-2 flex flex-wrap gap-2">{allergensFor(selected).length ? allergensFor(selected).map((allergen) => <span key={allergen} className="rounded-full border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-bold text-amber-900">{allergen}</span>) : <span className="text-sm text-neutral-500">À confirmer auprès du restaurant</span>}</div><p className="mt-2 text-xs text-neutral-500">Traces possibles et recettes susceptibles d’évoluer. Signalez toute allergie lors de la commande.</p></div><p className="mt-7 text-2xl font-black text-tomato">{selected.price}</p><a href="tel:+33134121211" className="mt-8 rounded-full bg-tomato px-6 py-4 text-center font-black text-white">Commander au 01 34 12 12 11</a></div></div>
      </article>
    </div>}
  </>;
}
