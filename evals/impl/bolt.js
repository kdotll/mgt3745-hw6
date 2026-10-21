// Candidate knockout qualification extracted from bolt.new main.js
export function evaluateCandidate(candidate) {
  const ACCREDITED_MAJORS = [
    'Accounting',
    'Finance',
    'Accounting Information Systems',
    'Internal Audit',
  ];

  const VALID_AUTHORIZATIONS = [
    'Citizen',
    'Permanent Resident',
    'F-1 OPT',
    'Verified Work Visa',
    'verified work visa'
  ];

  const REQUIRED_COURSES = ['Auditing', 'AIS', 'Internal Controls'];
  
  // Bolt anchors target intake dynamically to next year (2027)
  const TARGET_INTAKE_YEAR = new Date().getFullYear() + 1;

  const failures = [];

  const gradYear = Number.parseInt(String(candidate.gradYear), 10);
  const gradYearValid = !Number.isNaN(gradYear);

  // 1. Degree Alignment
  if (!ACCREDITED_MAJORS.includes(candidate.degree)) {
    failures.push('Degree Alignment: major is not within accredited accounting/finance disciplines.');
  }

  // 2. Graduation Timeline
  if (!gradYearValid || gradYear < TARGET_INTAKE_YEAR - 1 || gradYear > TARGET_INTAKE_YEAR + 1) {
    failures.push(
      `Graduation Timeline: graduation year must be within the current academic cycle (between ${TARGET_INTAKE_YEAR - 1} and ${TARGET_INTAKE_YEAR + 1}).`
    );
  }

  // 3. Work Authorization
  if (!VALID_AUTHORIZATIONS.includes(candidate.workAuth)) {
    failures.push('Work Authorization: no valid, unexpired domestic employment eligibility on record.');
  }

  // 4. Coursework Prerequisite
  const courses = Array.isArray(candidate.courses) ? candidate.courses : [];
  if (!courses.some((c) => REQUIRED_COURSES.includes(c))) {
    failures.push('Coursework Prerequisite: no completed foundational governance or assurance course (Auditing, AIS, or Internal Controls).');
  }

  const eligible = failures.length === 0;

  return {
    status: eligible ? 'Eligible' : 'Ineligible',
    badgeColor: eligible ? '#15803d' : '#922020',
    unmet: failures
  };
}