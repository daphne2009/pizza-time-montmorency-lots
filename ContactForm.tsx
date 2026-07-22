"use client";
import { FormEvent, useEffect, useState } from "react";
type Settings = { promotion: string; notice: string };
const defaults: Settings = { promotion: "Découvrez nos formules à partager.", notice: "Ouvert midi et soir." };
export function AdminPanel() {
  const [logged, setLogged] = useState(false); const [error, setError] = useState(""); const [settings, setSettings] = useState(defaults);
  useEffect(() => { const saved = localStorage.getItem("pizza-time-settings"); if (saved) setSettings(JSON.parse(saved)); }, []);
  async function login(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const password = new FormData(e.currentTarget).get("password"); const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) }); if (r.ok) setLogged(true); else setError("Mot de passe incorrect."); }
  if (!logged) return <form onSubmit={login} className="mx-auto max-w-md rounded-3xl bg-white p-6"><h2 className="text-2xl font-black">Connexion</h2><input name="password" type="password" required className="my-4 w-full rounded-xl border p-3" placeholder="Mot de passe" /><button className="w-full rounded-xl bg-tomato p-3 font-bold text-white">Se connecter</button><p>{error}</p></form>;
  return <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6"><h2 className="text-2xl font-black">Contenu local</h2><p className="mb-5 text-sm text-black/60">Ces réglages sont enregistrés dans ce navigateur. Pour une administration multi-utilisateur, connectez une base de données.</p>{(["promotion", "notice"] as const).map((key) => <label key={key} className="mb-4 block capitalize">{key}<input value={settings[key]} onChange={(e) => setSettings({ ...settings, [key]: e.target.value })} className="mt-1 w-full rounded-xl border p-3" /></label>)}<button onClick={() => { localStorage.setItem("pizza-time-settings", JSON.stringify(settings)); alert("Enregistré"); }} className="rounded-xl bg-tomato px-5 py-3 font-bold text-white">Enregistrer</button></div>;
}
