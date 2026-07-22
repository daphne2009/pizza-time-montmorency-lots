import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";
export const metadata: Metadata = { title: "Administration", robots: { index: false, follow: false } };
export default function AdminPage() { return <div className="min-h-[70vh] px-4 py-14"><h1 className="mb-8 text-center text-4xl font-black">Administration</h1><AdminPanel /></div>; }
