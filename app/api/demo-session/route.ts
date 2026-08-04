import { NextRequest, NextResponse } from "next/server";
import { DEMO_SESSION_COOKIE } from "@/lib/auth";
import { appBaseUrl } from "@/lib/stripe";

const allowedNext = new Set([
  "/dashboard",
  "/clients",
  "/concierge",
  "/inventory",
  "/reports",
  "/promotions",
  "/settings/team",
]);

export async function GET(request: NextRequest) {
  const base = appBaseUrl(request.nextUrl.origin);
  const requestedNext = request.nextUrl.searchParams.get("next") || "/dashboard";
  const next = allowedNext.has(requestedNext) ? requestedNext : "/dashboard";
  const res = NextResponse.redirect(`${base}${next}`, { status: 303 });

  res.cookies.set(DEMO_SESSION_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 4,
  });

  return res;
}
