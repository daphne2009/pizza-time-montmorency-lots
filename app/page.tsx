import Image from "next/image";
import Link from "next/link";

const hotspots = [
  {
    label: "Appeler Pizza Time",
    href: "tel:+33134121211",
    left: "8%",
    top: "33.4%",
    width: "31%",
    height: "3.5%",
  },
  {
    label: "Découvrir la pizzeria",
    href: "/contact",
    left: "10.5%",
    top: "79.5%",
    width: "14.5%",
    height: "2.6%",
  },
  {
    label: "Voir la carte",
    href: "/carte",
    left: "42.5%",
    top: "79.5%",
    width: "15.5%",
    height: "2.6%",
  },
  {
    label: "Découvrir nos pizzas",
    href: "/carte?categorie=Pizzas",
    left: "72.5%",
    top: "79.5%",
    width: "18%",
    height: "2.6%",
  },
  {
    label: "Commander par téléphone",
    href: "tel:+33134121211",
    left: "18%",
    top: "93.3%",
    width: "22%",
    height: "2.7%",
  },
];

export default function Home() {
  return (
    <main className="relative w-full bg-black">
      <Image
        src="/images/accueil-passion.png"
        alt="Accueil Pizza Time Montmorency"
        width={1024}
        height={1536}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />

      <nav
        aria-label="Navigation principale"
        className="absolute right-[3.5%] top-[1.7%] z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/75 p-1.5 text-[9px] font-black uppercase text-white shadow-2xl backdrop-blur-md sm:gap-4 sm:p-2 sm:text-sm lg:text-base"
      >
        <Link href="/carte" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-red-500 sm:px-5">
          Carte
        </Link>
        <Link href="/contact" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-red-500 sm:px-5">
          Contact
        </Link>
        <a href="tel:+33134121211" className="rounded-full bg-red-600 px-3 py-2 transition hover:bg-red-500 sm:px-5">
          01 34 12 12 11
        </a>
      </nav>

      {hotspots.map((spot) => (
        <Link
          key={spot.label}
          aria-label={spot.label}
          href={spot.href}
          className="absolute z-10 rounded-lg outline-none transition hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-white"
          style={{ left: spot.left, top: spot.top, width: spot.width, height: spot.height }}
        >
          <span className="sr-only">{spot.label}</span>
        </Link>
      ))}
    </main>
  );
}
