"use client";

import { FormEvent, useEffect, useState } from "react";

type Settings = { promotion: string; promotionEnabled: boolean; notice: string };
const defaults: Settings = { promotion: "Offre du moment : découvrez nos formules à partager !", promotionEnabled: true, notice: "Ouvert midi et soir." };

export function AdminPanel() {
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");
  const [settings, setSettings] = useState(defaults);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pizza-time-settings");
      if (saved) setSettings({ ...defaults, ...JSON.parse(saved) });
    } catch { setSettings(defaults); }
  }, []);

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = new FormData(e.currentTarget).get("password");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (response.ok) setLogged(true); else setError("Mot de passe incorrect.");
  }

  function save() {
    localStorage.setItem("pizza-time-settings", JSON.stringify(settings));
    window.dispatchEvent(new Event("pizza-time-settings-updated"));
    alert("La bannière promotionnelle a été enregistrée.");
  }

  if (!logged) return <form onSubmit={login} className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-lg"><h2 className="text-2xl font-black">Connexion</h2><input name="password" type="password" required className="my-4 w-full rounded-xl border p-3" placeholder="Mot de passe" /><button className="w-full rounded-xl bg-tomato p-3 font-bold text-white">Se connecter</button><p className="mt-2 text-sm text-red-600">{error}</p></form>;

  return <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-lg">
    <h2 className="text-2xl font-black">Bannière promotionnelle</h2>
    <p className="mb-5 mt-2 text-sm text-black/60">Ce réglage est enregistré dans ce navigateur. Une base de données sera nécessaire pour le modifier pour tous les visiteurs depuis n’importe quel appareil.</p>
    <label className="mb-4 flex items-center gap-3 font-bold"><input type="checkbox" checked={settings.promotionEnabled} onChange={(e) => setSettings({ ...settings, promotionEnabled: e.target.checked })} className="h-5 w-5 accent-red-600" />Afficher la promotion</label>
    <label className="mb-4 block font-bold">Texte de la promotion<input value={settings.promotion} maxLength={140} onChange={(e) => setSettings({ ...settings, promotion: e.target.value })} className="mt-1 w-full rounded-xl border p-3 font-normal" /></label>
    <label className="mb-5 block font-bold">Information interne<input value={settings.notice} maxLength={140} onChange={(e) => setSettings({ ...settings, notice: e.target.value })} className="mt-1 w-full rounded-xl border p-3 font-normal" /></label>
    <div className="mb-5 rounded-xl bg-tomato p-3 text-center font-bold text-white">Aperçu : {settings.promotion || "Promotion masquée"}</div>
    <button onClick={save} className="rounded-xl bg-tomato px-5 py-3 font-bold text-white">Enregistrer</button>
  </div>;
}
