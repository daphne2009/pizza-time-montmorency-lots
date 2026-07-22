import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { password } = await request.json().catch(() => ({ password: "" }));
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || typeof password !== "string" || password !== expected) return NextResponse.json({ ok: false }, { status: 401 });
  return NextResponse.json({ ok: true });
}
