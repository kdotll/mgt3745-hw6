### Tight (a count)

bolt.new will satisfy 4 of my 4 EARS rows; AI Studio will satisfy 3 of 4 EARS rows.

**Resolution (2026-10-21):** Both bolt.new and Google AI Studio satisfied 4 of 4 EARS rows (Ubiquitous, Event-driven, State-driven, and Unwanted-behavior IF). AI Studio performed better than anticipated by implementing all criteria accurately on the first pass.

### Loose (a direction with a reason)

AI Studio will write simple, plain code in one place, while bolt.new will add extra files, folders, and styling libraries that we didn't ask for.

**Resolution (2026-10-21):** Confirmed. Google AI Studio generated a clean, single-file HTML document with zero external dependencies. Bolt.new scaffolded a multi-file Vite build container with `package.json`, `package-lock.json`, and `.bolt` metadata.

### Open (a question the builds can answer)

If a student puts in the wrong information and gets flagged, will the screen clear out everything they typed, or will it keep their answers so they can just fix their mistake?

**Resolution (2026-10-21):** Both builders successfully preserved input fields upon failure. AI Studio used `event.preventDefault()` without clearing the form, and Bolt kept all field values intact while dynamically appending the failure list below.

## Error Log

| Error | Builder | Frequency | EARS row | Evidence |
|---|---|---|---|---|
| Unrequested project scaffolding and lockfile manifests | bolt.new | 1 | N/A (Standards) | `builds/bolt.zip` contains `package.json`, `package-lock.json`, and Vite config |
| DOM-coupled event handlers requiring export wrappers | both | 1 | Event-driven | Adapted in `evals/impl/bolt.js` and `evals/impl/aistudio.js` |
| Dynamic academic cycle discrepancy (2027 vs 2026 intake) | both | 1 | Ubiquitous (Grad Year) | Bolt dynamically computed 2027 (`evals/impl/bolt.js`); AI Studio defaulted to 2026 (`evals/impl/aistudio.js`) |