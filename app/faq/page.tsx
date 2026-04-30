"use client";

import { useState, useEffect } from "react";

// ── Icon ─────────────────────────────────────────────────────────────────────

function Icon({ name, size = 16, stroke = 2 }: { name: "arrow" | "plus"; size?: number; stroke?: number }) {
  const paths = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
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
          <a href="/faq" style={{ color: "var(--accent-amber)" }}>Resources</a>
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
          <div className="sub">A subsidiary of Growth Stalk Holdings Corp (OTC: GSTK).</div>
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
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/faq">Blog<span className="soon">soon</span></a></li>
            <li><a href="/faq">Documentation<span className="soon">soon</span></a></li>
            <li><a href="/faq">Case Studies<span className="soon">soon</span></a></li>
            <li><a href="/faq">ROI Calculator<span className="soon">soon</span></a></li>
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
          <a href="https://www.sec.gov/cgi-bin/browse-edgar?company=growth+stalk&CIK=&type=&dateb=&owner=include&count=40&search_text=&action=getcompany"
            target="_blank" rel="noreferrer">SEC Filings</a>
          <a href="/#disclaimers">Forward-looking statements</a>
        </div>
      </div>
    </footer>
  );
}

// ── FAQ data ──────────────────────────────────────────────────────────────────

type FaqItem = { q: string; a: string };
type FaqCategory = { label: string; items: FaqItem[] };

const CATEGORIES: FaqCategory[] = [
  {
    label: "About SolvixLMS",
    items: [
      {
        q: "How is SolvixLMS different from Canix, Flourish, or Distru?",
        a: "Those platforms track inventory and compliance — what you have and where it is. SolvixLMS tracks the process — what happened between receiving flower and shipping concentrate. Wash parameters, press profiles, yield by micron, technician performance. None of that fits in a lot number. That's the category distinction.",
      },
      {
        q: "Can I use SolvixLMS for hydrocarbon, ethanol, or CO₂ extraction?",
        a: "Yes. The platform is method-agnostic at the process layer. Our initial depth is strongest on solventless because that's where we operate, but the data model accommodates any extraction method.",
      },
      {
        q: "Do I need to rip out my current software to try SolvixLMS?",
        a: "No. SolvixLMS runs alongside your existing compliance and state reporting tools. Most customers start with SolvCORE for production tracking and add modules as they need them.",
      },
    ],
  },
  {
    label: "Getting Started",
    items: [
      {
        q: "What does onboarding look like?",
        a: "A structured 30-day program: facility walkthrough, data migration from spreadsheets, SOP capture, team training, and a go-live checkpoint. Our early cohort onboarded in 2–4 weeks depending on facility size.",
      },
      {
        q: "How does the waitlist work?",
        a: "Join the list, we'll reach out when a slot opens for a facility of your profile and size. No charge to be on the waitlist.",
      },
      {
        q: "How long does it take to see ROI?",
        a: "Most operators see cost-per-gram clarity inside the first 30 days of clean capture. Yield-improvement gains from parameter analysis typically emerge at the 60–90 day mark.",
      },
    ],
  },
  {
    label: "Compliance & Integrations",
    items: [
      {
        q: "Do you integrate with Metrc and state seed-to-sale?",
        a: "SolvCOMP handles Metrc reporting and produces the outputs state systems require. Full Metrc API integration is in active development; reach out if this is blocking.",
      },
      {
        q: "Is my data secure?",
        a: "Every deployment is isolated at the tenant level. All traffic over TLS. Role-based access control. Audit trails on every record. SOC 2 readiness is on our 2026 roadmap.",
      },
      {
        q: "What happens to my data if I cancel?",
        a: "Your data is yours. Full export (CSV and JSON) available at any time. Cancellation gives you a 60-day grace period to pull anything you need.",
      },
    ],
  },
  {
    label: "Pricing & Plans",
    items: [
      {
        q: "Do you charge per user?",
        a: "No. Every plan includes unlimited users. We don't believe in per-seat pricing for production software — your whole team needs access, from technicians to managers.",
      },
      {
        q: "Can I switch plans?",
        a: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle. No penalties, no lock-in contracts.",
      },
      {
        q: "Is there a free trial?",
        a: "We don't offer self-serve trials. Instead, we do a structured demo and onboarding so you get real value from day one. Book a demo to get started.",
      },
    ],
  },
  {
    label: "Enterprise",
    items: [
      {
        q: "Who do I talk to about enterprise or multi-site deployment?",
        a: "Book a demo and request an enterprise conversation — we'll loop in the right team.",
      },
    ],
  },
];

// Build flat index for global open/close tracking
const FLAT_ITEMS: FaqItem[] = CATEGORIES.flatMap((c) => c.items);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  let globalIndex = 0;

  return (
    <>
      <Nav />
      <main>

        {/* ── Breadcrumb ─────────────────────────────────── */}
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bc-sep">/</span>
            <span className="bc-cur">FAQ</span>
          </nav>
        </div>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// FREQUENTLY ASKED QUESTIONS</div>
            <h1 className="section-h" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
              Everything you need to know.
            </h1>
            <p className="section-sub" style={{ maxWidth: 620 }}>
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/#demo" style={{ color: "var(--accent-amber)", textDecoration: "none" }}>
                Book a demo
              </a>{" "}
              and we&apos;ll answer anything.
            </p>
          </div>
        </section>

        {/* ── FAQ categories ──────────────────────────────── */}
        <section className="reveal" style={{ padding: "0 0 80px" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            {CATEGORIES.map((cat) => {
              const catStartIndex = globalIndex;
              globalIndex += cat.items.length;

              return (
                <div key={cat.label} style={{ marginBottom: 56 }}>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--accent-amber)",
                      marginBottom: 20,
                      paddingBottom: 10,
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    {cat.label}
                  </div>
                  <div className="faq-list">
                    {cat.items.map((item, localIdx) => {
                      const idx = catStartIndex + localIdx;
                      const isOpen = openFaq === idx;
                      return (
                        <div key={idx} className={"faq-item" + (isOpen ? " open" : "")}>
                          <button
                            className="faq-q"
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <span
                              className="ic"
                              style={{
                                color: "var(--accent-amber)",
                                transition: "transform .3s",
                                transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                              }}
                            >
                              <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            </span>
                          </button>
                          <div className="faq-a">
                            <p>{item.a}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <section className="final-cta reveal">
          <div className="final-cta-bg" />
          <div className="final-cta-inner">
            <h2 style={{ letterSpacing: "0px" }}>
              Still have questions?
            </h2>
            <p>
              Book a demo and talk directly with our team. No sales script — just real answers.
            </p>
            <div className="plat-cta-row" style={{ justifyContent: "center" }}>
              <a href="/#demo" className="btn btn-solid">
                Book a Demo <Icon name="arrow" size={16} stroke={2} />
              </a>
              <a href="/#top" className="btn btn-ghost">Join the Waitlist</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
