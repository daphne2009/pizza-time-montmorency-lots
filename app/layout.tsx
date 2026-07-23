import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pizza-time-montmorency.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pizza Time Montmorency — Livraison & à emporter", template: "%s | Pizza Time Montmorency" },
  description: "Pizzas, burgers, tacos, paninis et menus à Montmorency. Commandez au 01 34 12 12 11.",
  keywords: ["pizza Montmorency", "Pizza Time", "livraison pizza 95160", "pizza à emporter"],
  alternates: { canonical: "/" },
  openGraph: { title: "Pizza Time Montmorency", description: "Pizzas, menus et livraison à Montmorency.", url: siteUrl, siteName: "Pizza Time Montmorency", locale: "fr_FR", type: "website", images: ["/images/carte-complete.png"] },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111111" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Restaurant", name: "Pizza Time Montmorency", telephone: "+33134121211", address: { "@type": "PostalAddress", streetAddress: "110 avenue de Domont", postalCode: "95160", addressLocality: "Montmorency", addressCountry: "FR" }, servesCuisine: ["Pizza", "Fast-food"], priceRange: "€€" };
  return <html lang="fr"><body><Header /><PromoBanner /><main>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}
