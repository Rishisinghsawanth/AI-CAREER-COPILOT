import { useRef, useState } from "react";
import axios from "axios";

function Dashboard() {

  const fileInputRef = useRef(null);

  const [fileName, setFileName] = useState("");

  const [score, setScore] = useState(null);

  const [analysis, setAnalysis] = useState(null);

  const [breakdown, setBreakdown] = useState(null);

  const [jobs, setJobs] = useState([]);


  const [interviewQuestion, setInterviewQuestion] = useState(null);

  const [interviewLoading, setInterviewLoading] = useState(false);


  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState(null);

  const [feedbackLoading, setFeedbackLoading] = useState(false);


  const [loading, setLoading] = useState(false);



  async function handleFileChange(event) {

    const file = event.target.files[0];

    if (!file) return;


    setFileName(file.name);

    setLoading(true);


    const formData = new FormData();

    formData.append("resume", file);



    try {


      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );


      setScore(response.data.analysis.score);

      setAnalysis(response.data.analysis);

      setBreakdown(response.data.analysis.breakdown);

      setJobs(response.data.jobs || []);



    } catch(error) {

      console.log(error);

    }


    setLoading(false);

  }





  async function startInterview() {


    setInterviewLoading(true);


    try {


      const response = await axios.get(
        "http://localhost:5000/interview"
      );


      setInterviewQuestion(
        response.data.question
      );


    } catch(error) {


      console.log(error);


    }


    setInterviewLoading(false);

  }






  async function submitAnswer() {


    if(!answer.trim()) return;


    setFeedbackLoading(true);



    try {


      const response = await axios.post(

        "http://localhost:5000/feedback",

        {
          answer: answer
        }

      );



      setFeedback(
        response.data.feedback
      );



    } catch(error) {


      console.log(error);


    }



    setFeedbackLoading(false);


  }





  return (

    <section className="dashboard">


      <h2>
        Dashboard
      </h2>


      <div className="dashboard-cards">


        <div className="dashboard-card">


          <h3 className="card-title">
            Resume Score
          </h3>


          {
            loading ?

            (

              <h2>
                Analyzing...
              </h2>

            )

            :

            (

              <div className="score-circle">

                <h1>
                  {
                    score !== null
                    ? score
                    : "--"
                  }
                </h1>


                <span>
                  /100
                </span>


              </div>

            )
          }


        </div>
                {/* Score Breakdown */}


        {
          breakdown && (

            <div className="dashboard-card">


              <h3 className="analysis-title">
                Score Breakdown
              </h3>



              <div className="breakdown-list">


                <p>
                  Skills
                  <strong>
                    {breakdown.skills}/40
                  </strong>
                </p>



                <p>
                  Projects
                  <strong>
                    {breakdown.projects}/20
                  </strong>
                </p>



                <p>
                  Experience
                  <strong>
                    {breakdown.experience}/15
                  </strong>
                </p>



                <p>
                  Education
                  <strong>
                    {breakdown.education}/15
                  </strong>
                </p>



                <p>
                  Certificates
                  <strong>
                    {breakdown.certificates}/5
                  </strong>
                </p>



              </div>


            </div>

          )
        }





        {
          analysis && (

            <>


              {/* Missing Skills */}


              <div className="dashboard-card">


                <h3 className="analysis-title">
                  Missing Skills
                </h3>



                <div className="skill-list">


                  {

                    analysis.missingSkills.length > 0 ?

                    (

                      analysis.missingSkills.map((skill,index)=>(


                        <span
                          className="missing-tag"
                          key={index}
                        >

                          {skill}

                        </span>


                      ))

                    )

                    :

                    (

                      <p className="good-message">
                        No missing skills 🎉
                      </p>

                    )

                  }


                </div>


              </div>







              {/* AI Recommendations */}


              <div className="dashboard-card">


                <h3 className="analysis-title">
                  AI Recommendations
                </h3>



                <div className="suggestion-box">


                  {

                    analysis.suggestions.length > 0 ?

                    (

                      analysis.suggestions.map((item,index)=>(


                        <div
                          className="suggestion-item"
                          key={index}
                        >


                          <span>
                            💡
                          </span>


                          <p>
                            {item}
                          </p>


                        </div>


                      ))

                    )

                    :

                    (

                      <p className="good-message">
                        Resume looks good 🎉
                      </p>

                    )

                  }



                </div>



              </div>




            </>

          )
        }







        {/* AI Mock Interview */}


        <div className="dashboard-card">


          <h3 className="card-title">
            AI Mock Interview
          </h3>




          {

            !interviewQuestion ?

            (

              <>


                <p>
                  Practice real interview questions with AI.
                </p>



                <button

                  className="feature-btn"

                  onClick={startInterview}

                >

                  {
                    interviewLoading
                    ? "Generating..."
                    : "Start Interview"
                  }


                </button>


              </>


            )

            :

            (

              <div className="interview-box">


                <span>
                  {interviewQuestion.category}
                </span>



                <h4>
                  {interviewQuestion.question}
                </h4>




                <textarea

                  placeholder="Write your answer..."

                  value={answer}

                  onChange={(e)=>setAnswer(e.target.value)}

                />




                <button

                  className="upload-btn"

                  onClick={submitAnswer}

                >

                  {
                    feedbackLoading
                    ? "Checking..."
                    : "Submit Answer"
                  }


                </button>





                {
                  feedback && (

                    <div className="feedback-box">


                      <h4>
                        AI Feedback
                      </h4>



                      <h2>
                        Score: {feedback.score}/100
                      </h2>



                      {

                        feedback.feedback?.map((item,index)=>(


                          <p key={index}>
                            💡 {item}
                          </p>


                        ))

                      }


                    </div>

                  )
                }



              </div>

            )

          }



        </div>







        {/* Job Matches */}


        <div className="dashboard-card">


          <h3 className="card-title">
            Job Matches
          </h3>



          {

            jobs.length > 0 ?

            (

              <div className="job-list">


                {

                  jobs.map((job,index)=>(


                    <div

                      className="job-item"

                      key={index}

                    >


                      <h4>
                        {job.title}
                      </h4>



                      <div className="match-score">

                        Match Score:

                        <strong>
                          {job.match}%
                        </strong>

                      </div>



                      <p className="job-reason">

                        {
                          job.reason ||
                          "Matched according to your resume skills"
                        }

                      </p>




                    </div>


                  ))

                }


              </div>


            )

            :

            (

              <p>
                Upload resume to find matching jobs.
              </p>

            )

          }



        </div>








        {/* Resume Analyzer */}


        <div className="dashboard-card">


          <h3 className="card-title">
            Resume Analyzer
          </h3>



          <p className="upload-text">

            Upload your resume PDF and get AI-powered analysis.

          </p>



          <div className="upload-box">


            <span>
              📄
            </span>


            <p>
              Click below to upload your resume
            </p>


          </div>





          <input

            type="file"

            accept=".pdf"

            ref={fileInputRef}

            onChange={handleFileChange}

            style={{
              display:"none"
            }}

          />





          <button

            className="upload-btn"

            onClick={()=>fileInputRef.current.click()}

          >

            Upload Resume

          </button>





          {

            fileName && (

              <p style={{marginTop:"15px"}}>

                Selected File:

                <strong>
                  {fileName}
                </strong>


              </p>

            )

          }



        </div>




      </div>


    </section>


  );

}


export default Dashboard;