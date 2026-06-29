import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Takedown LIFTED (2026-06-29): the rewritten marketing site is now public at
// www.solvixlms.com — this middleware no longer redirects to the app; it passes
// every request through. Kept in place (not deleted) so re-takedown is a one-line
// restore: swap the NextResponse.next() below back to
//   return NextResponse.redirect("https://app.solvixlms.com", 302);
// The /api/* Auth0 proxy rewrites live in next.config.ts (untouched); the matcher
// below still excludes /api/, Next internals, and favicon.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

// Apply to all page traffic. EXCLUDE the /api/* proxy routes (login/logout/callback
// rewrites in next.config.ts must keep working), Next internals, and favicon.
export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico).*)"],
};
