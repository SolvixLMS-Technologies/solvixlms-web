import type { NextRequest } from "next/server";

// Demo-request handler. Emails submissions to info@solvixlms.com via Resend's
// HTTP API (no SDK dependency — plain fetch). All config lives in Railway env:
//   RESEND_API_KEY   required to actually send (set directly in Railway, never in code)
//   DEMO_TO          recipient        (default: info@solvixlms.com)
//   DEMO_FROM        verified sender  (default: Resend's shared onboarding sender)
// Without RESEND_API_KEY the route returns 503 so the form can show the
// email-us-directly fallback instead of silently dropping the submission.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DemoPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  datetime?: string;
  comments?: string;
};

// Kept short so a runaway/abusive body can't build a huge email.
const MAX = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(data: unknown, status: number) {
  return Response.json(data, { status });
}

export async function POST(request: NextRequest) {
  let raw: DemoPayload;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "bad_request", message: "Invalid request body." }, 400);
  }

  const field = {
    name: clean(raw.name),
    company: clean(raw.company),
    email: clean(raw.email),
    phone: clean(raw.phone),
    datetime: clean(raw.datetime),
    comments: clean(raw.comments),
  };

  // Required: the minimum needed to follow up. Phone / preferred time / comments
  // are optional by design — fewer required fields converts better.
  const missing = (["name", "company", "email"] as const).filter((k) => !field[k]);
  if (missing.length) {
    return json({ ok: false, error: "missing_fields", fields: missing }, 400);
  }
  if (!EMAIL_RE.test(field.email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_TO || "info@solvixlms.com";
  const from = process.env.DEMO_FROM || "SolvixLMS Demo <onboarding@resend.dev>";

  if (!apiKey) {
    // Not wired yet — tell the client so it can surface the email fallback.
    return json(
      {
        ok: false,
        error: "not_configured",
        message: "Demo requests aren’t wired up yet. Email us at info@solvixlms.com.",
      },
      503,
    );
  }

  const rows: [string, string][] = [
    ["Name", field.name],
    ["Company", field.company],
    ["Email", field.email],
    ["Phone", field.phone || "—"],
    ["Preferred date/time", field.datetime || "—"],
    ["Comments / requirements", field.comments || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html =
    `<h2>New demo request</h2><table cellpadding="6" style="font-family:sans-serif;font-size:14px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="color:#64748b">${escapeHtml(k)}</td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("") +
    `</table>`;

  // Overridable only for testing; defaults to Resend's real endpoint in prod.
  const endpoint = process.env.RESEND_API_URL || "https://api.resend.com/emails";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: field.email,
        subject: `Demo request — ${field.company}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend send failed", res.status, detail);
      return json({ ok: false, error: "send_failed" }, 502);
    }
  } catch (err) {
    console.error("Resend request threw", err);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true }, 200);
}
