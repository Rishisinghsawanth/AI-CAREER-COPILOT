const questions = [

  {
    question:
    "Explain your strongest technical skill and where you used it.",

    category:
    "Technical"
  },


  {
    question:
    "Explain one project you have built and your contribution in it.",

    category:
    "Project"
  },


  {
    question:
    "What is the difference between let, var and const in JavaScript?",

    category:
    "JavaScript"
  },


  {
    question:
    "Explain time complexity of binary search.",

    category:
    "DSA"
  },


  {
    question:
    "Why should we hire you?",

    category:
    "HR"
  },


  {
    question:
    "Explain the difference between React and traditional JavaScript DOM manipulation.",

    category:
    "React"
  },


  {
    question:
    "How do you handle API calls in a frontend application?",

    category:
    "Frontend"
  },


  {
    question:
    "Explain your understanding of REST APIs.",

    category:
    "Backend"
  },


  {
    question:
    "What happens when you type a URL in a browser and press enter?",

    category:
    "Computer Networks"
  },


  {
    question:
    "Explain OOP concepts with real-world examples.",

    category:
    "Programming Fundamentals"
  },


  {
    question:
    "What challenges did you face while building your projects and how did you solve them?",

    category:
    "Project Experience"
  },


  {
    question:
    "Where do you see yourself after 5 years?",

    category:
    "HR"
  }


];





function getInterviewQuestion(){


  const random =
  Math.floor(Math.random() * questions.length);


  return questions[random];


}





module.exports = getInterviewQuestion;