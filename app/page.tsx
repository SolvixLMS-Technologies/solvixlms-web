"use client";

import { useState, useEffect } from "react";

// ── Icon ─────────────────────────────────────────────────────────────────────

type IconName =
  | "arrow"
  | "plus"
  | "lock"
  | "core"
  | "comp"
  | "erp"
  | "client"
  | "lytics"
  | "flow"
  | "comm"
  | "link"
  | "bot"
  | "check"
  | "chev"
  | "zap"
  | "globe"
  | "cube";

function Icon({
  name,
  size = 18,
  stroke = 1.6,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </>
    ),
    core: (
      <>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    comp: (
      <>
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 5-4 8-9 10-5-2-9-5-9-10V5l9-2 9 2v7z" />
      </>
    ),
    erp: (
      <>
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
      </>
    ),
    client: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 3-6 6-6s6 3 6 6" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M14.5 18c0-2.2 1.5-4 3.5-4s3.5 1.8 3.5 4" />
      </>
    ),
    lytics: (
      <>
        <path d="M3 20h18" />
        <rect x="5" y="10" width="3" height="8" />
        <rect x="10.5" y="5" width="3" height="13" />
        <rect x="16" y="13" width="3" height="5" />
      </>
    ),
    flow: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 6h8M18 8v8M8 7.5c0 6 8 4 8 9.5" />
      </>
    ),
    comm: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M7 21l3-4M17 21l-3-4M8 8h8M8 12h5" />
      </>
    ),
    link: (
      <>
        <path d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
        <path d="M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
      </>
    ),
    bot: (
      <>
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 4v4" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
        <path d="M8 20v2M16 20v2" />
      </>
    ),
    check: <path d="M5 12l4 4 10-10" />,
    chev: <path d="M6 9l6 6 6-6" />,
    zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
    cube: (
      <>
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M3 7l9 5 9-5M12 12v10" />
      </>
    ),
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
    >
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

  const scrollTo = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 60, behavior: "smooth" });
  };

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="SolvixLMS home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/solvix-wordmark-header.png"
            alt="SolvixLMS"
            className="x-logo"
            style={{ objectFit: "contain", height: "100px", width: "auto", filter: "none" }}
          />
        </a>
        <div className="nav-links">
          <a href="/platform">Platform</a>
          <a href="/pricing">Pricing</a>
          <a href="/faq">Resources</a>
          <a href="/about">Company</a>
        </div>
        <div className="nav-cta">
          <a href="#demo" className="btn btn-ghost" onClick={scrollTo("#demo")}>Book a Demo</a>
          <a href="https://app.solvixlms.com" className="btn btn-solid">
            Dashboard Login
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── WaitlistForm ──────────────────────────────────────────────────────────────

function WaitlistForm({ location = "hero" }: { location?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 600));
      (window as { dataLayer?: unknown[] }).dataLayer =
        (window as { dataLayer?: unknown[] }).dataLayer || [];
      ((window as { dataLayer?: unknown[] }).dataLayer as unknown[]).push({
        event: "waitlist_submit",
        form_location: location,
      });
      setStatus("success");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="waitlist-success" role="status" aria-live="polite">
        <span className="check">
          <Icon name="check" size={16} stroke={2.5} />
        </span>
        <div>
          <strong>You&apos;re on the list.</strong>
          <span>We&apos;ll be in touch when a slot opens.</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="waitlist-form" onSubmit={handleSubmit} aria-label={`Waitlist form (${location})`}>
        <label htmlFor={`wl-${location}`} style={{ position: "absolute", left: -9999 }}>
          Email address
        </label>
        <input
          id={`wl-${location}`}
          type="email"
          placeholder="you@yourlab.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
        />
        <button type="submit" className="btn btn-solid btn-mag" disabled={status === "loading"}>
          {status === "loading" ? (
            "Joining…"
          ) : (
            <>
              Join the Waitlist <Icon name="arrow" size={16} stroke={2} />
            </>
          )}
        </button>
      </form>
      {error && (
        <div className="waitlist-error" role="alert">
          {error}
        </div>
      )}
    </>
  );
}

// ── DonutChart ────────────────────────────────────────────────────────────────

