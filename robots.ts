import type { Metadata } from "next";
import { MenuBrowser } from "@/components/MenuBrowser";
export const metadata: Metadata = { title: "La carte", description: "Découvrez la carte Pizza Time Montmorency : pizzas, menus, burgers, tacos, paninis, salades et tex-mex." };
export default function CartePage() { return <><section className="bg-tomato px-4 py-16 text-center text-white"><h1 className="text-6xl font-black uppercase">La carte</h1><p className="mt-3">Accueil　›　Carte</p></section><div className="mx-auto max-w-6xl px-4 py-12"><MenuBrowser /></div></>; }
