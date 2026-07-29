const technicalSkills = [
  "java",
  "javascript",
  "typescript",
  "python",
  "c",
  "c++",
  "react",
  "next.js",
  "node",
  "express",
  "mongodb",
  "mysql",
  "sql",
  "html",
  "css",
  "tailwind",
  "bootstrap",
  "firebase",
  "redux",
  "git",
  "github",
  "docker",
  "aws",
  "rest api",
  "machine learning",
  "data structures",
  "algorithms"
];

const softSkills = [
  "leadership",
  "communication",
  "teamwork",
  "problem solving",
  "critical thinking",
  "time management",
  "adaptability",
  "presentation"
];

const actionWords = [
  "developed",
  "built",
  "created",
  "implemented",
  "optimized",
  "designed",
  "improved",
  "deployed",
  "integrated",
  "managed",
  "achieved",
  "led",
  "collaborated"
];

function analyzeResume(text) {

  const resumeText = text.toLowerCase();

  let score = 0;

  let grade = "";

  let summary = "";

  let skillsFound = [];

  let missingSkills = [];

  let strengths = [];

  let weaknesses = [];

  let suggestions = [];

  let breakdown = {

    technicalSkills: 0,

    softSkills: 0,

    education: 0,

    projects: 0,

    experience: 0,

    certifications: 0,

    contact: 0,

    linkedin: 0,

    github: 0,

    sections: 0,

    actionWords: 0

  };

  // ===========================
  // TECHNICAL SKILLS
  // ===========================

  technicalSkills.forEach((skill) => {

    if (resumeText.includes(skill)) {

      skillsFound.push(skill);

      score += 2;

      breakdown.technicalSkills += 2;

    }

    else {

      missingSkills.push(skill);

    }

  });

  // ===========================
  // SOFT SKILLS
  // ===========================

  softSkills.forEach((skill) => {

    if (resumeText.includes(skill)) {

      score += 1;

      breakdown.softSkills += 1;

    }

  });
    // ===========================
  // EDUCATION
  // ===========================

  if (
    resumeText.includes("btech") ||
    resumeText.includes("b.tech") ||
    resumeText.includes("bachelor") ||
    resumeText.includes("engineering")
  ) {

    score += 15;
    breakdown.education = 15;

    strengths.push("Education section is present.");

  } else {

    weaknesses.push("Education section missing.");

    suggestions.push(
      "Add your education details clearly."
    );

  }

  // ===========================
  // PROJECTS
  // ===========================

  if (resumeText.includes("project")) {

    score += 15;
    breakdown.projects = 15;

    strengths.push("Projects section detected.");

  } else {

    weaknesses.push("Projects section missing.");

    suggestions.push(
      "Add at least 2 strong technical projects."
    );

  }

  // ===========================
  // EXPERIENCE
  // ===========================

  if (
    resumeText.includes("internship") ||
    resumeText.includes("experience")
  ) {

    score += 15;
    breakdown.experience = 15;

    strengths.push("Experience/Internship found.");

  } else {

    weaknesses.push("No internship experience.");

    suggestions.push(
      "Add internship or practical experience."
    );

  }

  // ===========================
  // CERTIFICATIONS
  // ===========================

  if (
    resumeText.includes("certificate") ||
    resumeText.includes("certification")
  ) {

    score += 5;
    breakdown.certifications = 5;

    strengths.push("Certifications detected.");

  }

  // ===========================
  // CONTACT DETAILS
  // ===========================

  const emailRegex =
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

  const phoneRegex =
    /(\+91[\-\s]?)?[6-9]\d{9}/;

  if (emailRegex.test(resumeText)) {

    score += 5;
    breakdown.contact += 2.5;

  } else {

    suggestions.push(
      "Add a professional email address."
    );

  }

  if (phoneRegex.test(resumeText)) {

    score += 5;
    breakdown.contact += 2.5;

  } else {

    suggestions.push(
      "Add your phone number."
    );

  }

  // ===========================
  // LINKEDIN
  // ===========================

  if (resumeText.includes("linkedin")) {

    score += 5;
    breakdown.linkedin = 5;

    strengths.push("LinkedIn profile available.");

  } else {

    weaknesses.push("LinkedIn profile missing.");

    suggestions.push(
      "Add your LinkedIn profile."
    );

  }

  // ===========================
  // GITHUB
  // ===========================

  if (resumeText.includes("github")) {

    score += 5;
    breakdown.github = 5;

    strengths.push("GitHub profile available.");

  } else {

    weaknesses.push("GitHub profile missing.");

    suggestions.push(
      "Add your GitHub profile."
    );

  }
    // ===========================
  // RESUME SECTIONS
  // ===========================

  const sections = [
    "education",
    "skills",
    "projects",
    "experience"
  ];

  let sectionCount = 0;

  sections.forEach((section) => {

    if (resumeText.includes(section)) {

      sectionCount++;

    }

  });

  score += sectionCount * 2;
  breakdown.sections = sectionCount * 2;

  if (sectionCount < 4) {

    suggestions.push(
      "Include all major resume sections (Education, Skills, Projects, Experience)."
    );

  }

  // ===========================
  // ACTION WORDS
  // ===========================

  let actionWordCount = 0;

  actionWords.forEach((word) => {

    if (resumeText.includes(word)) {

      actionWordCount++;

    }

  });

  if (actionWordCount >= 5) {

    score += 10;
    breakdown.actionWords = 10;

    strengths.push(
      "Good usage of impactful action verbs."
    );

  }

  else if (actionWordCount >= 3) {

    score += 5;
    breakdown.actionWords = 5;

  }

  else {

    weaknesses.push(
      "Very few action verbs used."
    );

    suggestions.push(
      "Use action words like Developed, Built, Designed, Optimized and Led."
    );

  }

  // ===========================
  // RESUME LENGTH
  // ===========================

  if (resumeText.length > 1500) {

    score += 5;

    strengths.push(
      "Resume has sufficient content."
    );

  }

  else {

    weaknesses.push(
      "Resume content is quite short."
    );

    suggestions.push(
      "Add more measurable achievements and project details."
    );

  }

  // ===========================
  // LIMITS
  // ===========================

  missingSkills = missingSkills.slice(0, 8);

  if (score > 100) {

    score = 100;

  }

  // ===========================
  // ATS GRADE
  // ===========================

  if (score >= 90) {

    grade = "Excellent";

  }

  else if (score >= 75) {

    grade = "Good";

  }

  else if (score >= 60) {

    grade = "Average";

  }

  else {

    grade = "Needs Improvement";

  }

  // ===========================
  // AI SUMMARY
  // ===========================

  if (score >= 90) {

    summary =
      "Excellent resume with strong ATS compatibility, solid technical skills and a highly competitive profile.";

  }

  else if (score >= 75) {

    summary =
      "Good resume with a strong foundation. A few targeted improvements can significantly increase interview chances.";

  }

  else if (score >= 60) {

    summary =
      "Average resume. Strengthen projects, technical skills and overall resume presentation.";

  }

  else {

    summary =
      "Resume requires significant improvements before applying for competitive software roles.";

  }
    // ===========================
  // DEFAULT MESSAGES
  // ===========================

  if (strengths.length === 0) {

    strengths.push(
      "Basic resume structure detected."
    );

  }

  if (weaknesses.length === 0) {

    weaknesses.push(
      "No major weaknesses detected."
    );

  }

  if (suggestions.length === 0) {

    suggestions.push(
      "Excellent resume. Keep updating your projects and achievements."
    );

    suggestions.push(
      "Quantify your achievements wherever possible (e.g. Improved performance by 30%)."
    );

  }

  // ===========================
  // REMOVE DUPLICATES
  // ===========================

  suggestions = [...new Set(suggestions)];

  strengths = [...new Set(strengths)];

  weaknesses = [...new Set(weaknesses)];

  // ===========================
  // ATS PERCENTAGE
  // ===========================

  const atsPercentage = score;

  // ===========================
  // RETURN
  // ===========================

  return {

    score,

    atsPercentage,

    grade,

    summary,

    breakdown,

    skillsFound,

    missingSkills,

    strengths,

    weaknesses,

    suggestions

  };

}

module.exports = analyzeResume;