function DonutChart() {
  const c = 2 * Math.PI * 52;
  return (
    <svg viewBox="0 0 160 160" style={{ width: "100%", maxWidth: 180, margin: "0 auto", display: "block" }}>
      <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(148,163,184,.08)" strokeWidth="3" />
      <circle cx="80" cy="80" r="52" fill="none" stroke="rgba(148,163,184,.08)" strokeWidth="10" />
      <circle
        cx="80" cy="80" r="52" fill="none" stroke="#F4B942" strokeWidth="10"
        strokeDasharray={`${0.578 * c} ${c}`}
        transform="rotate(-90 80 80)" strokeLinecap="round"
      />
      <circle cx="80" cy="80" r="36" fill="none" stroke="rgba(148,163,184,.08)" strokeWidth="8" />
      <circle
        cx="80" cy="80" r="36" fill="none" stroke="#FBBF24" strokeWidth="8"
        strokeDasharray={`${(42.2 / 100) * 2 * Math.PI * 36} ${2 * Math.PI * 36}`}
        transform="rotate(-90 80 80)" strokeLinecap="round"
      />
      <text x="80" y="76" textAnchor="middle" fill="#F8FAFC" fontFamily="Instrument Serif" fontSize="20">605g</text>
      <text x="80" y="94" textAnchor="middle" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="1">COLLECTED</text>
    </svg>
  );
}

// ── Temperature Curve SVG ─────────────────────────────────────────────────────

function TempCurve() {
  return (
    <svg viewBox="0 0 320 90" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="curveG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F4B942" stopOpacity="0.35" />
          <stop offset="1" stopColor="#F4B942" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[15, 35, 55, 75].map((y) => (
        <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(148,163,184,.08)" />
      ))}
      <path
        d="M0 70 L40 65 L80 50 L120 48 L160 42 L200 40 L240 38 L280 36 L320 34"
        fill="none" stroke="#FBBF24" strokeWidth="1.4" strokeDasharray="3 3" opacity=".5"
      />
      <path
        d="M0 72 L40 58 L80 46 L120 44 L160 38 L200 36 L240 34 L280 32 L320 30"
        fill="none" stroke="#F4B942" strokeWidth="2"
      />
      <path
        d="M0 72 L40 58 L80 46 L120 44 L160 38 L200 36 L240 34 L280 32 L320 30 L320 90 L0 90 Z"
        fill="url(#curveG)"
      />
      <circle cx="320" cy="30" r="3" fill="#F4B942" />
      <circle cx="320" cy="30" r="7" fill="#F4B942" opacity="0.25" />
    </svg>
  );
}

// ── Bar Chart SVG ─────────────────────────────────────────────────────────────

