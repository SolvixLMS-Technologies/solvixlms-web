"use client";

import { useState, useEffect } from "react";

// ── Icon ─────────────────────────────────────────────────────────────────────

function Icon({ name, size = 16, stroke = 2 }: { name: "arrow" | "check"; size?: number; stroke?: number }) {
  const paths = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    check: <path d="M5 12l4 4 10-10" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="SolvixLMS home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/solvix-wordmark-header.png" alt="SolvixLMS" className="x-logo"
            style={{ objectFit: "contain", height: "100px", width: "auto", filter: "none" }} />
        </a>
        <div className="nav-links">
          <a href="/platform">Platform</a>
          <a href="/pricing">Pricing</a>
          <a href="/faq">Resources</a>
          <a href="/about">Company</a>
        </div>
        <div className="nav-cta">
          <a href="/demo" className="btn btn-solid" style={{ color: "#0A0F1E" }}>Book a Demo</a>
          <a href="https://app.solvixlms.com" className="btn btn-ghost">Dashboard Login</a>
        </div>
      </div>
    </nav>
  );
}

// ── DemoForm ──────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error" | "fallback";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    datetime: "",
    comments: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.company.trim() || !form.email.trim()) {
      setError("Please fill in your name, company, and email.");
      return;
    }
    if (!EMAIL_RE.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        (window as { dataLayer?: unknown[] }).dataLayer =
          (window as { dataLayer?: unknown[] }).dataLayer || [];
        ((window as { dataLayer?: unknown[] }).dataLayer as unknown[]).push({
          event: "demo_request_submit",
        });
        setStatus("success");
        return;
      }

      if (res.status === 503) {
        // Send service not configured yet — steer to the email fallback.
        setStatus("fallback");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data?.error === "invalid_email") setError("Enter a valid email address.");
      else if (data?.error === "missing_fields") setError("Please fill in all required fields.");
      else setError("Something went wrong. Please try again, or email info@solvixlms.com.");
      setStatus("error");
    } catch {
      setStatus("error");
      setError("Unable to connect. Please try again, or email info@solvixlms.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="demo-done" role="status" aria-live="polite">
        <span className="check"><Icon name="check" size={20} stroke={2.5} /></span>
        <h2>Request received.</h2>
        <p>
          Thanks, {form.name.split(" ")[0] || "there"}. We&apos;ll reach out to{" "}
          <strong>{form.email}</strong> to schedule your walkthrough.
        </p>
        <a href="/" className="btn btn-ghost">Back to home</a>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="demo-done" role="status" aria-live="polite">
        <h2>Let&apos;s set it up.</h2>
        <p>
          Email us at{" "}
          <a href="mailto:info@solvixlms.com" className="demo-mail">info@solvixlms.com</a>{" "}
          with your lab and preferred times, and we&apos;ll get your demo on the calendar.
        </p>
        <a href="/" className="btn btn-ghost">Back to home</a>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form className="demo-form" onSubmit={handleSubmit} noValidate>
      <div className="demo-row">
        <div className="demo-field">
          <label htmlFor="d-name">Name <span className="req">*</span></label>
          <input id="d-name" type="text" value={form.name} onChange={set("name")}
            autoComplete="name" required disabled={loading} />
        </div>
        <div className="demo-field">
          <label htmlFor="d-company">Company <span className="req">*</span></label>
          <input id="d-company" type="text" value={form.company} onChange={set("company")}
            autoComplete="organization" required disabled={loading} />
        </div>
      </div>
      <div className="demo-row">
        <div className="demo-field">
          <label htmlFor="d-email">Work email <span className="req">*</span></label>
          <input id="d-email" type="email" value={form.email} onChange={set("email")}
            autoComplete="email" required disabled={loading} placeholder="you@yourlab.com" />
        </div>
        <div className="demo-field">
          <label htmlFor="d-phone">Phone</label>
          <input id="d-phone" type="tel" value={form.phone} onChange={set("phone")}
            autoComplete="tel" disabled={loading} />
        </div>
      </div>
      <div className="demo-field">
        <label htmlFor="d-datetime">Preferred demo date / time</label>
        <input id="d-datetime" type="text" value={form.datetime} onChange={set("datetime")}
          placeholder="e.g. Weekday mornings CT, week of the 27th" disabled={loading} />
      </div>
      <div className="demo-field">
        <label htmlFor="d-comments">Comments / business requirements</label>
        <textarea id="d-comments" rows={4} value={form.comments} onChange={set("comments")}
          placeholder="Tell us about your operation and what you want to see." disabled={loading} />
      </div>

      {error && <div className="demo-error" role="alert">{error}</div>}

      <button type="submit" className="btn btn-solid btn-mag" disabled={loading}
        style={{ justifyContent: "center", padding: "12px 24px" }}>
        {loading ? "Sending…" : <>Request my demo <Icon name="arrow" size={16} stroke={2} /></>}
      </button>
      <p className="demo-fine">
        Prefer email? Reach us any time at{" "}
        <a href="mailto:info@solvixlms.com" className="demo-mail">info@solvixlms.com</a>.
      </p>
    </form>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/solvix-main-gray.svg" alt="SolvixLMS" className="footer-logo"
            style={{ width: 200, height: "auto", display: "block", marginBottom: 18 }} />
          <div className="tag">Built from the production floor.</div>
        </div>
        <div className="footer-col">
          <h5>Platform</h5>
          <ul>
            {["SolvCORE", "SolvCOMP", "SolvERP", "SolvCLIENT", "SolvLYTICS", "SolvFLOW", "SolvCOMM"].map((s) => (
              <li key={s}><a href="/platform">{s}</a></li>
            ))}
            {["SolvLINK", "SolvMRKT", "SolvAI"].map((s) => (
              <li key={s}><a href="/platform">{s}<span className="soon">soon</span></a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="/#resources">Blog</a></li>
            <li><a href="/#resources">Documentation<span className="soon">soon</span></a></li>
            <li><a href="/#resources">Case Studies<span className="soon">soon</span></a></li>
            <li><a href="/#resources">ROI Calculator<span className="soon">soon</span></a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="/#company">About</a></li>
            <li><a href="/#company">Careers</a></li>
            <li><a href="/demo">Contact</a></li>
            <li><a href="/#company">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 SolvixLMS Technologies Inc. All rights reserved.</div>
        <div className="links">
          <a href="/#disclaimers">Privacy</a>
          <a href="/#disclaimers">Terms</a>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="demo-hero">
          <div className="demo-wrap">
            <div className="demo-intro">
              <div className="section-tag mono">// Book a Demo</div>
              <h1 className="section-h" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
                See exactly what SolvixLMS can do for your facility.
              </h1>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                Get a personalized walkthrough tailored to your operation. You&apos;ll see the
                platform, a demonstration mapped to your lab&apos;s workflow, and time to ask
                questions and talk through implementation.
              </p>
              <ul className="demo-points">
                <li><span className="d-ic"><Icon name="check" size={14} stroke={2.5} /></span>Tailored to your process, not a generic tour</li>
                <li><span className="d-ic"><Icon name="check" size={14} stroke={2.5} /></span>Bring your questions — no sales script</li>
                <li><span className="d-ic"><Icon name="check" size={14} stroke={2.5} /></span>Talk through onboarding and fit</li>
              </ul>
            </div>
            <div className="demo-card">
              <DemoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
