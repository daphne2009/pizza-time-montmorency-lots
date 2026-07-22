"use client";
import { FormEvent, useState } from "react";
export function ContactForm() {
  const [status, setStatus] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("Envoi…");
    const form = new FormData(e.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    setStatus(response.ok ? "Message reçu. Nous vous répondrons rapidement." : "Une erreur est survenue.");
    if (response.ok) e.currentTarget.reset();
  }
  return <form onSubmit={submit} className="grid gap-4 rounded-3xl bg-white p-6 text-ink shadow-sm">
    <label>Nom<input required name="name" maxLength={80} className="mt-1 w-full rounded-xl border p-3" /></label>
    <label>Email<input required type="email" name="email" maxLength={120} className="mt-1 w-full rounded-xl border p-3" /></label>
    <label>Message<textarea required name="message" minLength={10} maxLength={1500} rows={5} className="mt-1 w-full rounded-xl border p-3" /></label>
    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
    <button className="rounded-xl bg-tomato px-5 py-3 font-black text-white">Envoyer</button><p role="status">{status}</p>
  </form>;
}