function BarChart() {
  const bars = [
    { n: "Papaya", v: 6.1, c: "#F4B942" },
    { n: "Carbon", v: 5.4, c: "#FBBF24" },
    { n: "Berry Fizz", v: 4.9, c: "#D97706" },
    { n: "Maple", v: 4.3, c: "#B45309" },
    { n: "Garlic", v: 3.7, c: "#92400e" },
    { n: "The Hive", v: 3.1, c: "#78350f" },
  ];
  return (
    <svg viewBox="0 0 340 90" style={{ width: "100%", height: "auto" }}>
      {bars.map((bar, i) => {
        const h = (bar.v / 7) * 56;
        return (
          <g key={i} transform={`translate(${10 + 56 * i},0)`}>
            <rect x="6" y={72 - h} width="28" height={h} rx="3" fill={bar.c} opacity="0.85" />
            <text x="20" y="86" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="7.5" textAnchor="middle">
              {bar.n}
            </text>
            <text x="20" y={70 - h} fill="#F8FAFC" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">
              {bar.v}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Browser Frame wrapper ─────────────────────────────────────────────────────

function PlaceholderBrowser({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="placeholder-browser">
      <div className="browser-bar">
        <div className="dots">
          <span /><span /><span />
        </div>
        <div className="browser-url mono">
          <Icon name="lock" size={10} stroke={2} /> app.solvixlms.com/{title}
        </div>
      </div>
      <div className="placeholder-body">{children}</div>
    </div>
  );
}

// ── Mini dash (SolvCORE product row) ──────────────────────────────────────────

function WashSessionContent() {
  return (
    <div className="mini-dash">
      <div className="mini-head">
        <span>WASH SESSION · <span className="batch">W-032726-024</span></span>
        <span>LIVE</span>
      </div>
      <div className="curve-card">
        <h5>Temperature Curve <span className="tag">± 0.4°F tol</span></h5>
        <TempCurve />
      </div>
      <div className="tracking-list">
        <div className="tr-row">
          <span className="lab">WASH_01_73u</span>
          <span className="val">350.09g</span>
          <span className="status ok">done</span>
        </div>
        <div className="tr-row">
          <span className="lab">WASH_01_45u</span>
          <span className="val">255.09g</span>
          <span className="status ok">done</span>
        </div>
        <div className="tr-row">
          <span className="lab">DRY_FREEZE_CHAMBER_A</span>
          <span className="val">-40°F / 72h</span>
          <span className="status run">running</span>
        </div>
      </div>
    </div>
  );
}

// ── Compliance inventory (SolvCOMP product row) ───────────────────────────────

function ComplianceContent() {
  return (
    <div>
      <div className="inv-header">
        <span className="mono" style={{ fontSize: 11, color: "#94A3B8" }}>INVENTORY · 102 lots</span>
        <span className="inv-chip">Metrc sync · 2m ago</span>
      </div>
      <div className="inv-table">
        <div className="inv-trow head">
          <span>Lot #</span><span>Type</span><span>Strain</span><span>Remaining</span><span>Status</span>
        </div>
        {[
          { lot: "W-041026-030-ROSIN-001", type: "LIVE_ROSIN", strain: "The Hive", rem: "140.0g" },
          { lot: "LBH-73u-041326-01", type: "BUBBLE_HASH", strain: "Maple Nectar", rem: "70.0g" },
          { lot: "LBH-45u-032726-18", type: "BUBBLE_HASH", strain: "Carbon Cut", rem: "158.0g" },
          { lot: "LBH-73u-032726-17", type: "BUBBLE_HASH", strain: "Papaya", rem: "85.1g" },
          { lot: "LBH-45u-032726-16", type: "BUBBLE_HASH", strain: "Berry Fizz", rem: "255.1g" },
        ].map((row) => (
          <div className="inv-trow" key={row.lot}>
            <span className="lot">{row.lot}</span>
            <span className="type">{row.type}</span>
            <span>{row.strain}</span>
            <span>{row.rem}</span>
            <span className="avail">available</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Analytics dashboard (SolvLYTICS product row) ──────────────────────────────

function AnalyticsContent() {
  return (
    <div>
      <div className="mini-head" style={{ marginBottom: 12 }}>
        <span>PRODUCTION ANALYTICS · LAST 30D</span>
        <span style={{ color: "#FBBF24" }}>Manager · 12 techs</span>
      </div>
      <div className="an-grid">
        {[
          { l: "Total Batches", v: "30", d: "all time" },
          { l: "Avg Yield", v: "4.84%", d: "+0.18 MoM" },
          { l: "Total Hash", v: "19.1kg", d: "bubble" },
          { l: "Cost / g", v: "$3.42", d: "-7% QoQ" },
        ].map((k) => (
          <div className="an-kpi" key={k.l}>
            <div className="l">{k.l}</div>
            <div className="v">{k.v}</div>
            <div className="d">{k.d}</div>
          </div>
        ))}
      </div>
      <div className="an-chart">
        <h5>Yield by strain (rolling 30d) <span className="rng">top 6</span></h5>
        <BarChart />
      </div>
    </div>
  );
}

// ── HeroPreview (static tilt browser) ───────────────────────────────────────

function HeroPreview() {
  return (
    <div className="hero-preview">
      <div className="browser-frame">
        <div className="browser-bar">
          <div className="dots">
            <span /><span /><span />
          </div>
          <div className="browser-url">
            <Icon name="lock" size={10} stroke={2} />
            app.solvixlms.com/core/batch/W-032726-024
          </div>
        </div>
        <div className="dash">
          <aside className="dash-side">
            <div className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/solvix-x-mono.svg" alt="" className="mk-img" style={{ width: 18, height: 18 }} />
              SolvixLMS
            </div>
            <div className="grp">Production</div>
            <div className="item"><span className="ic" />SolvCOMM</div>
            <div className="item active"><span className="ic" />SolvCORE</div>
            <div className="item"><span className="ic" />SolvFLOW</div>
            <div className="grp">QA &amp; Compliance</div>
            <div className="item"><span className="ic" />SolvCOMP</div>
            <div className="grp">Business</div>
            <div className="item"><span className="ic" />SolvERP</div>
            <div className="item"><span className="ic" />SolvLYTICS</div>
          </aside>
          <div className="dash-main">
            <div className="dash-crumb">
              <span>SolvCORE</span>
              <span className="sep">/</span>
              <span>Batch</span>
              <span className="sep">/</span>
              <span className="cur mono">W-032726-024</span>
            </div>
            <h3 className="dash-title">Wash 03 · Papaya Live</h3>
            <div className="dash-sub mono">Session · 03/26/26 · Technician: A. Lee</div>
            <div className="kpi-row">
              {[
                { l: "Wash Temp", v: "40.0°F", d: "on-target" },
                { l: "Humidity", v: "45.0%", d: "stable" },
                { l: "Yield", v: "4.84%", d: "+0.32 vs avg" },
                { l: "Collected", v: "605.18g", d: "2 microns" },
              ].map((k) => (
                <div className="kpi" key={k.l}>
                  <div className="l">{k.l}</div>
                  <div className="v">{k.v}</div>
                  <div className="d">{k.d}</div>
                </div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-head">
                <h4>Micron Distribution</h4>
                <span className="range">Session 03·26·26</span>
              </div>
              <DonutChart />
              <div className="micron-breakdown">
                <div className="mb-row">
                  <span className="lab">73u</span>
                  <span><span className="val">350.09g</span><span className="pct">57.8%</span></span>
                </div>
                <div className="mb-row">
                  <span className="lab">45u</span>
                  <span><span className="val">255.09g</span><span className="pct">42.2%</span></span>
                </div>
                <div className="mb-row total">
                  <span className="lab">Total Collected</span>
                  <span className="val">605.18g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const animWord = (text: string, baseDelay = 0) =>
    text.split(" ").map((word, i, arr) => (
      <span key={i}>
        <span
          className="word"
          style={{ animationDelay: `${baseDelay + 80 * i}ms`, display: "inline-block" }}
        >
          {word}
        </span>
        {i < arr.length - 1 ? " " : ""}
      </span>
    ));

  return (
    <header className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-blob mesh-1" />
        <div className="mesh-blob mesh-2" />
        <div className="mesh-blob mesh-3" />
      </div>
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-inner">
        <div>
          <div className="eyebrow mono">
            <span className="dot" />
            OTC: GSTK&nbsp;&nbsp;//&nbsp;&nbsp;The OS for Cannabis Processing
          </div>
          <h1>
            <span className="sr-only">The cannabis processing operating system — </span>
            <span className="line" aria-hidden="true">{animWord("They track products.", 150)}</span>
            <span className="line" aria-hidden="true">
              {animWord("We track the", 500)}{" "}
              <span
                className="word grad-text"
                style={{
                  animationDelay: "1000ms",
                  width: "302px",
                  margin: "0px 19.2px 0px 2px",
                  padding: "0px 33.6px 4.8px 10px",
                }}
                aria-hidden="true"
              >
                process.
              </span>
            </span>
            <span className="sr-only">They track products. We track the process.</span>
          </h1>
          <p className="hero-sub">
            The only platform built to track cannabis production at parameter depth — not just
            inventory. Purpose-built for extraction. Designed for every processor.
          </p>
          <WaitlistForm location="hero" />
          <div className="waitlist-helper">
            Access invitations sent based on facility fit and onboarding capacity. No spam.
          </div>
          <a href="#demo" className="sec-cta-link">
            Prefer a conversation? Book a demo <span className="arr">→</span>
          </a>
          <div className="stat-bar mono">
            <span>7 Live Suites</span>
            <span>50,000+ lbs processed</span>
            <span>AI-Native Architecture</span>
            <span>Patent Pending</span>
          </div>
        </div>
        <HeroPreview />
      </div>
    </header>
  );
}

// ── Strip ─────────────────────────────────────────────────────────────────────

function Strip() {
  return (
    <section className="strip" aria-label="Credibility">
      <div className="strip-inner">
        <div className="strip-item">
          <div className="l">Operator-built</div>
          <div className="v">One of the largest solventless facilities in the U.S.</div>
        </div>
        <div className="strip-item">
          <div className="l">Proven at scale</div>
          <div className="v">50,000+ lbs processed through the platform</div>
        </div>
        <div className="strip-item">
          <div className="l">Patent pending</div>
          <div className="v">USPTO #63/904,128</div>
        </div>
        <div className="strip-item">
          <div className="l">Publicly reporting</div>
          <div className="v">GSTK · SEC-Reporting Entity</div>
        </div>
      </div>
    </section>
  );
}

// ── Problem Section ───────────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="reveal" id="problem">
      <div className="container">
        <div className="section-tag mono">// The Problem</div>
        <h2 className="section-h">
          Multi-million dollar operations. <em>Running on spreadsheets.</em>
        </h2>
        <p className="section-sub">
          The cannabis software market is dominated by inventory trackers. None of them understand
          what happens between receiving flower and shipping concentrate. So operators cobble
          together spreadsheets, whiteboards, group texts, and paper logs — and every batch of
          institutional knowledge dies the moment the run ends.
        </p>
        <div className="stat-grid">
          {[
            { sv: "$20K–$100K", sl: "lost per failed batch when process data is missing" },
            { sv: "60–80%", sl: "of shifts spent with gloves on and hands busy" },
            { sv: "0", sl: "platforms that track extraction at parameter depth" },
            { sv: "$0", sl: "intelligence captured from your data after a batch closes" },
          ].map((s) => (
            <div className="stat-card" key={s.sv}>
              <div className="sv">{s.sv}</div>
              <div className="sl mono">{s.sl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Wedge Section ─────────────────────────────────────────────────────────────

function WedgeSection() {
  return (
    <section className="reveal">
      <div className="container">
        <div className="section-tag mono">// The Wedge</div>
        <h2 className="section-h">
          Inventory is a snapshot. <span className="grad-text">Process</span> is the story.
        </h2>
        <div className="wedge-split">
          <div className="wedge-col">
            <h4>What everyone else tracks</h4>
            <ul>
              <li>Product quantity</li>
              <li>Strain ID</li>
              <li>Lot number</li>
              <li>Sale price</li>
              <li>THC%</li>
            </ul>
          </div>
          <div className="wedge-col right">
            <h4>What SolvixLMS tracks</h4>
            <ul>
              <li>Wash temperature curves</li>
              <li>Micron fractions</li>
              <li>Press profiles</li>
              <li>Yield by strain</li>
              <li>Technician performance</li>
              <li>Split-contract compliance trail</li>
              <li>Consumable burn per gram</li>
            </ul>
          </div>
        </div>
        <p className="wedge-closing">
          Competitors tell you <em>what</em> you made.<br />
          We tell you <em>how</em> you made it — and why the next batch will be better.
        </p>
      </div>
    </section>
  );
}

// ── Platform Section ──────────────────────────────────────────────────────────

function PlatformSection() {
  const [openSuite, setOpenSuite] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const suites = [
    {
      id: "core" as IconName, n: "SolvCORE", d: "Production & batch intelligence",
      detail: "Track every wash, dry, collection, and press at parameter depth. Capture wash temperature curves, micron fraction yields, press profiles, and technician attribution per batch. Institutional knowledge that compounds instead of evaporating.",
    },
    {
      id: "comp" as IconName, n: "SolvCOMP", d: "Compliance & inventory",
      detail: "Lot-level tracking, license trails, and Metrc-compatible reporting — produced as a byproduct of running your operation. COA tracking, contamination alerts, and audit trails on every record.",
    },
    {
      id: "erp" as IconName, n: "SolvERP", d: "Consumables & operations",
      detail: "Track consumables, packaging, and operational costs tied to the batches that use them. Cost-per-gram analysis, procurement tracking, and staff management.",
    },
    {
      id: "client" as IconName, n: "SolvCLIENT", d: "Client portal & split contracts",
      detail: "Give your clients real-time visibility into their material. Split-contract support for toll processing, automated yield notifications, and client-specific reporting.",
    },
    {
      id: "lytics" as IconName, n: "SolvLYTICS", d: "Analytics & intelligence",
      detail: "Yield trending by strain, technician performance benchmarking, cost-per-gram drill-downs, and production throughput dashboards — all from your own data.",
    },
    {
      id: "flow" as IconName, n: "SolvFLOW", d: "Workflow & scheduling",
      detail: "Plan production runs, assign equipment and technicians, identify bottlenecks, and see your facility's capacity at a glance.",
    },
    {
      id: "comm" as IconName, n: "SolvCOMM", d: "Command center",
      detail: "Your facility's nerve center. Real-time batch status, active alerts, staff notifications, and shift handoff summaries in one view.",
    },
  ];

  return (
    <section className="reveal" id="platform">
      <div className="container">
        <div className="section-tag mono">// The Platform</div>
        <h2 className="section-h">
          Seven suites. One system. <span className="grad-text">Zero</span> integrations to maintain.
        </h2>
        <p className="section-sub">
          Every suite shares the same data model, the same auth, the same audit trail. Turn on what
          you need. Add the rest when you&apos;re ready.
        </p>
        <div className="suite-grid">
          {suites.map((suite) => {
            const isOpen = openSuite === suite.id;
            return (
              <div
                className={"suite-card" + (isOpen ? " open" : "")}
                key={suite.id}
                onMouseMove={handleMouseMove}
                onClick={() => setOpenSuite(isOpen ? null : suite.id)}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenSuite(isOpen ? null : suite.id)}
              >
                <div className="suite-ic">
                  <Icon name={suite.id} size={18} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <div className="suite-name">{suite.n}</div>
                  <span style={{
                    color: "var(--text-dim)",
                    transition: "transform 0.3s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    lineHeight: 0,
                  }}>
                    <Icon name="chev" size={14} stroke={2} />
                  </span>
                </div>
                <p className="suite-desc">{suite.d}</p>
                <div className="suite-expand">
                  <p className="suite-desc">{suite.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="roadmap-row">
          <div className="roadmap-label mono">On the roadmap</div>
          <div className="roadmap-items">
            {[
              { icon: "link" as IconName, nm: "SolvLINK", desc: "Equipment IoT integration" },
              { icon: "globe" as IconName, nm: "SolvMRKT", desc: "Marketplace & insights" },
              { icon: "bot" as IconName, nm: "SolvAI", desc: "Operator copilot" },
            ].map((item) => (
              <div className="roadmap-item" key={item.nm}>
                <div className="ic"><Icon name={item.icon} size={14} /></div>
                <div>
                  <div className="nm">{item.nm}</div>
                  <div className="desc">{item.desc}</div>
                </div>
                <span className="roadmap-tag">[roadmap]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Product Section ───────────────────────────────────────────────────────────

function ProductSection() {
  return (
    <section className="reveal">
      <div className="container">
        <div className="section-tag mono">// Product</div>
        <h2 className="section-h">The tangible difference.</h2>

        <div className="product-row">
          <div className="product-text">
            <div className="num mono">01 · SolvCORE</div>
            <h3>See your process, not just your output.</h3>
            <p>
              Every wash, dry, collection, and press — captured per batch. Queryable across strains,
              technicians, and time. Institutional knowledge that compounds.
            </p>
          </div>
          <PlaceholderBrowser title="batch-workflow">
            <WashSessionContent />
          </PlaceholderBrowser>
        </div>

        <div className="product-row reverse">
          <div className="product-text">
            <div className="num mono">02 · SolvCOMP</div>
            <h3>Audit prep built into the workflow.</h3>
            <p>
              Lot-level tracking, license trails, state reporting — produced as a byproduct of
              running your operation, not as a separate chore.
            </p>
          </div>
          <PlaceholderBrowser title="compliance-inventory">
            <ComplianceContent />
          </PlaceholderBrowser>
        </div>

        <div className="product-row">
          <div className="product-text">
            <div className="num mono">03 · SolvLYTICS</div>
            <h3>The only intelligence trained on how you actually produce.</h3>
            <p>
              Cost-per-gram, yield trends, strain profiles, technician performance — from your own
              runs, not industry averages.
            </p>
          </div>
          <PlaceholderBrowser title="analytics-dashboard">
            <AnalyticsContent />
          </PlaceholderBrowser>
        </div>
      </div>
    </section>
  );
}

// ── Flywheel Section ──────────────────────────────────────────────────────────

function FlywheelSection() {
  const nodes = [
    { n: "TRACK", d: "SolvCORE captures every parameter", c: 1 },
    { n: "CONNECT", d: "SolvLINK multiplies data density", c: 2, roadmap: true },
    { n: "LEARN", d: "Cross-batch intelligence compounds", c: 3 },
    { n: "SPEAK", d: "Bishop delivers insight at the point of work", c: 4, roadmap: true },
    { n: "IMPROVE", d: "Operators make measurably better decisions", c: 5 },
    { n: "PROVE", d: "Certified outcomes", c: 6, roadmap: true },
  ];

  return (
    <section className="reveal">
      <div className="container">
        <div className="section-tag mono">// The Flywheel</div>
        <h2 className="section-h">Every batch makes every customer smarter.</h2>
        <p className="section-sub">
          The data you capture in SolvCORE feeds an intelligence loop designed to get sharper with
          every run.
        </p>
        <div className="flywheel">
          {nodes.map((node, i) => (
            <div
              key={node.n}
              className={"fw-node" + (node.roadmap ? " roadmap" : "")}
              data-c={node.c}
            >
              <div className="num">0{i + 1}</div>
              <div className="name">{node.n}</div>
              <div className="desc">{node.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Audience Section ──────────────────────────────────────────────────────────

function AudienceSection() {
  return (
    <section className="reveal">
      <div className="container">
        <div className="section-tag mono">// Who It&apos;s For</div>
        <h2 className="section-h">Built for extraction. Designed for every processor.</h2>
        <div className="aud-grid">
          <div className="aud-card">
            <div className="gloss" />
            <div className="cat">Extraction Specialists</div>
            <h3>Process-first. Yield-obsessed.</h3>
            <p>
              Solventless, hydrocarbon, ethanol, CO₂. Enter through SolvCORE. Lead with process
              tracking and yield intelligence.
            </p>
          </div>
          <div className="aud-card">
            <div className="gloss" />
            <div className="cat">General Processors</div>
            <h3>Compliance-first. Margin-focused.</h3>
            <p>
              Secondary manufacturing: vape carts, edibles, topicals, pre-rolls. Enter through
              SolvCOMP + SolvERP. Lead with compliance automation and cost clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing Section ───────────────────────────────────────────────────────────

function PricingSection() {
  return (
    <section className="reveal" id="pricing">
      <div className="container">
        <div className="section-tag mono">// Pricing</div>
        <h2 className="section-h">Simple plans. Serious power.</h2>
        <div className="price-grid">
          <div className="price-card">
            <div className="tier">Essentials</div>
            <div className="pr">$599<small>/mo</small></div>
            <p className="pos">The essential OS for solventless and secondary processing.</p>
            <div className="forz"><span>For</span>Small-to-mid facilities replacing spreadsheets.</div>
          </div>
          <div className="price-card popular">
            <div className="badge">Most Popular</div>
            <div className="tier" style={{ color: "#F4B942" }}>Professional</div>
            <div className="pr">$999<small>/mo</small></div>
            <p className="pos">The full operations platform with analytics and client transparency.</p>
            <div className="forz"><span>For</span>Growing labs needing inventory, client portal, and intelligence.</div>
          </div>
          <div className="price-card">
            <div className="tier">Enterprise</div>
            <div className="pr">$1,499<small>/mo</small></div>
            <p className="pos">The complete smart-lab ecosystem.</p>
            <div className="forz"><span>For</span>Multi-site operators running advanced automation.</div>
          </div>
        </div>
        <div className="every-inc">
          <span className="lab mono">Every plan includes</span>
          <span><i>·</i>Unlimited users</span>
          <span><i>·</i>All core modules</span>
          <span><i>·</i>Compliance workflows</span>
          <span><i>·</i>Email support</span>
          <span><i>·</i>Data export</span>
        </div>
        <div className="price-bottom-cta">
          Access is granted via the waitlist —{" "}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Join now →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Team Section ──────────────────────────────────────────────────────────────

function TeamSection() {
  return (
    <section className="reveal" id="company">
      <div className="container">
        <div className="section-tag mono">// Built by Operators</div>
        <h2 className="section-h">From the production floor, not a conference room.</h2>
        <div className="team-grid">
          <div className="tm-card">
            <div className="av">JN</div>
            <div className="nm">Joe Neihart</div>
            <div className="rl">Founder · CEO &amp; CMO</div>
            <p className="bio">
              USMC veteran. Operates one of the largest solventless extraction facilities in the
              U.S. Built SolvixLMS to solve his own production problems.
            </p>
          </div>
          <div className="tm-card">
            <div className="av">JB</div>
            <div className="nm">Joseph Babiak</div>
            <div className="rl">CEO · Growth Stalk Holdings</div>
            <p className="bio">
              Manufacturing, SaaS, and M&amp;A leadership. Brings public-company operating
              discipline to the platform.
            </p>
          </div>
          <div className="tm-card">
            <div className="av">JT</div>
            <div className="nm">Jay Tharian</div>
            <div className="rl">Chief Technology Officer</div>
            <p className="bio">
              Platform architect. React, TypeScript, Node.js, PostgreSQL. Builds systems that scale
              with the facility.
            </p>
          </div>
        </div>
        <div className="gstk-bar">
          <strong>A majority-owned subsidiary of Growth Stalk Holdings Corp</strong>
          <span className="divider">·</span>
          <span>OTC: GSTK</span>
          <span className="divider">·</span>
          <span>SEC-Reporting Entity</span>
          <span className="divider">·</span>
          <span>Publicly Traded</span>
        </div>
      </div>
    </section>
  );
}

// ── FAQ Section ───────────────────────────────────────────────────────────────

const FAQ_DATA: [string, string][] = [
  [
    "How is SolvixLMS different from Canix, Flourish, or Distru?",
    "Those platforms track inventory and compliance: what you have and where it is. SolvixLMS is purpose-built to track the process — what happens between receiving flower and shipping concentrate. Wash parameters, press profiles, yield by micron, technician performance: the things every processor wants to track but can't. None of that fits in a lot number. That's the category distinction.",
  ],
  [
    "Do I need to rip out my current software to try SolvixLMS?",
    "If you're on Distru, Canix, or Flourish — yes. SolvixLMS replaces them with a system purpose-built for processors. State compliance tools like Metrc and BioTrack are different: SolvixLMS integrates with those, not replaces them. SolvCORE is fully ready for solventless operations today; BHO, ethanol, and CO₂ workflows are rolling out next.",
  ],
  [
    "What does onboarding look like?",
    "Self-serve. Operators don't have time for a 30-day onboarding program — you get up and running on your own schedule with guided tutorials and Solvix University (in-depth video walkthroughs and documentation). When you need help, our team is available anytime.",
  ],
  [
    "Is my data secure?",
    "Yes. Your data lives in its own private space — no one else can see it. Everything in transit is encrypted. You decide who on your team can see what, and every change is logged so you always have a record of what happened and when. We're working toward SOC 2 certification in 2026 for additional third-party validation.",
  ],
  [
    "Do you integrate with Metrc and state seed-to-sale systems?",
    "SolvCOMP handles Metrc reporting and produces the outputs state systems require. Full Metrc API integration is in active development — reach out if this is blocking your evaluation.",
  ],
  [
    "Can I use SolvixLMS for hydrocarbon, ethanol, or CO₂ extraction?",
    "Solventless is where we run deepest today — that's where our team operates and where the platform is fully production-ready. BHO, ethanol, and CO₂ workflows are rolling out next, built the same way with full process tracking from intake to packaging. Get on the waitlist and tell us your method; we prioritize what our customers need.",
  ],
  [
    "What happens to my data if I cancel?",
    "Your data is yours. Full export (CSV and JSON) is available at any time. Cancellation comes with a 60-day grace period to pull anything you need.",
  ],
  [
    "How long does it take to see ROI?",
    "Most operators see cost-per-gram clarity within the first 30 days of clean capture. Yield-improvement gains from parameter analysis typically emerge around the 60–90 day mark.",
  ],
  [
    "How does the waitlist work?",
    "Join the list and we'll reach out when a slot opens for a facility of your profile and size. There's no charge to be on the waitlist.",
  ],
  [
    "Who do I talk to about enterprise or multi-site deployment?",
    "Book a demo and request an enterprise conversation — we'll loop in the right team.",
  ],
];

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="reveal" id="resources">
      <div className="container">
        <div className="section-tag mono">// FAQ</div>
        <h2 className="section-h">Questions we get a lot.</h2>
        <div className="faq-list">
          {FAQ_DATA.map(([q, a], i) => (
            <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{q}</span>
                <span className="ic"><Icon name="plus" size={14} stroke={2} /></span>
              </button>
              <div className="faq-a">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section className="final-cta reveal" id="demo">
      <div className="final-cta-bg" />
      <div className="final-cta-inner">
        <h2 style={{ letterSpacing: "0px" }}>Your data shouldn&apos;t die with the batch.</h2>
        <p>Join the waitlist. We&apos;ll reach out when a slot opens for a facility like yours.</p>
        <WaitlistForm location="final_cta" />
        <div style={{ marginTop: 18 }}>
          <a
            href="#top"
            className="sec-cta-link"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            or join the waitlist now <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/solvix-main-gray.svg"
            alt="SolvixLMS"
            className="footer-logo"
            style={{ width: 200, height: "auto", display: "block", marginBottom: 18 }}
          />
          <div className="tag">Built from the production floor.</div>
          <div className="sub">A subsidiary of Growth Stalk Holdings Corp (OTC: GSTK).</div>
        </div>

        <div className="footer-col">
          <h5>Platform</h5>
          <ul>
            {["SolvCORE", "SolvCOMP", "SolvERP", "SolvCLIENT", "SolvLYTICS", "SolvFLOW", "SolvCOMM"].map((s) => (
              <li key={s}><a href="#platform">{s}</a></li>
            ))}
            {["SolvLINK", "SolvMRKT", "SolvAI"].map((s) => (
              <li key={s}>
                <a href="#platform">{s}<span className="soon">soon</span></a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="#resources">Blog</a></li>
            <li><a href="#resources">Documentation<span className="soon">soon</span></a></li>
            <li><a href="#resources">Case Studies<span className="soon">soon</span></a></li>
            <li><a href="#resources">ROI Calculator<span className="soon">soon</span></a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#company">About</a></li>
            <li><a href="#company">Careers</a></li>
            <li><a href="#demo">Contact</a></li>
            <li><a href="#company">Press</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 SolvixLMS Technologies Inc. All rights reserved.</div>
        <div className="links">
          <a href="#disclaimers">Privacy</a>
          <a href="#disclaimers">Terms</a>
          <a
            href="https://www.sec.gov/cgi-bin/browse-edgar?company=growth+stalk&CIK=&type=&dateb=&owner=include&count=40&search_text=&action=getcompany"
            target="_blank"
            rel="noreferrer"
          >
            SEC Filings
          </a>
          <a href="#disclaimers">Forward-looking statements</a>
        </div>
      </div>
    </footer>
  );
}

// ── Page default export ───────────────────────────────────────────────────────

export default function Page() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Strip />
        <ProblemSection />
        <WedgeSection />
        <PlatformSection />
        <ProductSection />
        <FlywheelSection />
        <AudienceSection />
        <PricingSection />
        <TeamSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
