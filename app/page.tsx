import Image from "next/image";
import Link from "next/link";

const hotspots = [
  { label: "Téléphoner à Pizza Time", href: "tel:+33134121211", left: "79%", top: "3%", width: "17%", height: "8%" },
  { label: "Découvrir nos pizzas", href: "/carte?categorie=Pizzas", left: "6%", top: "61%", width: "15%", height: "7%" },
  { label: "Commander par téléphone", href: "tel:+33134121211", left: "21%", top: "61%", width: "14%", height: "7%" },
  { label: "Commander à emporter ou en livraison", href: "tel:+33134121211", left: "73%", top: "93%", width: "20%", height: "5%" }
];

const departments = [
  ["Nos pizzas", "Toutes les recettes classiques", "/images/catalogue-pizzas.jpg", "/carte?categorie=Pizzas"],
  ["Nos menus", "Une formule pour chaque envie", "/images/catalogue-menus.jpg", "/carte?categorie=Menus"]
];

export default function Home() {
  return <>
    <section className="relative w-full bg-black">
      <Image src="/images/accueil-officiel.png" alt="Page d’accueil Pizza Time Montmorency" width={1536} height={1024} priority sizes="100vw" className="h-auto w-full" />
      <nav aria-label="Navigation de l’accueil" className="absolute left-[27%] top-[2.5%] z-20 flex h-[8%] w-[50%] items-center justify-center gap-12 bg-black/95 text-sm font-black uppercase text-white sm:text-lg"><Link href="/carte" className="hover:text-tomato">Carte</Link><Link href="/contact" className="hover:text-tomato">Contact</Link></nav>
      {hotspots.map((spot) => <Link key={spot.label} aria-label={spot.label} href={spot.href} className="absolute z-10 rounded-xl outline-none transition hover:bg-white/10 focus:bg-white/20 focus:ring-2 focus:ring-white" style={{ left: spot.left, top: spot.top, width: spot.width, height: spot.height }}><span className="sr-only">{spot.label}</span></Link>)}
    </section>
    <section className="bg-[#090909] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl"><p className="font-black uppercase tracking-widest text-tomato">Accès direct</p><h2 className="mt-2 text-4xl font-black">Entrez dans votre rayon</h2><p className="mt-3 text-white/60">Chaque panneau ouvre un catalogue séparé. Faites défiler horizontalement.</p>
        <div className="mt-8 flex snap-x gap-6 overflow-x-auto pb-6">{departments.map(([name, description, image, href]) => <Link key={name} href={href} className="group min-w-[310px] snap-start overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl sm:min-w-[420px]"><div className="relative h-[560px]"><Image src={image} alt={name} fill sizes="420px" className="object-contain transition duration-500 group-hover:scale-[1.02]" /></div><div className="border-t border-white/10 p-5"><h3 className="text-2xl font-black">{name}</h3><p className="text-white/60">{description}</p><span className="mt-3 inline-block font-black text-tomato">Ouvrir le catalogue →</span></div></Link>)}</div>
      </div>
    </section>
  </>;
}
