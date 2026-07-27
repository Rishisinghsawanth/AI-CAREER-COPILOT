function analyzeResume(text) {

  let score = 0;

  const resumeText = text.toLowerCase();


  let breakdown = {
    skills: 0,
    projects: 0,
    experience: 0,
    education: 0,
    certificates: 0
  };



  const skills = [
    "javascript",
    "react",
    "node",
    "express",
    "java",
    "python",
    "sql",
    "mongodb",
    "html",
    "css",
    "git",
    "github",
    "docker",
    "aws",
    "machine learning",
    "data structures",
    "algorithms"
  ];



  let skillsFound = [];
  let missingSkills = [];



  skills.forEach(skill => {

    if (resumeText.includes(skill)) {

      skillsFound.push(skill);

      score += 4;
      breakdown.skills += 4;

    } 
    else {

      if (missingSkills.length < 6) {
        missingSkills.push(skill);
      }

    }

  });




  // Education score

  if (
    resumeText.includes("btech") ||
    resumeText.includes("b.tech") ||
    resumeText.includes("bachelor") ||
    resumeText.includes("engineering")
  ) {

    score += 15;
    breakdown.education = 15;

  }




  // Projects score

  if (
    resumeText.includes("project") ||
    resumeText.includes("github")
  ) {

    score += 20;
    breakdown.projects = 20;

  }




  // Experience score

  if (
    resumeText.includes("internship") ||
    resumeText.includes("experience")
  ) {

    score += 15;
    breakdown.experience = 15;

  }




  // Certification score

  if (
    resumeText.includes("certificate") ||
    resumeText.includes("certification")
  ) {

    score += 5;
    breakdown.certificates = 5;

  }




  // Resume length check

  if (resumeText.length > 1500) {

    score += 5;

  }




  if (score > 100) {

    score = 100;

  }




  let suggestions = [];



  if (skillsFound.length < 5) {

    suggestions.push(
      "Add more technical skills relevant to your target role"
    );

  }



  if (!resumeText.includes("project")) {

    suggestions.push(
      "Add strong projects with technologies used"
    );

  }



  if (!resumeText.includes("github")) {

    suggestions.push(
      "Add GitHub profile and project links"
    );

  }



  if (
    !resumeText.includes("internship") &&
    !resumeText.includes("experience")
  ) {

    suggestions.push(
      "Add internship or practical experience"
    );

  }



  // Default recommendation if resume is already good

  if (suggestions.length === 0) {

    suggestions.push(
      "Resume looks good. Keep improving your projects, problem solving skills and technical depth."
    );

    suggestions.push(
      "Add measurable achievements and real-world impact to make your resume stronger."
    );

  }




  return {

    score,
    breakdown,
    skillsFound,
    missingSkills,
    suggestions

  };

}



module.exports = analyzeResume;