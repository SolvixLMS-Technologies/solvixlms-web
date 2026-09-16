import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.solvixlms.com";

/**
 * Apex → www path-preserving HTTPS redirect (no HTTP hop).
 * Only applies when this app receives the request. If apex DNS still points
 * at a different host (current live state), fix Railway/DNS first — see
 * docs in the Project store / PR description.
 */
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();

  if (host === "solvixlms.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  // HSTS once traffic is on the canonical HTTPS host
  if (host === CANONICAL_HOST || host.endsWith(".up.railway.app")) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
  }

  return response;
}

// Apply to all page traffic. EXCLUDE the /api/* proxy routes (login/logout/callback
// rewrites in next.config.ts must keep working), Next internals, and favicon.
export const config = {
  matcher: ["/((?!api/|_next/|favicon.ico).*)"],
};
