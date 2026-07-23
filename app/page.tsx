import Image from "next/image";
import Link from "next/link";

const hotspots = [
  { label: "Appeler Pizza Time", href: "tel:+33134121211", left: "8%", top: "33.4%", width: "31%", height: "3.5%" },
  { label: "Découvrir la pizzeria", href: "/contact", left: "10.5%", top: "79.5%", width: "14.5%", height: "2.6%" },
  { label: "Voir la carte", href: "/carte", left: "42.5%", top: "79.5%", width: "15.5%", height: "2.6%" },
  { label: "Découvrir nos pizzas", href: "/carte?categorie=Pizzas", left: "72.5%", top: "79.5%", width: "18%", height: "2.6%" },
  { label: "Commander par téléphone", href: "tel:+33134121211", left: "18%", top: "93.3%", width: "22%", height: "2.7%" },
];

const bestSellers = [
  { name: "Margherita", price: "Dès 6,90 €", image: "/images/plats/margherita.png", category: "Pizzas" },
  { name: "Menu pizza", price: "8,50 €", image: "/images/plats/menu-pizza.png", category: "Menus" },
  { name: "Cheeseburger", price: "7,00 €", image: "/images/plats/cheeseburger.png", category: "Burgers" },
  { name: "Tiramisu", price: "3,50 €", image: "/images/plats/tiramisu.png", category: "Desserts" },
];

export default function Home() {
  return <>
    <main className="relative w-full bg-black">
      <Image src="/images/accueil-passion.webp" alt="Accueil Pizza Time Montmorency" width={1024} height={1536} priority quality={72} sizes="100vw" className="h-auto w-full" />
      <nav aria-label="Navigation principale" className="absolute right-[3.5%] top-[1.7%] z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/75 p-1.5 text-[9px] font-black uppercase text-white shadow-2xl backdrop-blur-md sm:gap-4 sm:p-2 sm:text-sm lg:text-base">
        <Link href="/carte" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-red-500 sm:px-5">Carte</Link>
        <Link href="/contact" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-red-500 sm:px-5">Contact</Link>
        <a href="tel:+33134121211" className="rounded-full bg-red-600 px-3 py-2 transition hover:bg-red-500 sm:px-5">01 34 12 12 11</a>
      </nav>
      {hotspots.map((spot) => <Link key={spot.label} aria-label={spot.label} href={spot.href} className="absolute z-10 rounded-lg outline-none transition hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-white" style={{ left: spot.left, top: spot.top, width: spot.width, height: spot.height }}><span className="sr-only">{spot.label}</span></Link>)}
    </main>

    <section className="bg-[#fffaf5] px-4 py-16 text-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center"><p className="font-black uppercase tracking-[.2em] text-tomato">Les incontournables</p><h2 className="mt-2 text-4xl font-black sm:text-5xl">Nos meilleures ventes</h2></div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{bestSellers.map((item, index) => <Link key={item.name} href={`/carte?categorie=${item.category}`} className="product-reveal group text-center" style={{ animationDelay: `${index * 80}ms` }}><div className="relative aspect-square"><div className="absolute inset-10 rounded-full bg-red-100 blur-3xl"/><Image src={item.image} alt={item.name} fill quality={78} sizes="(max-width: 640px) 90vw, 300px" className={`object-contain p-4 drop-shadow-2xl transition duration-500 group-hover:scale-105 ${item.category === "Pizzas" ? "mix-blend-multiply [clip-path:inset(5px)]" : ""}`}/></div><h3 className="text-2xl font-black">{item.name}</h3><p className="mt-1 text-xl font-black text-tomato">{item.price}</p><span className="mt-3 inline-block font-bold text-tomato">Découvrir →</span></Link>)}</div>
      </div>
    </section>

    <section className="bg-white px-4 py-16 text-neutral-950" aria-labelledby="avis-google"><div className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[#fffaf5] p-7 shadow-sm sm:p-10"><div className="grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="font-black uppercase tracking-[.2em] text-tomato">Avis Google</p><h2 id="avis-google" className="mt-2 text-3xl font-black sm:text-4xl">L’avis de nos clients compte</h2><div className="mt-5 flex flex-wrap items-center gap-4"><span className="text-5xl font-black">3,8<span className="text-2xl text-neutral-500">/5</span></span><div><p className="text-2xl tracking-wider text-amber-500" aria-label="3,8 étoiles sur 5">★★★★<span className="text-neutral-300">★</span></p><p className="text-sm text-neutral-600">D’après 112 avis Google publics</p></div></div><p className="mt-4 max-w-2xl text-sm text-neutral-500">La note peut évoluer. Consultez Google pour lire les commentaires les plus récents.</p></div><div className="flex flex-col gap-3"><a href="https://www.google.com/maps/search/?api=1&query=Pizza+Time+110+avenue+de+Domont+95160+Montmorency" target="_blank" rel="noreferrer" className="rounded-full bg-tomato px-6 py-3 text-center font-black text-white">Lire les avis Google</a><a href="https://www.google.com/maps/search/?api=1&query=Pizza+Time+110+avenue+de+Domont+95160+Montmorency" target="_blank" rel="noreferrer" className="rounded-full border border-black/15 px-6 py-3 text-center font-black">Donner votre avis</a></div></div></div></section>
  </>;
}
