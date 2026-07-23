"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Settings = { promotion?: string; promotionEnabled?: boolean };
const defaultText = "Offre du moment : découvrez nos formules à partager !";

export function PromoBanner() {
  const [settings, setSettings] = useState<Settings>({ promotion: defaultText, promotionEnabled: true });

  useEffect(() => {
    const load = () => {
      try {
        const saved = localStorage.getItem("pizza-time-settings");
        if (saved) setSettings({ promotion: defaultText, promotionEnabled: true, ...JSON.parse(saved) });
      } catch { /* Conserver la promotion par défaut si les données sont invalides. */ }
    };
    load();
    window.addEventListener("storage", load);
    window.addEventListener("pizza-time-settings-updated", load);
    return () => {
      window.removeEventListener("storage", load);
      window.removeEventListener("pizza-time-settings-updated", load);
    };
  }, []);

  if (settings.promotionEnabled === false || !settings.promotion?.trim()) return null;
  return <aside className="bg-tomato px-4 py-2.5 text-center text-sm font-bold text-white">
    <span>{settings.promotion}</span>
    <Link href="/carte?categorie=Menus" className="ml-3 inline-block rounded-full border border-white/50 px-3 py-1 text-xs uppercase">Voir les menus</Link>
  </aside>;
}
