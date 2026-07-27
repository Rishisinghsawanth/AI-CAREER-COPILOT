function generateFeedback(answer) {


  let score = 0;

  let feedback = [];



  if(answer.length > 50){

    score += 40;

    feedback.push(
      "Good explanation length"
    );

  }
  else{

    feedback.push(
      "Explain your answer in more detail"
    );

  }




  if(
    answer.includes("because") ||
    answer.includes("because")
  ){

    score += 20;

    feedback.push(
      "Good reasoning provided"
    );

  }
  else{

    feedback.push(
      "Add reasoning and examples"
    );

  }




  if(answer.length > 150){

    score += 40;

    feedback.push(
      "Answer has enough details"
    );

  }



  return {

    score,

    feedback

  };


}


module.exports = generateFeedback;