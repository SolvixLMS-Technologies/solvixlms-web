# Proposal: Move marketing site to Vercel

Move the SolvixLMS marketing site www back to Vercel and keep the app and database on Railway. This isolates the public site from the app, restores per-PR preview deploys and edge performance, and prevents the failure where merged marketing changes sit undeployed.

Full rationale, technical plan, and open questions are in the pull request description.

Status: awaiting review from Joe / MerlinMagicMan.
