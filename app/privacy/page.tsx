"use client";

import { SiteNav, SiteFooter } from "../components/SiteChrome";

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="bc-sep">/</span>
            <span className="bc-cur">Privacy</span>
          </nav>
        </div>

        <section className="plat-hero">
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="section-tag mono">// LEGAL</div>
            <h1
              className="section-h"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: 16 }}
            >
              Privacy Policy
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
              SolvixLMS Technologies Inc. (“SolvixLMS,” “we,” “us”) operates https://www.solvixlms.com
              and related marketing and product services. This policy describes how we handle
              personal information collected through our websites, waitlist and demo forms, and
              product accounts.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Information we collect
            </h2>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <strong>Contact data</strong> — email address and optional facility details you
                submit via demo or waitlist forms.
              </li>
              <li>
                <strong>Account data</strong> — name, email, organization, and role when you use
                the SolvixLMS application (app.solvixlms.com).
              </li>
              <li>
                <strong>Usage data</strong> — pages viewed, approximate location derived from IP,
                device/browser type, and referral URLs via analytics tools (including Google Tag
                Manager / analytics tags we configure).
              </li>
              <li>
                <strong>Communications</strong> — messages you send us by email or support channels.
              </li>
            </ul>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              How we use information
            </h2>
            <ul style={{ paddingLeft: 20 }}>
              <li>Respond to demo requests and waitlist interest</li>
              <li>Provide, secure, and improve the SolvixLMS product</li>
              <li>Send operational or product-related messages you request</li>
              <li>Analyze site performance and marketing effectiveness</li>
              <li>Comply with law and enforce our terms</li>
            </ul>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Sharing
            </h2>
            <p>
              We do not sell personal information. We share data with service providers who process
              it on our behalf (hosting, email, analytics, authentication) under contractual
              obligations, or when required by law.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Retention &amp; security
            </h2>
            <p>
              We retain information as long as needed for the purposes above, then delete or
              anonymize it when practical. We use industry-standard safeguards; no method of
              transmission or storage is 100% secure.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Your choices
            </h2>
            <p>
              You may request access, correction, or deletion of personal information we hold about
              you by contacting{" "}
              <a href="mailto:privacy@solvixlms.com" style={{ color: "var(--accent-amber)" }}>
                privacy@solvixlms.com
              </a>
              . Marketing opt-outs are available in those messages. Some product data must be
              retained for legal or security reasons.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Children
            </h2>
            <p>
              SolvixLMS is a B2B service for regulated lab operators. We do not knowingly collect
              personal information from children under 16.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Changes
            </h2>
            <p>
              We may update this policy. The “Last updated” date will change when we do. Material
              changes may also be noted on the site or by email where appropriate.
            </p>

            <h2 className="section-h" style={{ fontSize: "1.4rem", marginTop: 36 }}>
              Contact
            </h2>
            <p>
              SolvixLMS Technologies Inc.
              <br />
              Email:{" "}
              <a href="mailto:privacy@solvixlms.com" style={{ color: "var(--accent-amber)" }}>
                privacy@solvixlms.com
              </a>
              <br />
              Web:{" "}
              <a href="https://www.solvixlms.com" style={{ color: "var(--accent-amber)" }}>
                https://www.solvixlms.com
              </a>
            </p>
            <p style={{ marginTop: 24, fontSize: "0.9rem", opacity: 0.8 }}>
              This page is a standard SaaS privacy notice for the marketing site and related
              services. Customer agreements and a DPA may apply to paid product use and govern in
              case of conflict for those customers.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
