"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const departments = ["Pizzas", "Menus", "Burgers", "Sandwichs", "Paninis", "Tex-Mex", "Tacos", "Salades", "Desserts", "Boissons"];

function CategoryIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const drawings: Record<string, React.ReactNode> = {
    Pizzas: <><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4.8 9.5 12 12l6.8-2.5M8 7.5h.01M15.5 15.5h.01"/></>,
    Menus: <><circle cx="13" cy="12" r="6"/><path d="M3 4v7M5 4v7M4 11v9M21 4v16M18 4c2 2 3 4 3 7h-3"/></>,
    Burgers: <><path d="M5 10c.6-4 13.4-4 14 0M4 11h16M5 14h14M4 17h16M6 20h12"/></>,
    Sandwichs: <><path d="m4 14 12-8c2-1 4 1 3 3L8 18c-3 2-6-1-4-4Z"/><path d="m7 14 9-6M9 11l4 2"/></>,
    Paninis: <><path d="m4 16 8-10 8 10H4Z"/><path d="M7 14h10M9 11h6"/></>,
    "Tex-Mex": <><path d="M8 13c-3 1-5-2-3-5s5-2 6 1l5 5"/><path d="M15 13c4-2 7 2 4 5s-7 0-5-4"/></>,
    Tacos: <><path d="M4 17a8 8 0 0 1 16 0H4Z"/><path d="M8 13h.01M12 10h.01M16 13h.01"/></>,
    Salades: <><path d="M4 11h16c0 6-3 9-8 9s-8-3-8-9Z"/><path d="M8 9c-2-3 1-5 4-2 1-4 5-3 5 1"/></>,
    Desserts: <><path d="M5 10h14v10H5zM4 10h16L17 5H7l-3 5Z"/><path d="M12 5V3"/></>,
    Boissons: <><path d="M7 7h10l-1 14H8L7 7ZM9 3h7l-1 4M14 3l3-2"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7" {...common}>{drawings[name]}</svg>;
}

export function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <header className="sticky top-0 z-50 border-b border-black/10 bg-white text-neutral-950 shadow-lg">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="text-2xl font-black leading-none"><span>PIZZA·</span><span className="text-tomato">TIME</span><small className="mt-1 block text-[9px] tracking-[.28em] text-neutral-500">MONTMORENCY</small></Link>
      <nav aria-label="Navigation principale" className="flex items-center gap-3 font-black uppercase sm:gap-5"><Link href="/carte">Carte</Link><Link href="/contact">Contact</Link><a href="tel:+33134121211" className="rounded-full bg-tomato px-3 py-3 text-xs text-white sm:px-4 sm:text-sm">01 34 12 12 11</a></nav>
    </div>
    <nav aria-label="Rayons" className="border-t border-black/10 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">{departments.map((name) => <a key={name} href={`/carte?categorie=${encodeURIComponent(name)}`} className="flex min-w-max items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-neutral-700 transition hover:bg-tomato hover:text-white"><CategoryIcon name={name}/><span>{name}</span></a>)}</div>
    </nav>
  </header>;
}
