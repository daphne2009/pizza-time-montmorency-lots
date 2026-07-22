"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { categories, menu, type MenuItem } from "@/data/menu";

const categoryIcons: Record<string, string> = { Pizzas: "🍕", Menus: "🍽️", Burgers: "🍔", Sandwichs: "🥪", Paninis: "🥪", "Tex-Mex": "🍗", Tacos: "🌮", Salades: "🥗", Desserts: "🍰", Boissons: "🥤" };
const categoryImages: Record<string, string> = { Menus: "/images/categories/menus.jpg", Burgers: "/images/categories/burgers.jpg", Sandwichs: "/images/categories/paninis.jpg", Paninis: "/images/categories/paninis.jpg", "Tex-Mex": "/images/categories/tex-mex.jpg", Tacos: "/images/categories/tex-mex.jpg", Salades: "/images/categories/salades.jpg", Desserts: "/images/categories/desserts.jpg", Boissons: "/images/categories/boissons.jpg" };
const photoFor = (item: MenuItem) => item.image;

export function MenuBrowser() {
  const [category, setCategory] = useState("Tout");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [page, setPage] = useState(1);
  useEffect(() => { const requested = new URLSearchParams(window.location.search).get("categorie"); if (requested && categories.includes(requested)) setCategory(requested); setPage(1); }, []);
  const visibleCategories = categories.filter((c) => c !== "Tout");
  const items = useMemo(() => menu.filter((item) => (category === "Tout" || item.category === category) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const pageSize = 12;
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const displayedItems = items.slice((page - 1) * pageSize, page * pageSize);

  return <>
    <section id="catalogue" className="scroll-mt-36">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4"><h2 className="text-4xl font-black uppercase">{category === "Tout" ? "Tous les produits" : category}</h2>{category !== "Tout" && <button onClick={() => { setCategory("Tout"); setPage(1); }} className="text-sm font-bold text-tomato">Tout afficher</button>}</div>
        <input aria-label="Rechercher dans la carte" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Rechercher un produit ou un ingrédient…" className="rounded-full border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-tomato" />
      </div>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{displayedItems.map((item) => <button onClick={() => setSelected(item)} key={`${item.category}-${item.name}`} className="group text-center focus:outline-none">
        <div className="relative mx-auto aspect-square w-full"><div className="absolute inset-8 rounded-full bg-tomato/10 blur-3xl"/><Image src={photoFor(item)} alt={item.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-2 drop-shadow-2xl transition duration-500 group-hover:scale-110" />{item.popular && <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-black text-black">Populaire</span>}</div>
        <h3 className="mt-1 text-xl font-black text-white">{item.name}</h3><p className="mt-1 font-black text-tomato">{item.price}</p>
      </button>)}</div>
      {!items.length && <p className="py-10 text-center">Aucun résultat.</p>}
      {items.length > 0 && pageCount > 1 && <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-3">{Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => <button key={number} onClick={() => { setPage(number); document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" }); }} className={`grid h-12 w-12 place-items-center rounded-full font-black ${page === number ? "bg-tomato text-white" : "border border-white/20 bg-white/10 text-white"}`}>{number}</button>)}{page < pageCount && <button onClick={() => setPage(page + 1)} className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-black text-white">Page suivante →</button>}</nav>}
    </section>

    {selected && <div role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
      <article onClick={(e) => e.stopPropagation()} className="relative max-h-[94vh] w-full max-w-4xl overflow-auto rounded-[2rem] bg-white shadow-2xl">
        <button onClick={() => setSelected(null)} aria-label="Fermer" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-black text-2xl text-white">×</button>
        <div className="grid md:grid-cols-[1.05fr_.95fr]"><div className="relative min-h-80 bg-white md:min-h-[560px]"><Image src={photoFor(selected)} alt={selected.name} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-contain p-6" /></div><div className="flex flex-col justify-center bg-white p-8 md:p-12"><p className="font-bold uppercase tracking-widest text-tomato">{selected.category}</p><h2 className="mt-2 text-4xl font-black">{selected.name}</h2><p className="mt-6 text-xl italic leading-relaxed text-black/65">{selected.description}</p><p className="mt-7 text-2xl font-black text-tomato">{selected.price}</p><a href="tel:+33134121211" className="mt-8 rounded-full bg-tomato px-6 py-4 text-center font-black text-white">Commander au 01 34 12 12 11</a></div></div>
      </article>
    </div>}
  </>;
}
