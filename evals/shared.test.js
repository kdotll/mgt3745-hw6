// One test, run against both builds, so they face an identical check.
import { test } from "node:test";
import assert from "node:assert/strict";
import * as bolt from "./impl/bolt.js";
import * as aistudio from "./impl/aistudio.js";

const builds = { bolt, aistudio };

for (const [name, impl] of Object.entries(builds)) {
  test(`${name}: F-01-Ubiquitous - Eligible candidate passes with #15803d badge`, () => {
    const validCandidate = {
      degree: "Accounting",
      gradYear: 2026,
      workAuth: "Citizen",
      courses: ["Auditing"]
    };

    const result = impl.evaluateCandidate(validCandidate);
    assert.equal(result.status, "Eligible", `${name} must return 'Eligible' for compliant candidate`);
    assert.equal(result.badgeColor, "#15803d", `${name} must render success green #15803d badge`);
  });

  test(`${name}: F-01-IF - Ineligible candidate flagged with #922020 badge and specific unmet reason`, () => {
    const invalidCandidate = {
      degree: "Biology",
      gradYear: 2026,
      workAuth: "Citizen",
      courses: []
    };

    const result = impl.evaluateCandidate(invalidCandidate);
    assert.equal(result.status, "Ineligible", `${name} must flag non-compliant profile as 'Ineligible'`);
    assert.equal(result.badgeColor, "#922020", `${name} must render error red #922020 badge`);
    assert.ok(
      result.unmet && result.unmet.some(u => u.toLowerCase().includes("degree")),
      `${name} must specify Degree Alignment as an unmet requirement`
    );
  });

  test(`${name}: F-01 Determinism - Running identical input twice yields identical verdict`, () => {
    const candidate = {
      degree: "Finance",
      gradYear: 2026,
      workAuth: "Permanent Resident",
      courses: ["Internal Controls"]
    };

    const run1 = impl.evaluateCandidate(candidate);
    const run2 = impl.evaluateCandidate(candidate);

    assert.deepEqual(run1, run2, `${name} qualification gate must be strictly deterministic across repeated runs`);
  });
}