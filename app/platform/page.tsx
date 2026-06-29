"use client";

import { useState, useEffect } from "react";

// ── Icon ─────────────────────────────────────────────────────────────────────

type IconName =
  | "arrow" | "plus" | "lock" | "core" | "comp" | "erp" | "client"
  | "lytics" | "flow" | "comm" | "link" | "bot" | "check" | "chev"
  | "zap" | "globe" | "cube";

function Icon({ name, size = 18, stroke = 1.6 }: { name: IconName; size?: number; stroke?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>,
    core: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" /><circle cx="12" cy="12" r="3" /></>,
    comp: <><path d="M9 12l2 2 4-4" /><path d="M21 12c0 5-4 8-9 10-5-2-9-5-9-10V5l9-2 9 2v7z" /></>,
    erp: <><path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 12l9 4 9-4M3 17l9 4 9-4" /></>,
    client: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3 3-6 6-6s6 3 6 6" /><circle cx="17" cy="10" r="2.5" /><path d="M14.5 18c0-2.2 1.5-4 3.5-4s3.5 1.8 3.5 4" /></>,
    lytics: <><path d="M3 20h18" /><rect x="5" y="10" width="3" height="8" /><rect x="10.5" y="5" width="3" height="13" /><rect x="16" y="13" width="3" height="5" /></>,
    flow: <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 6h8M18 8v8M8 7.5c0 6 8 4 8 9.5" /></>,
    comm: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M7 21l3-4M17 21l-3-4M8 8h8M8 12h5" /></>,
    link: <><path d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" /><path d="M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" /></>,
    bot: <><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /><path d="M8 20v2M16 20v2" /></>,
    check: <path d="M5 12l4 4 10-10" />,
    chev: <path d="M6 9l6 6 6-6" />,
    zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
    cube: <><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /><path d="M3 7l9 5 9-5M12 12v10" /></>,
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
          <a href="/platform" style={{ color: "var(--accent-amber)" }}>Platform</a>
          <a href="/pricing">Pricing</a>
          <a href="/faq">Resources</a>
          <a href="/about">Company</a>
        </div>
        <div className="nav-cta">
          <a href="/#demo" className="btn btn-ghost">Book a Demo</a>
          <a href="https://app.solvixlms.com" className="btn btn-solid">Dashboard Login</a>
        </div>
      </div>
    </nav>
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
            <li><a href="/#demo">Contact</a></li>
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

// ── Suite data ────────────────────────────────────────────────────────────────

const SUITES = [
  {
    id: "core" as IconName,
    label: "SolvCORE",
    h3: "See your process, not just your output.",
    desc: "Every stage of every run — captured per batch with parameter-level depth. Queryable across batches, technicians, and time. Institutional knowledge that compounds instead of evaporating.",
    features: [
      "Batch-level tracking across every process and QC stage",
      "Process temperature curves and fraction/grade yields",
      "Run profile capture with technician attribution",
      "Real-time session monitoring with KPI dashboards",
      "Cross-batch performance comparison",
    ],
  },
  {
    id: "comp" as IconName,
    label: "SolvCOMP",
    h3: "Audit prep built into the workflow.",
    desc: "Lot-level tracking, license trails, and state reporting — produced as a byproduct of running your operation, not as a separate compliance chore bolted on at the end.",
    features: [
      "Unified inventory with human-readable lot numbers",
      "Regulatory-compatible reporting and state compliance outputs",
      "COA tracking and contamination alerts",
      "Audit trail on every record with timestamp and user attribution",
      "Sample intake QA with weight reconciliation",
    ],
  },
  {
    id: "erp" as IconName,
    label: "SolvERP",
    h3: "Know exactly what it costs to produce what you sell.",
    desc: "Track what you spend to produce what you sell. Consumables, components, and packaging — tied to the batch that consumed them, down to cost-per-gram.",
    features: [
      "Consumable inventory with burn-rate tracking",
      "Cost-per-gram calculation per batch and per product",
      "Procurement and reorder tracking",
      "Staff management and HR basics",
    ],
  },
  {
    id: "client" as IconName,
    label: "SolvCLIENT",
    h3: "Client transparency without the phone tag.",
    desc: "Give your clients real-time visibility into their material as it moves through your facility. Split contracts, batch progress, yield reports — all without a phone call.",
    features: [
      "Client-facing portal with permissioned batch visibility",
      "Split-contract support for toll processing",
      "Automated yield and status notifications",
      "Client-specific reporting and export",
    ],
  },
  {
    id: "lytics" as IconName,
    label: "SolvLYTICS",
    h3: "The only intelligence trained on how you actually produce.",
    desc: "The only analytics engine trained on how you actually produce. Cost trends, yield curves, batch profiles, technician performance — from your own runs, not industry averages.",
    features: [
      "Yield trending by batch, technician, and time period",
      "Cost-per-gram analysis with drill-down by consumable",
      "Technician performance benchmarking",
      "Production volume and throughput dashboards",
    ],
  },
  {
    id: "flow" as IconName,
    label: "SolvFLOW",
    h3: "Replace the whiteboard with a system that doesn't lie.",
    desc: "Plan production runs, assign equipment and technicians, and see your facility's capacity at a glance. No more whiteboard scheduling.",
    features: [
      "Production workflow planning and stage sequencing",
      "Equipment and technician scheduling",
      "Capacity planning and bottleneck identification",
      "Automated stage transition triggers",
    ],
  },
  {
    id: "comm" as IconName,
    label: "SolvCOMM",
    h3: "Your facility's nerve center.",
    desc: "Real-time batch status, active alerts, staff notifications, and operational health — all in one view. Purpose-built for production managers who need to see everything without clicking through six different screens.",
    features: [
      "Real-time facility dashboard with active batch overview",
      "Staff notification system with priority routing",
      "Alert management for equipment, compliance, and process deviations",
      "Shift handoff summaries and operational notes",
    ],
    fullWidth: true,
  },
];

const ARCH_LAYERS = [
  { layer: "Frontend", tech: "React + TypeScript", desc: "Purpose-built UI for gloved hands and production floor conditions" },
  { layer: "API", tech: "Express.js + TypeScript", desc: "RESTful API with RBAC, rate limiting, full audit logging" },
  { layer: "Data", tech: "PostgreSQL", desc: "Single source of truth. Multi-tenant isolation at the query level" },
  { layer: "Auth", tech: "Auth0 (OAuth/OIDC)", desc: "Enterprise-grade identity. Role-based permissions. SSO-ready" },
  { layer: "Monitoring", tech: "Sentry", desc: "Real-time error tracking and performance monitoring" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* ── Breadcrumb ─────────────────────────────────── */}
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bc-sep">/</span>
            <span className="bc-cur">Platform</span>
          </nav>
        </div>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// THE PLATFORM</div>
            <h1 className="section-h" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
              Seven suites. One system.{" "}
              <span className="grad-text">Zero</span> integrations to maintain.
            </h1>
            <p className="section-sub" style={{ maxWidth: 680 }}>
              Every suite shares the same data model, the same auth, the same audit trail.
              Turn on what you need. Add the rest when you&apos;re ready. No middleware, no sync
              jobs, no data silos.
            </p>
            <div className="plat-cta-row">
              <a href="/#top" className="btn btn-solid">
                Join the Waitlist <Icon name="arrow" size={16} stroke={2} />
              </a>
              <a href="/#demo" className="btn btn-ghost">Book a Demo</a>
            </div>
          </div>
        </section>

        {/* ── Suite deep-dives ────────────────────────────── */}
        <section className="reveal" style={{ padding: "40px 0 80px" }}>
          <div className="container">
            <div className="section-tag mono">// THE SUITES</div>
            <h2 className="section-h">What each suite actually does.</h2>
            <div className="plat-suite-grid">
              {SUITES.map((suite) => (
                <div
                  key={suite.label}
                  className={"plat-suite-card" + (suite.fullWidth ? " full-width" : "")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ color: "var(--accent-amber)", lineHeight: 0 }}>
                      <Icon name={suite.id} size={20} />
                    </div>
                    <div className="plat-suite-label">{suite.label}</div>
                  </div>
                  <h3 className="plat-suite-h">{suite.h3}</h3>
                  <p className="plat-suite-desc">{suite.desc}</p>
                  <ul className="feat-list">
                    {suite.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── Roadmap ─────────────────────────────────── */}
            <div className="plat-roadmap">
              <div className="plat-roadmap-label">On the roadmap</div>
              <div className="plat-roadmap-items">
                {[
                  { icon: "link" as IconName, nm: "SolvLINK", desc: "Equipment IoT integration" },
                  { icon: "globe" as IconName, nm: "SolvMRKT", desc: "Marketplace & insights" },
                  { icon: "bot" as IconName, nm: "SolvAI", desc: "Operator copilot & yield prediction" },
                ].map((item) => (
                  <div className="plat-roadmap-item" key={item.nm}>
                    <div className="ic"><Icon name={item.icon} size={16} stroke={1.5} /></div>
                    <div>
                      <div className="nm">{item.nm}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                    <span className="plat-roadmap-tag">[roadmap]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Architecture ────────────────────────────────── */}
        <section className="reveal" style={{ padding: "60px 0 80px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="container">
            <div className="section-tag mono">// ARCHITECTURE</div>
            <h2 className="section-h">One data model. Shared everywhere.</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Other platforms bolt modules together with middleware and sync jobs. SolvixLMS suites
              share a single PostgreSQL schema — what you enter in SolvCORE is instantly available
              in SolvCOMP, SolvLYTICS, and every other suite.
            </p>
            <div className="plat-arch-layers">
              {ARCH_LAYERS.map((row) => (
                <div className="plat-arch-row" key={row.layer}>
                  <div className="plat-arch-layer">{row.layer}</div>
                  <div>
                    <div className="plat-arch-tech">{row.tech}</div>
                    <div className="plat-arch-desc">{row.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <section className="final-cta reveal">
          <div className="final-cta-bg" />
          <div className="final-cta-inner">
            <h2 style={{ letterSpacing: "0px" }}>Ready to see your operation clearly?</h2>
            <p>
              Join the waitlist. We onboard facilities based on fit and capacity — no spam, no
              pressure.
            </p>
            <div className="plat-cta-row" style={{ justifyContent: "center" }}>
              <a href="/#top" className="btn btn-solid">
                Join the Waitlist <Icon name="arrow" size={16} stroke={2} />
              </a>
              <a href="/#demo" className="btn btn-ghost">Book a Demo</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
