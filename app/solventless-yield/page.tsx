"use client";

import { useEffect } from "react";
import { SiteNav, SiteFooter, PageCta } from "../components/SiteChrome";

export default function SolventlessYieldPage() {
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
            <span className="bc-cur">Solventless yield</span>
          </nav>
        </div>

        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// SOLVENTLESS</div>
            <h1
              className="section-h"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}
            >
              Solventless yield tracking that remembers the wash — not just the weight
            </h1>
            <p className="section-sub" style={{ maxWidth: 700 }}>
              Spreadsheets tell you what came out. SolvixLMS captures the parameters,
              grades, and technician context so your best runs become a system — not a story.
            </p>
          </div>
        </section>

        <section className="reveal" style={{ padding: "0 0 64px" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <h2 className="section-h" style={{ fontSize: "1.75rem" }}>
              The cost of missing process data
            </h2>
            <p className="suite-desc" style={{ lineHeight: 1.75, marginBottom: 24 }}>
              A failed or unreproducible batch can wipe $20K–$100K in biomass and labor. Solventless
              margins already sit in a tight band versus hydrocarbon — losing 3–8 points of yield to
              “we forgot how we did it last time” is not a software preference. It is an ops failure.
            </p>

            <div className="aud-grid">
              <div className="aud-card">
                <div className="gloss" />
                <div className="cat">Capture</div>
                <h3>Parameter-depth runs</h3>
                <p>
                  Record the knobs your floor actually turns — water temp, agitation, micron
                  stacks, dwell, press profiles — tied to the lot and the tech on the pad.
                </p>
              </div>
              <div className="aud-card">
                <div className="gloss" />
                <div className="cat">Measure</div>
                <h3>Yields by fraction &amp; grade</h3>
                <p>
                  See what each wash actually produced. Compare runs without reconstructing history
                  from photos and texts.
                </p>
              </div>
              <div className="aud-card">
                <div className="gloss" />
                <div className="cat">Improve</div>
                <h3>Intelligence when you need it</h3>
                <p>
                  Operational cost-per-gram lands on Professional. SolvLYTICS yield trending and
                  technician benchmarking ship on Enterprise — see{" "}
                  <a href="/pricing" style={{ color: "var(--accent-amber)" }}>
                    pricing
                  </a>
                  .
                </p>
              </div>
            </div>

            <h2 className="section-h" style={{ fontSize: "1.75rem", marginTop: 48 }}>
              Built inside a live facility
            </h2>
            <p className="suite-desc" style={{ lineHeight: 1.75 }}>
              SolvixLMS was not designed in a conference room for “any lab.” Initial depth is
              strongest where our operators run day to day. Additional workflow templates roll out
              the same way — process first. Tell us your method on the demo or waitlist; we
              prioritize what customers need.
            </p>
          </div>
        </section>

        <PageCta
          title="Bring a real wash to the demo"
          body="Book 30 minutes. We will walk yield tracking against your process — not a canned deck."
        />
      </main>
      <SiteFooter />
    </>
  );
}
