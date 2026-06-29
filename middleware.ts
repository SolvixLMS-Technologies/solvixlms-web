import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TEMPORARY takedown (2026-06-25): reroute the public marketing/investor site
// (www.solvixlms.com + apex) to the app. 302 = temporary, so this is cleanly
// reversible while the page is rewritten — delete this file (or empty the matcher)
// and redeploy to restore. The page source is preserved untouched; this redirect
// sits in front of it.
export function middleware(_request: NextRequest) {
  return NextResponse.redirect("https://app.solvixlms.com", 302);
}

// Apply to all page traffic. EXCLUDE the /api/* proxy routes (login/logout/callback
// rewrites in next.config.ts must keep working), Next internals, and favicon.
export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico).*)"],
};
