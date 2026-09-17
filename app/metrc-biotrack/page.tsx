"use client";

import { useEffect } from "react";
import { SiteNav, SiteFooter, PageCta } from "../components/SiteChrome";

export default function MetrcBioTrackPage() {
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
            <span className="bc-cur">Metrc / BioTrack</span>
          </nav>
        </div>

        <section className="plat-hero">
          <div className="container">
            <div className="section-tag mono">// INTEGRATIONS</div>
            <h1
              className="section-h"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}
            >
              Built to complement Metrc and BioTrack — not replace them
            </h1>
            <p className="section-sub" style={{ maxWidth: 700 }}>
              State track-and-trace systems answer where inventory moved. Your floor still
              needs a record of how the batch was made. That is SolvixLMS.
            </p>
          </div>
        </section>

        <section className="reveal" style={{ padding: "0 0 64px" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div className="aud-grid">
              <div className="aud-card">
                <div className="gloss" />
                <div className="cat">Track-and-trace</div>
                <h3>Metrc / BioTrack</h3>
                <p>
                  Regulated tags, transfers, and inventory events your state requires. Essential
                  for compliance — incomplete as a production memory system.
                </p>
              </div>
              <div className="aud-card">
                <div className="gloss" />
                <div className="cat">Process ops</div>
                <h3>SolvixLMS</h3>
                <p>
                  Parameter-depth batch runs, yields by fraction/grade, technician context,
                  client portal, and cost clarity — the operational layer beside track-and-trace.
                </p>
              </div>
            </div>

            <h2 className="section-h" style={{ fontSize: "1.75rem", marginTop: 48 }}>
              Honest integration status
            </h2>
            <p className="suite-desc" style={{ lineHeight: 1.75 }}>
              SolvixLMS is <strong>designed to integrate</strong> with Metrc and BioTrack
              workflows. We do not claim a universal live connector for every jurisdiction on
              day one. Book a demo for the current path for your state — and how operators
              bridge process data with tags today without double-entry chaos.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.75rem", marginTop: 40 }}>
              What you stop losing
            </h2>
            <ul className="suite-desc" style={{ lineHeight: 1.9, paddingLeft: 20 }}>
              <li>Process notes trapped in texts and whiteboards while tags live in Metrc</li>
              <li>Toll-client questions that tags alone cannot answer</li>
              <li>Yield meetings with no reproducible run profile attached to the lot</li>
            </ul>

            <h2 className="section-h" style={{ fontSize: "1.75rem", marginTop: 48 }}>
              FAQ
            </h2>
            <div className="faq-list" style={{ marginTop: 20 }}>
              <div className="faq-item open">
                <div className="faq-q" role="heading" aria-level={3}>
                  <span>Does SolvixLMS replace Metrc or BioTrack?</span>
                </div>
                <div className="faq-a">
                  <p>
                    No. Metrc and BioTrack are state track-and-trace systems for regulated inventory.
                    SolvixLMS is designed to complement them by capturing process parameters, yields,
                    and production operations that track-and-trace systems do not store.
                  </p>
                </div>
              </div>
              <div className="faq-item open">
                <div className="faq-q" role="heading" aria-level={3}>
                  <span>Do you integrate with Metrc or BioTrack today?</span>
                </div>
                <div className="faq-a">
                  <p>
                    SolvixLMS is designed to integrate with state track-and-trace workflows.
                    Integration depth and timing vary by jurisdiction — book a demo for the current
                    status for your state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCta
          title="Map track-and-trace to your process layer"
          body="Book a facility demo for your state's workflow — or join the waitlist."
        />
      </main>
      <SiteFooter />
    </>
  );
}
