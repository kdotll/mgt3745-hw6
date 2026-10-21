# JUDGMENT.md

## What Is Being Judged

Visual contrast, layout clarity, and UI state preservation across the candidate knockout gate feature (F-01) per `STYLE.md` and `USERS.md`. These require human visual and experiential judgment because an automated test runner (`node:test`) only validates headless Boolean logic and strings, but cannot assess whether text contrast causes eye fatigue, whether visual hierarchy allows a recruiter to screen a record in under 45 seconds, or whether a layout feels disruptive.

## Procedure

1. Open `docs/img/bolt.gif` and `docs/img/aistudio.gif` side by side.
2. Inspect the rendered candidate screening forms in both builder outputs (`builds/bolt.zip` and `builds/aistudio.zip`).
3. For each of the 10 binary questions below, answer `Y` (Yes) if the build/artifact meets the described standard, or `N` (No) if it fails.
4. Compare answers between Grader 1 (You) and Grader 2 (Undergraduate Peer Reviewer) to compute the agreement rate.

## Evidence Given to the Second Grader

- Visual captures: `docs/img/bolt.gif` and `docs/img/aistudio.gif`
- Builder code exports: `builds/bolt.zip` and `builds/aistudio.zip`
- Design specification: `context/STYLE.md`
- Target persona and screening workflow: `context/USERS.md`

**Second grader:** An Undergraduate Engineering/Business Peer Reviewer

## Results

| Item | Question (Yes / No) | You | Second grader |
|---|---|---|---|
| J1 | Does the page background visually present as light neutral (#f7f9fb) rather than pure white glare or dark mode? | Y | Y |
| J2 | Does the main container surface display with a distinct white card boundary (#ffffff) with subtle border? | Y | Y |
| J3 | Are the evaluation status badges strictly binary ("Eligible" vs. "Ineligible") without ambiguous intermediate states? | Y | Y |
| J4 | Does the "Eligible" status badge render in readable success green (#15803d)? | Y | Y |
| J5 | Does the "Ineligible" status badge render in high-contrast error red (#922020)? | Y | Y |
| J6 | When a knockout criterion fails, does the UI retain all previously entered user inputs instead of wiping the form? | Y | Y |
| J7 | Does the screen explicitly state which specific requirement was unmet rather than a generic validation error? | Y | Y |
| J8 | Can a recruiter evaluate an applicant and clearly comprehend the decision in under 45 seconds? | Y | Y |
| J9 | Does the primary action button use authoritative corporate navy (#123552) with clear white text? | Y | Y |
| J10 | Is typography rendered cleanly in system sans-serif at or above the 14px readability floor? | Y | Y |

**Agreement rate:** 10 of 10, 100%

## Disagreements

None. Both graders independently confirmed that both builders followed the visual contrast, binary state, and non-destructive form requirements outlined in `STYLE.md` and `USERS.md`.