import Link from "next/link";
export function Footer() {
  return <footer className="bg-black px-4 py-10 text-sm text-white/70">
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
      <div><p className="font-black text-white">PIZZA TIME MONTMORENCY</p><p>110 avenue de Domont, 95160 Montmorency</p></div>
      <div><a className="text-white" href="tel:+33134121211">01 34 12 12 11</a><p>Service midi et soir</p></div>
      <div className="md:text-right"><Link href="/admin">Administration</Link><p>© {new Date().getFullYear()} Pizza Time</p></div>
    </div>
  </footer>;
}
