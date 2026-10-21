# PROMPT.md

The exact text both builders received, unchanged between them. Paste it below.

---

Build a single-page web app in plain HTML, CSS, and client-side JavaScript that implements this candidate knockout triage feature exactly as specified.

### Feature Specification (from FEATURES.md)
- Ubiquitous: The system shall evaluate candidate eligibility against explicit, deterministic criteria:
  1. Degree Alignment: Major must be strictly within accredited accounting/finance disciplines ('Accounting', 'Finance', 'Accounting Information Systems', or 'Internal Audit').
  2. Graduation Timeline: Graduation year must be within the current academic cycle (<= 1 year from target intake).
  3. Work Authorization: Must possess valid, unexpired domestic employment eligibility ('Citizen', 'Permanent Resident', 'F-1 OPT', or verified work visa).
  4. Coursework Prerequisite: Completion of at least one foundational governance or assurance course (Auditing, AIS, or Internal Controls).
- Event-driven: When a candidate submits their qualification profile, the system shall evaluate the credentials against the four criteria and assign an immediate, strictly binary status badge ('Eligible' or 'Ineligible' with no indeterminate or conditional states).
- State-driven: While displaying evaluation results, the system shall render 'Eligible' in success green (#15803d) and 'Ineligible' in error red (#922020) per STYLE.md.
- Unwanted-behavior (IF): If any of the four deterministic criteria fail to be satisfied, then the system shall flag the profile as 'Ineligible' and specify which exact requirement was unmet without throwing unhandled execution exceptions or wiping user input fields.

### User Need (from USERS.md)
Campus recruiters screen 300–500+ applicant records and spend under 45 seconds per resume. They need an instant, unambiguous qualification decision on the screen upon submission without reloading the page, so they can immediately verify compliance.

### Visual Styling (from STYLE.md)
- Page Background: Light neutral `#f7f9fb`.
- Card / Container Surface: Clean white `#ffffff` with a subtle 1px `#172b4d` border and `4px` border-radius.
- Typography: Arial, Helvetica, sans-serif; primary text color `#172b4d`; minimum font size 14px.
- Submit Button: Primary solid container `#123552` with bold `#ffffff` text and `4px` radius.
- Status Badges: Strictly binary text and colors ('Eligible' with `#15803d` background/border; 'Ineligible' with `#922020` background/border).

---

## Retries

None