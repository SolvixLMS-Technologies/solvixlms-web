"use client";

import { useEffect } from "react";
import { SiteNav, SiteFooter, PageCta } from "../components/SiteChrome";

export default function VsLimsPage() {
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
      { threshold: 0.12 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteNav />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bc-sep">/</span>
            <span className="bc-cur">vs Traditional LIMS</span>
          </nav>
        </div>

        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// COMPARISON</div>
            <h1
              className="section-h"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}
            >
              SolvixLMS vs traditional LIMS
            </h1>
            <p className="section-sub" style={{ maxWidth: 680 }}>
              Most LIMS tools were built for sample custody and inventory. Extraction and
              solventless labs lose money when the <em>process</em> dies with the shift —
              not when a barcode goes missing.
            </p>
          </div>
        </section>

        <section className="reveal" style={{ padding: "0 0 64px" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <h2 className="section-h" style={{ fontSize: "1.75rem" }}>
              What buyers usually mean by “LIMS”
            </h2>
            <p className="suite-desc" style={{ lineHeight: 1.75, marginBottom: 24 }}>
              Inventory LIMS and lab information systems excel at chain of custody, COAs,
              and “where is the lot?” That matters. It does not answer: what wash pressure,
              dwell, micron stack, and technician choices produced yesterday’s best grade —
              and how do we reproduce it tomorrow?
            </p>

            <div className="comp-wrap" style={{ marginTop: 32 }}>
              <table className="comp-table">
                <thead>
                  <tr>
                    <th style={{ width: "40%" }}>Capability</th>
                    <th>Typical LIMS / inventory</th>
                    <th>SolvixLMS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sample / lot tracking", "Core strength", "Included (SolvCORE / SolvCOMP)"],
                    ["Chain of custody & COA", "Strong", "Regulatory-compatible workflows"],
                    ["Process parameter capture", "Often thin or custom", "Built for parameter depth"],
                    ["Fraction / grade yields", "Rare", "Native production model"],
                    ["Technician attribution", "Limited", "Run profiles & benchmarking*"],
                    ["Client portal / splits", "Addon or absent", "SolvCLIENT on Professional+"],
                    ["Yield intelligence (SolvLYTICS)", "BI bolt-on", "Enterprise analytics suite"],
                  ].map(([cap, lims, solvix]) => (
                    <tr key={cap}>
                      <td>{cap}</td>
                      <td>{lims}</td>
                      <td>{solvix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="section-sub" style={{ marginTop: 12, fontSize: "0.9rem" }}>
              *Advanced technician benchmarking ships with SolvLYTICS on Enterprise. See{" "}
              <a href="/pricing" style={{ color: "var(--accent-amber)" }}>
                pricing
              </a>
              .
            </p>
          </div>
        </section>

        <section className="reveal" style={{ padding: "0 0 64px" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <h2 className="section-h" style={{ fontSize: "1.75rem" }}>
              When to keep a classic LIMS
            </h2>
            <p className="suite-desc" style={{ lineHeight: 1.75 }}>
              If your facility is primarily a testing lab or your bottleneck is pure sample
              accessioning, a clinical-style LIMS may still be the right shelf. SolvixLMS is
              built for production operations — facilities that live and die by reproducible
              process, not just inventory accuracy.
            </p>
            <h2 className="section-h" style={{ fontSize: "1.75rem", marginTop: 40 }}>
              When SolvixLMS is the better fit
            </h2>
            <ul className="suite-desc" style={{ lineHeight: 1.9, paddingLeft: 20 }}>
              <li>You are replacing spreadsheets, whiteboards, and group texts for batch runs</li>
              <li>Toll clients ask “what happened to my flower?” and you cannot show the run</li>
              <li>Yield meetings argue opinions because the process record is incomplete</li>
              <li>You need compliance plus production ops in one data model</li>
            </ul>
          </div>
        </section>

        <PageCta
          title="See process tracking on your workflow"
          body="Book a 30-minute facility demo — or join the waitlist if you are still mapping tools."
        />
      </main>
      <SiteFooter />
    </>
  );
}
