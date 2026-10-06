"use client";

import { useState, type FormEvent, type ReactNode } from "react";

/** Production waitlist endpoint. Tests and browser checks must mock this; never post fixtures here. */
export const WAITLIST_ENDPOINT = "https://app.solvixlms.com/api/v1/waitlist";

/**
 * Fixed copy for a duplicate submission of the address in this form.
 * Do not interpolate the address or any field from the response body.
 */
export const ALREADY_ON_WAITLIST_COPY = "You\u2019re already on the waitlist.";

type Intent = "waitlist" | "demo";

type LeadFormProps = {
  location?: string;
  intent?: Intent;
};

function FormIcon({ name, size, stroke }: { name: "arrow" | "check"; size: number; stroke: number }) {
  const paths: Record<"arrow" | "check", ReactNode> = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    check: <path d="M5 12l4 4 10-10" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function submissionSource(intent: Intent, location: string): string {
  if (intent === "demo") {
    return `demo_${location === "final_cta" ? "cta" : location}`;
  }
  return location === "final_cta" ? "cta" : location;
}

function isEmailExists(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  return (value as { error?: unknown }).error === "EMAIL_EXISTS";
}

export function LeadForm({ location = "hero", intent = "waitlist" }: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const isDemo = intent === "demo";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setNotice("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }
    setStatus("loading");
    const source = submissionSource(intent, location);
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (res.ok) {
        const dataLayerWindow = window as Window & { dataLayer?: unknown[] };
        dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
        dataLayerWindow.dataLayer.push({
          event: isDemo ? "demo_request" : "waitlist_submit",
          form_location: location,
          form_intent: intent,
        });
        setStatus("success");
        setEmail("");
        return;
      }

      setStatus("idle");

      if (res.status === 429) {
        setError("Too many requests. Please try again later.");
        return;
      }
      if (res.status === 400) {
        setError("Please enter a valid email address.");
        return;
      }
      if (res.status === 409) {
        const body: unknown = await res.json().catch(() => null);
        if (isEmailExists(body)) {
          setNotice(ALREADY_ON_WAITLIST_COPY);
          return;
        }
      }

      setError("Something went wrong. Please try again.");
    } catch {
      setStatus("idle");
      setError("Unable to connect. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="waitlist-success" role="status" aria-live="polite">
        <span className="check">
          <FormIcon name="check" size={16} stroke={2.5} />
        </span>
        <div>
          <strong>{isDemo ? "Demo request received." : "You\u2019re on the list."}</strong>
          <span>
            {isDemo
              ? "We'll reach out to schedule a 30-minute facility walkthrough."
              : "We'll be in touch when a slot opens."}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        className="waitlist-form"
        onSubmit={handleSubmit}
        aria-label={isDemo ? `Demo request form (${location})` : `Waitlist form (${location})`}
      >
        <label htmlFor={`lead-${intent}-${location}`} style={{ position: "absolute", left: -9999 }}>
          Email address
        </label>
        <input
          id={`lead-${intent}-${location}`}
          type="email"
          placeholder="you@yourlab.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          aria-describedby={notice ? `lead-notice-${intent}-${location}` : undefined}
        />
        <button type="submit" className="btn btn-solid btn-mag" disabled={status === "loading"}>
          {status === "loading" ? (
            isDemo ? "Sending…" : "Joining…"
          ) : isDemo ? (
            <>
              Book a 30-minute facility demo <FormIcon name="arrow" size={16} stroke={2} />
            </>
          ) : (
            <>
              Join the Waitlist <FormIcon name="arrow" size={16} stroke={2} />
            </>
          )}
        </button>
      </form>
      {notice && (
        <div
          id={`lead-notice-${intent}-${location}`}
          className="waitlist-notice"
          role="status"
          aria-live="polite"
        >
          {notice}
        </div>
      )}
      {error && (
        <div className="waitlist-error" role="alert">
          {error}
        </div>
      )}
    </>
  );
}

export function WaitlistForm({ location = "hero" }: { location?: string }) {
  return <LeadForm location={location} intent="waitlist" />;
}

export function DemoForm({ location = "hero" }: { location?: string }) {
  return <LeadForm location={location} intent="demo" />;
}
