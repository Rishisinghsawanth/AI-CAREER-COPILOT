const generateFeedback = require("./feedback");
const getInterviewQuestion = require("./interview");
const analyzeResume = require("./analyzer");
const matchJobs = require("./jobMatcher");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");




const app = express();


app.use(cors());
app.use(express.json());




// Store uploaded files in uploads folder

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },


  filename: function (req, file, cb) {

    cb(null, Date.now() + "-" + file.originalname);

  },

});


const upload = multer({ storage });





app.get("/", (req, res) => {

  res.send("Backend is running 🚀");

});









// Resume upload + analysis

app.post("/upload", upload.single("resume"), async (req, res) => {


  console.log(req.file);



  try {


    const fs = require("fs");


    const dataBuffer = fs.readFileSync(req.file.path);



    const pdfData = await pdfParse(dataBuffer);




    console.log("Resume Text:");

    console.log(pdfData.text);






    // Resume analysis

    const analysis = analyzeResume(pdfData.text);






    // Job matching

    const jobs = matchJobs(
      analysis.skillsFound
    );






    res.json({


      success: true,


      message: "Resume analyzed successfully!",


      file: req.file.filename,


      analysis: analysis,


      jobs: jobs


    });




  } catch (error) {


    console.log(error);



    res.status(500).json({


      success: false,


      message: "PDF analysis failed"


    });



  }


});









// AI Mock Interview Question Route

app.get("/interview", (req, res) => {


  const question = getInterviewQuestion();



  res.json({


    success: true,


    question: question


  });



});









// AI Interview Answer Feedback Route

app.post("/feedback", (req, res) => {


  const answer = req.body.answer;



  const result = generateFeedback(answer);



  res.json({


    success: true,


    feedback: result


  });



});









const PORT = 5000;



app.listen(PORT, () => {


  console.log(`Server is running on http://localhost:${PORT}`);


});