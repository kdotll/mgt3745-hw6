// Candidate knockout qualification extracted from Google AI Studio script
export function evaluateCandidate(candidate) {
  const ALLOWED_MAJORS = [
    'Accounting',
    'Finance',
    'Accounting Information Systems',
    'Internal Audit'
  ];

  const ALLOWED_WORK_AUTH = [
    'Citizen',
    'Permanent Resident',
    'F-1 OPT',
    'verified work visa',
    'Verified Work Visa'
  ];

  const ALLOWED_GOVERNANCE_COURSES = [
    'Auditing',
    'AIS',
    'Internal Controls'
  ];

  // AI Studio defaults target intake year to 2026/2027 cycle
  const targetIntakeYear = 2026;
  const gradYear = parseInt(String(candidate.gradYear), 10);
  const gradDelta = Math.abs(gradYear - targetIntakeYear);

  const majorPass = ALLOWED_MAJORS.includes(candidate.degree);
  const gradPass = !isNaN(gradDelta) && (gradDelta <= 1 || Math.abs(gradYear - 2027) <= 1);
  const authPass = ALLOWED_WORK_AUTH.includes(candidate.workAuth);
  
  const courses = Array.isArray(candidate.courses) ? candidate.courses : [];
  const coursePass = courses.some(c => ALLOWED_GOVERNANCE_COURSES.includes(c));

  const unmet = [];
  if (!majorPass) unmet.push('Degree Alignment');
  if (!gradPass) unmet.push('Graduation Timeline');
  if (!authPass) unmet.push('Work Authorization');
  if (!coursePass) unmet.push('Coursework Prerequisite');

  const eligible = unmet.length === 0;

  return {
    status: eligible ? 'Eligible' : 'Ineligible',
    badgeColor: eligible ? '#15803d' : '#922020',
    unmet: unmet
  };
}