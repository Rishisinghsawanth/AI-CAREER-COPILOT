import { useRef, useState } from "react";
import axios from "axios";

function Dashboard() {

  const fileInputRef = useRef(null);

  // Resume
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  // ATS
  const [score, setScore] = useState(null);
  const [grade, setGrade] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [breakdown, setBreakdown] = useState(null);

  // Jobs
  const [jobs, setJobs] = useState([]);

  // Interview
  const [interviewQuestion, setInterviewQuestion] = useState(null);
  const [interviewLoading, setInterviewLoading] = useState(false);

  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const maxValues = {
  technicalSkills: 50,
  softSkills: 20,
  education: 15,
  projects: 15,
  experience: 15,
  certifications: 5,
  contact: 5,
  linkedin: 5,
  github: 5,
  sections: 8,
  actionWords: 10
};




  function getScoreColor() {

    if (score === null)
      return "rgba(255,255,255,0.25)";

    if (score < 40)
      return "#991b1b";

    if (score < 75)
      return "#f97316";

    return "#15803d";

  }



  async function handleFileChange(event) {

    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    setLoadingText("Uploading Resume...");

    const formData = new FormData();

    formData.append("resume", file);

    setTimeout(() => {
      setLoadingText("Extracting Resume Data...");
    }, 1000);

    setTimeout(() => {
      setLoadingText("Analyzing Skills...");
    }, 2500);

    setTimeout(() => {
      setLoadingText("Generating AI Report...");
    }, 4000);

    try {

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      const result = response.data.analysis;

      setScore(result.score);
      setGrade(result.grade);
      setAnalysis(result);
      setBreakdown(result.breakdown);

      setJobs(response.data.jobs || []);

    }

    catch (error) {
  console.log(error);
  setLoading(false);
  setLoadingText("⚠️ Resume parsing failed. Please try again.");
}


    setTimeout(() => {

      setLoading(false);

    }, 5000);

  }



  async function startInterview() {

    setInterviewLoading(true);

    try {

      const response = await axios.get(
        "http://localhost:5000/interview"
      );

      setInterviewQuestion(response.data.question);

      setAnswer("");
      setFeedback(null);

    }

    catch (error) {

      console.log(error);

    }

    setInterviewLoading(false);

  }



  async function submitAnswer() {

    if (!answer.trim()) return;

    setFeedbackLoading(true);

    try {

      const response = await axios.post(

        "http://localhost:5000/feedback",

        {
          answer
        }

      );

      setFeedback(response.data.feedback);

    }

    catch (error) {

      console.log(error);

    }

    setFeedbackLoading(false);

  }



  return (
    <section className="dashboard">

  <div className="dashboard-container">

    <h2 className="dashboard-heading">
      AI Career Dashboard
    </h2>

    <div className="dashboard-cards">

      {/* ================= ATS SCORE ================= */}

      <div className="dashboard-card score-card">

  <div className="score-header">
    <div>
      <h3 className="card-title">ATS Resume Score</h3>
      <p className="score-subtitle">AI Powered Resume Evaluation</p>
    </div>

    {grade && (
      <span className="grade-badge">{grade}</span>
    )}
  </div>

  {loading ? (
    <div className="loading-box">
      <div className="loader"></div>
      <h2>{loadingText}</h2>
    </div>
  ) : (
    <>
      <div className="score-ring">
        <svg viewBox="0 0 220 220" className="score-svg">
          <circle className="ring-bg" cx="110" cy="110" r="90" />
          <circle
            className="ring-progress"
            cx="110"
            cy="110"
            r="90"
            style={{
              stroke: getScoreColor(),
              strokeDasharray: 565,
              strokeDashoffset:
                score !== null ? 565 - (565 * score) / 100 : 565
            }}
          />
        </svg>

        <div className="wave"></div>

        <div className="score-number">
          {score !== null ? (
            <>
              <h1 style={{ color: getScoreColor() }}>{score}</h1>
              <span>/100</span>
            </>
          ) : (
            <div className="no-score">
              <div style={{ fontSize: "48px" }}>📄</div>
              <p>Upload Resume</p>
            </div>
          )}
        </div>
      </div>

      <div className="score-progress">
        <div
          className="score-progress-fill"
          style={{
            width: `${score ?? 0}%`,
            background: getScoreColor()
          }}
        ></div>
      </div>

      {score !== null && (
        <div className="score-status">
          {score >= 90
            ? "🔥 Excellent Resume"
            : score >= 75
            ? "✅ Placement Ready"
            : score >= 60
            ? "⚡ Needs Improvement"
            : "❌ Major Improvements Required"}
        </div>
      )}

      {loadingText.includes("failed") && (
        <div className="error-message">{loadingText}</div>
      )}
    </>
  )}
</div>

            {/* ================= ATS BREAKDOWN ================= */}
{
  breakdown && (
    <div className="dashboard-card">
      <h3 className="analysis-title">ATS Breakdown</h3>

      {Object.entries(breakdown).map(([key, value]) => {
        const color =
          value >= 18 ? "#15803d" :
          value >= 12 ? "#f97316" :
          "#991b1b";

        return (
          <div className="breakdown-item" key={key}>
            <div className="breakdown-header">
              <span>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <strong style={{ color: color }}>
                {value}/{maxValues[key]}
              </strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(value / maxValues[key]) * 100}%`,
                  background: color
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  )
}


      {/* ================= MISSING SKILLS ================= */}

      {
        analysis && (

          <div className="dashboard-card">

            <h3 className="analysis-title">
              Missing Skills
            </h3>

            <div className="skills-info">

              ⚠ These skills are recommended to improve ATS score and job matching.

            </div>

            {

              analysis.missingSkills.length > 0 ?

              <div className="skill-list">

                {

                  analysis.missingSkills.map((skill, index) => (

                    <div
                      className="missing-skill-card"
                      key={index}
                    >

                      <div className="skill-icon">
                        ⚠️
                      </div>

                      <h4>
                        {skill}
                      </h4>

                    </div>

                  ))

                }

              </div>

              :

              <p className="good-message">

                🎉 No Missing Skills Found

              </p>

            }

          </div>

        )
      }
            {/* ================= AI RECOMMENDATIONS ================= */}

      {
        analysis && (

          <div className="dashboard-card">

            <h3 className="analysis-title">
              AI Recommendations
            </h3>

            <div className="suggestion-box">

              {
                analysis.suggestions.map((item, index) => (

                  <div
                    className="suggestion-item"
                    key={index}
                  >

                    <span>💡</span>

                    <p>{item}</p>

                  </div>

                ))
              }

            </div>

          </div>

        )
      }


      {/* ================= AI MOCK INTERVIEW ================= */}

      <div className="dashboard-card interview-card">

        <h3 className="card-title">
          AI Mock Interview
        </h3>

        {

          !interviewQuestion ?

          (

            <>

              <p className="upload-text">

                Practice AI generated interview questions based on your resume.

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

              <span className="question-category">

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

                      {feedback.score}/100

                    </h2>

                    {

                      feedback.feedback.map((item,index)=>(

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



      {/* ================= JOB MATCHES ================= */}

      <div className="dashboard-card">

        <h3 className="card-title">

          Recommended Jobs

        </h3>

        {

          !analysis ?

          (

            <p className="upload-text">

              📄 Upload your resume to receive AI job recommendations.

            </p>

          )

          :

          jobs.length === 0 ?

          (

            <div className="no-jobs">

              <h4>

                ❌ No Suitable Jobs Found

              </h4>

              <p>

                Improve your ATS score and add the recommended skills to unlock more job opportunities.

              </p>

            </div>

          )

          :

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
  Match <strong>{job.matchScore}%</strong>
</div>


                    <p className="job-reason">

                      {
                        job.reason ||
                        "Matched according to your resume."
                      }

                    </p>

                    {

                      job.skills && (

                        <div className="job-skills">

                          {

                            job.skills.map((skill,i)=>(

                              <span
                                className="job-skill-tag"
                                key={i}
                              >

                                {skill}

                              </span>

                            ))

                          }

                        </div>

                      )

                    }

                  </div>

                ))

              }

            </div>

          )

        }

      </div>
            {/* ================= RESUME ANALYZER ================= */}

      <div className="dashboard-card upload-card">

        <h3 className="card-title">
          Resume Analyzer
        </h3>

        <p className="upload-text">
          Upload your resume PDF and receive an AI-powered ATS analysis with
          personalized recommendations.
        </p>

        <div
          className="upload-box"
          onClick={() => fileInputRef.current.click()}
        >

          <span>📄</span>

          <h4>
            Upload Resume
          </h4>

          <p>
            Drag & Drop your PDF here
            <br />
            or click to browse
          </p>

        </div>

        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <button
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Choose Resume
        </button>

        {

          fileName && (

            <div className="selected-file">

              ✅ {fileName}

            </div>

          )

        }

      </div>

    </div> {/* dashboard-cards */}

  </div> {/* dashboard-container */}

</section>

  );

}

export default Dashboard;