"use client";

import { SiteNav, SiteFooter } from "../components/SiteChrome";

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bc-sep">/</span>
            <span className="bc-cur">Terms</span>
          </nav>
        </div>

        <section className="plat-hero">
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-tag mono">// LEGAL</div>
            <h1
              className="section-h"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: 16 }}
            >
              Terms of Service
            </h1>
            <p className="section-sub">Last updated: September 16, 2026</p>
          </div>
        </section>

        <section style={{ padding: "0 0 80px" }}>
          <div
            className="container suite-desc"
            style={{ maxWidth: 800, lineHeight: 1.75 }}
          >
            <p>
              These Terms of Service (“Terms”) govern your access to and use of
              https://www.solvixlms.com and related marketing pages, forms, and content operated by
              SolvixLMS Technologies Inc. (“SolvixLMS,” “we,” “us”). By using the site, you agree to
              these Terms.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              1. Marketing site vs. product agreement
            </h2>
            <p>
              These Terms cover the public marketing website, demo requests, and waitlist
              submissions. Access to the SolvixLMS application (app.solvixlms.com) and paid
              subscriptions are governed by a separate customer agreement, order form, or clickwrap
              presented at signup. If those conflict with these Terms for product use, the customer
              agreement controls.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              2. Acceptable use
            </h2>
            <p>You agree not to:</p>
            <ul style={{ paddingLeft: 20 }}>
              <li>Misrepresent your identity or facility when requesting a demo or waitlist spot</li>
              <li>Scrape, attack, or overload the site</li>
              <li>Attempt unauthorized access to systems or accounts</li>
              <li>Use the site for unlawful purposes</li>
            </ul>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              3. Intellectual property
            </h2>
            <p>
              Site content, trademarks, logos, and software descriptions are owned by SolvixLMS or
              its licensors. You may not copy or reuse them except for reasonable personal or
              internal evaluation, or with prior written permission.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              4. Demo and waitlist
            </h2>
            <p>
              Submitting a demo or waitlist form does not create a paid subscription. We may accept,
              decline, or delay onboarding based on facility fit and capacity. Communications you
              send must be accurate to the best of your knowledge.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              5. Disclaimers
            </h2>
            <p>
              The marketing site is provided “as is.” Roadmap items (including features labeled
              soon, not for sale, or in development) are not commitments. Pricing and features may
              change. We disclaim warranties to the fullest extent permitted by law.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              6. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, SolvixLMS is not liable for indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or
              data, arising from use of the marketing site. Our aggregate liability for claims
              relating to the marketing site will not exceed one hundred U.S. dollars ($100).
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              7. Indemnity
            </h2>
            <p>
              You will indemnify SolvixLMS against claims arising from your misuse of the site or
              violation of these Terms.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              8. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, excluding conflict of
              law rules. Courts in Delaware have exclusive jurisdiction for disputes arising from
              the marketing site, except where prohibited.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              9. Changes
            </h2>
            <p>
              We may update these Terms by posting a revised version with a new “Last updated”
              date. Continued use after changes constitutes acceptance.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              10. Contact
            </h2>
            <p>
              SolvixLMS Technologies Inc.
              <br />
              Email:{" "}
              <a href="mailto:legal@solvixlms.com" style={{ color: "var(--accent-amber)" }}>
                legal@solvixlms.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
