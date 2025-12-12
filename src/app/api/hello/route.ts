import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = {
    message: "Halo dari PaaS App Awan! 🌤️",
    timestamp: new Date().toISOString(),
    platform: "Vercel",
    features: [
      "Hosting gratis",
      "Skalabilitas otomatis",
      "CDN global",
      "Auto-deploy",
    ],
  };

  return NextResponse.json(data);
}
