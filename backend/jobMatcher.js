function matchJobs(skillsFound) {


  const jobs = [

    {
      title: "Frontend Developer",

      requiredSkills: [
        "javascript",
        "react",
        "html",
        "css"
      ]

    },


    {
      title: "Backend Developer",

      requiredSkills: [
        "node",
        "express",
        "mongodb",
        "sql"
      ]

    },


    {
      title: "Java Developer",

      requiredSkills: [
        "java",
        "sql",
        "data structures",
        "algorithms"
      ]

    },


    {
      title: "AI Engineer",

      requiredSkills: [
        "python",
        "machine learning"
      ]

    }

  ];




  let matchedJobs = [];




  jobs.forEach(job => {


    let matchedSkills = [];



    job.requiredSkills.forEach(skill => {


      if(skillsFound.includes(skill)) {

        matchedSkills.push(skill);

      }


    });





    if(matchedSkills.length > 0) {


      let percentage = Math.round(

        (matchedSkills.length / job.requiredSkills.length) * 100

      );



      matchedJobs.push({
  title: job.title,
  matchScore: percentage,   // instead of match
  matchedSkills: matchedSkills,
  requiredSkills: job.requiredSkills,
  reason: `You match ${matchedSkills.length}/${job.requiredSkills.length} required skills`
});



    }



  });



  return matchedJobs;


}



module.exports = matchJobs;