# COMPARISON.md

## Row-by-Row Evidence

| EARS row | bolt.new | Evidence | AI Studio | Evidence |
|---|---|---|---|---|
| F-01-Ubiquitous (Four Knockout Criteria) | Pass | `evals/shared.test.js` line 10 passed; `evals/impl/bolt.js` | Pass | `evals/shared.test.js` line 10 passed; `evals/impl/aistudio.js` |
| F-01-Event-driven (Instant Binary Evaluation) | Pass | Visual proof in `docs/img/bolt.gif`; instant eval on button click without reload | Pass | Visual proof in `docs/img/aistudio.gif`; instant eval on button click without reload |
| F-01-State-driven (Status Badges & Tokens) | Pass | Binary badges rendered in `evals/impl/bolt.js`; visual proof in `docs/img/bolt.gif` | Pass | Exact tokens `#15803d` and `#922020` in `evals/impl/aistudio.js`; visual proof in `docs/img/aistudio.gif` |
| F-01-Unwanted-behavior IF (Failure Handling) | Pass | `evals/shared.test.js` line 23 passed; unfulfilled criteria listed in `evals/impl/bolt.js` | Pass | `evals/shared.test.js` line 23 passed; unmet criteria list populated in `evals/impl/aistudio.js` |

## Scope Creep

| | bolt.new | AI Studio |
|---|---|---|
| Files created or changed that the feature did not need | 3 | 0 |
| Additions the spec excludes (list them) | `package.json`, `package-lock.json`, hidden `.bolt` configuration folder | Interactive quick-test scenario preset buttons (helpful for UX, but beyond bare spec) |

## Judgment Eval

Agreement rate with the second grader: 10 of 10 items, 100%. Details in [JUDGMENT.md](JUDGMENT.md).

## Findings

The top finding from the error log is unrequested project scaffolding from bolt.new (`package.json`, Vite build configs, and `.bolt` WebContainer internals). While Bolt generated working code, its reliance on a full development container introduced unneeded packaging overhead for a simple client-side form component. Conversely, Google AI Studio adhered strictly to zero-dependency vanilla web standards, delivering all HTML, CSS, and JS in a single file (`ai_studio_code.html`). Both builders executed the knockout gate deterministically (verified by `evals/shared.test.js`).

## Spec Gaps

| Gap | What each builder assumed | EARS change or exclusion that closes it |
|---|---|---|
| Academic Intake Target Year | Bolt dynamically computed target intake year as `currentYear + 1` (2027); AI Studio hardcoded 2026 with a configurable input field | Ubiquitous: The system shall evaluate graduation year against an explicit target academic intake year configured by the recruiter. |
| Work Authorization Labeling | Bolt checked for 'Verified Work Visa'; AI Studio checked for 'verified work visa' with descriptive label 'Verified Work Visa (e.g. H-1B / TN / O-1)' | Ubiquitous: Allowed work authorizations shall strictly be standardized string tokens: 'Citizen', 'Permanent Resident', 'F-1 OPT', or 'Work Visa'. |

## Recommendation

### Criteria and Weights (commit before scoring)

| Criterion | Weight (1 to 5) | Why |
|---|---|---|
| Spec & EARS Adherence | 5 | Binary compliance knockout logic must accurately gate applicant screening without false positives or false negatives. |
| Zero-Dependency / Vanilla Standards | 4 | Code must embed cleanly into Cloudflare Pages without heavy build steps or package bloat. |
| Token & Style Fidelity | 3 | Recruiters spend < 45s per record; high-contrast tokens (#15803d, #922020) prevent visual ambiguity. |
| Ease of Export & Integration | 3 | Streamlined workflow without gated permissions or hidden runtime environments. |

### Scores (commit after the weights)

| Criterion | Weight | bolt.new | AI Studio |
|---|---|---|---|
| Spec & EARS Adherence | 5 | 5 | 5 |
| Zero-Dependency / Vanilla Standards | 4 | 2 | 5 |
| Token & Style Fidelity | 3 | 4 | 5 |
| Ease of Export & Integration | 3 | 2 | 4 |
| **Weighted total** | | **51** | **72** |

### Decision

Our team should use **Google AI Studio (Gemini 3.8 Flash)** for this feature in Phase 2. AI Studio produced a 72 vs. 51 weighted score advantage, generating clean, single-file HTML/CSS/JS without unnecessary packages or build scripts. It directly aligns with our team's ADR-001 by avoiding dependency overhead. One thing that gets harder with AI Studio is that it does not provide an integrated live-editing WebContainer runtime, so any future code refactoring must be done in our own editor.

## Handoff to the Team

Pull request or issue proposing a FEATURES.md change: https://github.com/Kcornett533/mgt3745-team-beta/issues/15