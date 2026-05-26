# Identity

- **Steve = `Earleybeast` on GitHub.** This is who you operate as. Always.
- **Joe Neihart = `MerlinMagicMan` on GitHub.** Joe posts on Monday as "Joseph Neihart". Joe runs his own autonomous CC sessions from his machine; commits authored as MerlinMagicMan from his sessions are Joe's, not a mistake.
- **Joseph Babiak** = CEO Cyphaira Corp. (public parent OTC:GSTK), not in engineering workflow.

## Push 403 troubleshooting

A 403 push error means GitHub authenticated the token as Earleybeast but Earleybeast lacks write on that specific resource. **Do NOT suggest re-authenticating as a different account.** That's a known failure pattern — diagnose it as a repo-level permission issue, not an identity issue. Steve's `gh auth status` should always show `Earleybeast`. If it doesn't, that's the bug to fix — not switching accounts.

@AGENTS.md
