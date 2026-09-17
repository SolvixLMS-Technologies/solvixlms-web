"use client";

import { useState, useEffect } from "react";

export function Icon({
  name,
  size = 16,
  stroke = 2,
}: {
  name: "arrow" | "plus" | "check";
  size?: number;
  stroke?: number;
}) {
  const paths = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
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
    >
      {paths[name]}
    </svg>
  );
}

export function SiteNav({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkStyle = (href: string) =>
    active === href ? { color: "var(--accent-amber)" as const } : undefined;

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="SolvixLMS home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/solvix-wordmark-header.png"
            alt="SolvixLMS"
            className="x-logo"
            style={{ objectFit: "contain", height: "100px", width: "auto", filter: "none" }}
          />
        </a>
        <div className="nav-links">
          <a href="/platform" style={linkStyle("/platform")}>
            Platform
          </a>
          <a href="/pricing" style={linkStyle("/pricing")}>
            Pricing
          </a>
          <a href="/faq" style={linkStyle("/faq")}>
            Resources
          </a>
          <a href="/about" style={linkStyle("/about")}>
            Company
          </a>
        </div>
        <div className="nav-cta">
          <a href="/#demo" className="btn btn-solid">
            Book a Demo
          </a>
          <a href="https://app.solvixlms.com" className="btn btn-ghost">
            Dashboard Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
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
        </div>
        <div className="footer-col">
          <h5>Platform</h5>
          <ul>
            {["SolvCORE", "SolvCOMP", "SolvERP", "SolvCLIENT", "SolvLYTICS", "SolvFLOW", "SolvCOMM"].map(
              (s) => (
                <li key={s}>
                  <a href="/platform">{s}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="/vs-lims">vs traditional LIMS</a>
            </li>
            <li>
              <a href="/metrc-biotrack">Metrc / BioTrack</a>
            </li>
            <li>
              <a href="/solventless-yield">Solventless yield</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/#demo">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 SolvixLMS Technologies Inc. All rights reserved.</div>
        <div className="links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function PageCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="final-cta reveal">
      <div className="final-cta-bg" />
      <div className="final-cta-inner">
        <h2 style={{ letterSpacing: "0px" }}>{title}</h2>
        <p>{body}</p>
        <div className="plat-cta-row" style={{ justifyContent: "center" }}>
          <a href="/#demo" className="btn btn-solid">
            Book a Demo <Icon name="arrow" size={16} stroke={2} />
          </a>
          <a href="/#waitlist" className="btn btn-ghost">
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
