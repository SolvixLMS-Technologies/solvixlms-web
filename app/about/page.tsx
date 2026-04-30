"use client";

import { useEffect } from "react";

// ── Nav ───────────────────────────────────────────────────────────────────────

import { useState } from "react";

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
          <a href="/about" style={{ color: "var(--accent-amber)" }}>Company</a>
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
            <li><a href="/about">About</a></li>
            <li><a href="/about">Careers</a></li>
            <li><a href="/#demo">Contact</a></li>
            <li><a href="/about">Press</a></li>
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

// ── Principles data ───────────────────────────────────────────────────────────

const PRINCIPLES = [
  {
    title: "Process over product",
    body: "Everyone tracks what you made. We track how you made it — and why the next batch will be better.",
  },
  {
    title: "Operator-first design",
    body: "Built for gloved hands on the production floor, not for demos in a conference room. Every screen, every workflow, every interaction was designed for people who are actually running batches.",
  },
  {
    title: "One system, not ten integrations",
    body: "Seven suites sharing one data model. What you enter in SolvCORE is instantly available in SolvCOMP, SolvLYTICS, and everywhere else. No middleware tax.",
  },
  {
    title: "Your data is yours",
    body: "Full export at any time. 60-day grace period on cancellation. No lock-in, no hostage-taking. We earn your business every month.",
  },
];

// ── Team data ─────────────────────────────────────────────────────────────────

const TEAM = [
  {
    initials: "JN",
    name: "Joe Neihart",
    role: "Founder · CEO & CMO",
    bio: "Joe built SolvixLMS from the production floor of one of the largest solventless extraction operations in the country. Before founding the company, he managed multi-million dollar extraction facilities and saw firsthand how much institutional knowledge was being lost to spreadsheets and disconnected tools. He designed SolvixLMS to capture that knowledge at parameter depth.",
  },
  {
    initials: "JB",
    name: "Joseph Babiak",
    role: "CEO · Growth Stalk Holdings",
    bio: "Joseph leads Growth Stalk Holdings Corp (OTC: GSTK), the publicly traded parent company of SolvixLMS Technologies. He brings executive leadership and public markets experience to the SolvixLMS mission, ensuring the company has the corporate structure and investor confidence to scale.",
  },
  {
    initials: "JT",
    name: "Jay Tharian",
    role: "Chief Technology Officer",
    bio: "Jay leads the technical architecture and engineering behind SolvixLMS. From the multi-tenant PostgreSQL data model to the real-time production dashboards, he ensures the platform is built for reliability, security, and scale.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
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
            <span className="bc-cur">About</span>
          </nav>
        </div>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// ABOUT US</div>
            <h1 className="section-h" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
              Built by operators. Backed by experience.{" "}
              <span className="grad-text">Designed for the production floor.</span>
            </h1>
            <p className="section-sub" style={{ maxWidth: 680 }}>
              SolvixLMS didn&apos;t start in a tech incubator. It started on the production floor
              of one of the largest solventless extraction facilities in the United States — because
              the software we needed didn&apos;t exist.
            </p>
          </div>
        </section>

        {/* ── Origin Story ────────────────────────────────── */}
        <section className="reveal" style={{ padding: "60px 0 80px" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-tag mono">// THE STORY</div>
            <h2 className="section-h">We built what we couldn&apos;t find.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "clamp(15px, 1.8vw, 17px)", margin: 0 }}>
                Every cannabis extraction software on the market was built for inventory and compliance —
                tracking what you have and where it is. None of them tracked the process. Wash temperatures,
                micron fraction yields, press profiles, technician performance — the data that actually
                determines whether your output is good or bad, consistent or chaotic. That data was living
                in spreadsheets, group chats, and people&apos;s heads.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "clamp(15px, 1.8vw, 17px)", margin: 0 }}>
                SolvixLMS was built to fix that. We designed it inside a live extraction facility, tested
                it against real production runs, and refined it based on what operators actually need when
                they&apos;re wearing gloves and running batches. The result is seven integrated suites that
                share one data model — no middleware, no sync jobs, no data silos. Production intelligence
                that compounds over time instead of evaporating with each shift change.
              </p>
            </div>
          </div>
        </section>

        {/* ── Principles ──────────────────────────────────── */}
        <section className="reveal" style={{ padding: "0 0 80px" }}>
          <div className="container">
            <div className="section-tag mono">// PRINCIPLES</div>
            <h2 className="section-h">What we believe.</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
                marginTop: 12,
              }}
            >
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  className="plat-suite-card"
                  style={{ cursor: "default" }}
                >
                  <div className="suite-name">{p.title}</div>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, margin: "10px 0 0" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ────────────────────────────────────────── */}
        <section className="reveal" style={{ padding: "0 0 80px" }} id="company">
          <div className="container">
            <div className="section-tag mono">// THE TEAM</div>
            <h2 className="section-h">The people behind the platform.</h2>
            <div className="team-grid">
              {TEAM.map((member) => (
                <div key={member.name} className="tm-card">
                  <div className="av">{member.initials}</div>
                  <div className="nm">{member.name}</div>
                  <div className="rl">{member.role}</div>
                  <p className="bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Corporate Structure ─────────────────────────── */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="container">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 10,
                padding: "24px 32px",
                textAlign: "center",
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                SolvixLMS Technologies Inc. is a majority-owned subsidiary of Growth Stalk Holdings Corp
                {" "}·{" "}OTC: GSTK{" "}·{" "}SEC-Reporting Entity{" "}·{" "}Publicly Traded
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <section className="final-cta reveal">
          <div className="final-cta-bg" />
          <div className="final-cta-inner">
            <h2 style={{ letterSpacing: "0px" }}>
              Want to learn more?
            </h2>
            <p>
              Book a demo or join the waitlist. We&apos;ll show you what SolvixLMS looks like
              for a facility like yours.
            </p>
            <div className="plat-cta-row" style={{ justifyContent: "center" }}>
              <a href="/#top" className="btn btn-solid">
                Join the Waitlist{" "}
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
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
