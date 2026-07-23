import { NextRequest, NextResponse } from "next/server";
const attempts = new Map<string, { count: number; reset: number }>();
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const now = Date.now(); const rate = attempts.get(ip);
  if (rate && rate.reset > now && rate.count >= 5) return NextResponse.json({ error: "Trop de demandes" }, { status: 429 });
  attempts.set(ip, !rate || rate.reset < now ? { count: 1, reset: now + 600000 } : { ...rate, count: rate.count + 1 });
  const body = await request.json().catch(() => null);
  if (!body || body.website || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.message !== "string" || body.name.length > 80 || body.email.length > 120 || body.message.length < 10 || body.message.length > 1500 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  console.info("Contact reçu", { name: body.name.replace(/[<>]/g, ""), email: body.email, length: body.message.length });
  return NextResponse.json({ ok: true });
}
