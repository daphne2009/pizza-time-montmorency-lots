"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const departments = [
  ["Pizzas", "🍕"], ["Menus", "🍽️"], ["Burgers", "🍔"], ["Sandwichs", "🥖"],
  ["Paninis", "🥪"], ["Tex-Mex", "🍗"], ["Tacos", "🌮"], ["Salades", "🥗"],
  ["Desserts", "🍰"], ["Boissons", "🥤"]
];

export function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <header className="sticky top-0 z-50 border-b border-black/10 bg-white text-neutral-950 shadow-lg">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="text-2xl font-black leading-none"><span className="text-neutral-950">PIZZA·</span><span className="text-tomato">TIME</span><small className="mt-1 block text-[9px] tracking-[.28em] text-neutral-500">MONTMORENCY</small></Link>
      <nav aria-label="Navigation principale" className="flex items-center gap-5 font-black uppercase"><Link href="/carte">Carte</Link><Link href="/contact">Contact</Link><a href="tel:+33134121211" className="rounded-full bg-tomato px-4 py-3 text-sm">☎ 01 34 12 12 11</a></nav>
    </div>
    <nav aria-label="Rayons" className="border-t border-black/10 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3">{departments.map(([name, icon]) => <a key={name} href={`/carte?categorie=${encodeURIComponent(name)}`} className="flex min-w-max items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition hover:bg-tomato hover:text-white"><span className="text-2xl" aria-hidden>{icon}</span><span>{name}</span></a>)}</div>
    </nav>
  </header>;
}
