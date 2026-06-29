"use client";

import { useState, useEffect } from "react";

// ── Icon ─────────────────────────────────────────────────────────────────────

function Icon({ name, size = 16, stroke = 2 }: { name: "arrow" | "plus" | "check"; size?: number; stroke?: number }) {
  const paths = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
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
          <a href="/pricing" style={{ color: "var(--accent-amber)" }}>Pricing</a>
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

// ── Comparison table data ─────────────────────────────────────────────────────

type RowVal = true | false | string;

const TABLE_GROUPS: { group: string; rows: { label: string; ess: RowVal; pro: RowVal; ent: RowVal }[] }[] = [
  {
    group: "Production",
    rows: [
      { label: "Batch tracking", ess: true, pro: true, ent: true },
      { label: "Process parameter capture", ess: true, pro: true, ent: true },
      { label: "Run profiles", ess: true, pro: true, ent: true },
      { label: "Session monitoring", ess: true, pro: true, ent: true },
    ],
  },
  {
    group: "Compliance",
    rows: [
      { label: "Lot tracking", ess: true, pro: true, ent: true },
      { label: "Regulatory-compatible reporting", ess: true, pro: true, ent: true },
      { label: "COA tracking", ess: true, pro: true, ent: true },
      { label: "Audit trail", ess: true, pro: true, ent: true },
    ],
  },
  {
    group: "Operations",
    rows: [
      { label: "Consumable tracking", ess: false, pro: true, ent: true },
      { label: "Cost-per-gram analysis", ess: false, pro: true, ent: true },
      { label: "Procurement tracking", ess: false, pro: true, ent: true },
      { label: "Staff management", ess: false, pro: true, ent: true },
    ],
  },
  {
    group: "Client Management",
    rows: [
      { label: "Client portal", ess: false, pro: true, ent: true },
      { label: "Split contracts", ess: false, pro: true, ent: true },
      { label: "Client notifications", ess: false, pro: true, ent: true },
    ],
  },
  {
    group: "Workflow",
    rows: [
      { label: "Production scheduling", ess: false, pro: true, ent: true },
      { label: "Equipment scheduling", ess: false, pro: true, ent: true },
      { label: "Capacity planning", ess: false, pro: true, ent: true },
    ],
  },
  {
    group: "Analytics & AI",
    rows: [
      { label: "Yield trending", ess: false, pro: false, ent: true },
      { label: "Technician benchmarking", ess: false, pro: false, ent: true },
      { label: "Cost drill-downs", ess: false, pro: false, ent: true },
      { label: "AI yield prediction", ess: false, pro: false, ent: "when available" },
    ],
  },
  {
    group: "Support & Infrastructure",
    rows: [
      { label: "Email support", ess: true, pro: true, ent: true },
      { label: "Priority support", ess: false, pro: true, ent: true },
      { label: "Dedicated account manager", ess: false, pro: false, ent: true },
      { label: "API access", ess: false, pro: true, ent: true },
      { label: "SSO / SAML", ess: false, pro: false, ent: true },
      { label: "Custom integrations", ess: false, pro: false, ent: true },
      { label: "SLA guarantee", ess: false, pro: false, ent: true },
    ],
  },
];

function Cell({ val }: { val: RowVal }) {
  if (val === true) return <span className="c-yes">✓</span>;
  if (val === false) return <span className="c-no">—</span>;
  return <span className="c-note">{val}</span>;
}

// ── FAQ data ──────────────────────────────────────────────────────────────────

const FAQ: [string, string][] = [
  [
    "Do you charge per user?",
    "No. Every plan includes unlimited users. We don't believe in per-seat pricing for production software — your whole team needs access, from technicians to managers.",
  ],
  [
    "Can I switch plans?",
    "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle. No penalties, no lock-in contracts.",
  ],
  [
    "What happens after the waitlist?",
    "Once a slot opens for your facility profile, we'll reach out to schedule onboarding. The 30-day onboarding program is included in every plan at no extra cost.",
  ],
  [
    "Is there a free trial?",
    "We don't offer self-serve trials. Instead, we do a structured demo and onboarding so you get real value from day one. Book a demo to get started.",
  ],
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
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

  return (
    <>
      <Nav />
      <main>

        {/* ── Breadcrumb ─────────────────────────────────── */}
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bc-sep">/</span>
            <span className="bc-cur">Pricing</span>
          </nav>
        </div>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// PRICING</div>
            <h1 className="section-h" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
              Simple pricing. No per-seat charges. No surprises.
            </h1>
            <p className="section-sub" style={{ maxWidth: 620 }}>
              Every plan includes unlimited users, all core modules, and a dedicated onboarding
              program. Pick the tier that matches your facility&apos;s scale.
            </p>
          </div>
        </section>

        {/* ── Pricing cards ───────────────────────────────── */}
        <section className="reveal" style={{ padding: "0 0 20px" }}>
          <div className="container">
            <div className="price-grid">

              {/* Essentials */}
              <div className="price-card">
                <div className="tier">Essentials</div>
                <div className="pr">$599<small>/mo</small></div>
                <p className="pos">For single-site operations getting started.</p>
                <ul className="price-feat-list">
                  <li>Unlimited users</li>
                  <li>SolvCORE — production tracking</li>
                  <li>SolvCOMP — compliance &amp; inventory</li>
                  <li>SolvCOMM — command center</li>
                  <li>Email support</li>
                  <li>Data export (CSV + JSON)</li>
                  <li>30-day onboarding program</li>
                </ul>
                <a href="/#top" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                  Join the Waitlist
                </a>
              </div>

              {/* Professional */}
              <div className="price-card popular">
                <div className="badge">Most Popular</div>
                <div className="tier" style={{ color: "#F4B942" }}>Professional</div>
                <div className="pr">$999<small>/mo</small></div>
                <p className="pos">For facilities scaling production and client operations.</p>
                <ul className="price-feat-list">
                  <li>Everything in Essentials</li>
                  <li>SolvERP — consumables &amp; operations</li>
                  <li>SolvCLIENT — client portal &amp; split contracts</li>
                  <li>SolvFLOW — workflow &amp; scheduling</li>
                  <li>Priority support</li>
                  <li>Custom report templates</li>
                  <li>API access</li>
                </ul>
                <a href="/#top" className="btn btn-solid" style={{ width: "100%", justifyContent: "center" }}>
                  Join the Waitlist <Icon name="arrow" size={15} stroke={2} />
                </a>
              </div>

              {/* Enterprise */}
              <div className="price-card">
                <div className="tier">Enterprise</div>
                <div className="pr">$1,499<small>/mo</small></div>
                <p className="pos">For multi-site operators and high-volume facilities.</p>
                <ul className="price-feat-list">
                  <li>Everything in Professional</li>
                  <li>SolvLYTICS — analytics &amp; intelligence</li>
                  <li>SolvAI — yield prediction &amp; AI insights</li>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations</li>
                  <li>SLA guarantee</li>
                  <li>Multi-site management</li>
                  <li>SSO / SAML</li>
                </ul>
                <a href="/#demo" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                  Contact Sales
                </a>
              </div>

            </div>

            {/* Every plan includes */}
            <div className="every-inc">
              <span className="lab mono">Every plan includes</span>
              <span><i>·</i>Unlimited users (no per-seat)</span>
              <span><i>·</i>All core modules</span>
              <span><i>·</i>Compliance workflows</span>
              <span><i>·</i>Email support</span>
              <span><i>·</i>Full data export</span>
            </div>
          </div>
        </section>

        {/* ── Comparison table ────────────────────────────── */}
        <section className="reveal" style={{ padding: "60px 0 80px" }}>
          <div className="container">
            <div className="section-tag mono">// COMPARE PLANS</div>
            <h2 className="section-h">See exactly what&apos;s in each tier.</h2>
            <div className="comp-wrap">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>Feature</th>
                    <th>Essentials</th>
                    <th>Professional</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_GROUPS.map((group) => (
                    <>
                      <tr key={group.group} className="comp-group-row">
                        <td colSpan={4}>{group.group}</td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.label}>
                          <td>{row.label}</td>
                          <td><Cell val={row.ess} /></td>
                          <td><Cell val={row.pro} /></td>
                          <td><Cell val={row.ent} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="reveal" style={{ padding: "0 0 80px" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-tag mono">// FAQ</div>
            <h2 className="section-h">Pricing questions.</h2>
            <div className="faq-list">
              {FAQ.map(([q, a], i) => (
                <div key={i} className={"faq-item" + (openFaq === i ? " open" : "")}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{q}</span>
                    <span className="ic" style={{ color: "var(--accent-amber)", transition: "transform .3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-a">
                    <p>{a}</p>
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
            <h2 style={{ letterSpacing: "0px" }}>
              Ready to see what SolvixLMS can do for your facility?
            </h2>
            <p>
              Join the waitlist. No commitment, no credit card. We&apos;ll reach out when a slot opens.
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
