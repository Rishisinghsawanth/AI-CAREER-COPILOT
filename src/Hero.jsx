import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  /* =========================
      CAREER INSIGHTS NUMBER
      1 → 10 → 1
      SLOW ANIMATION
  ========================== */
  const [topPercentile, setTopPercentile] = useState(1);

  useEffect(() => {
    let value = 1;
    let increasing = true;

    const interval = setInterval(() => {
      if (increasing) {
        value++;

        if (value >= 10) {
          value = 10;
          increasing = false;
        }
      } else {
        value--;

        if (value <= 1) {
          value = 1;
          increasing = true;
        }
      }

      setTopPercentile(value);
    }, 450);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      ACTIVE FEATURE
  ========================== */
  const [activeFeature, setActiveFeature] = useState("resume");

  /* =========================
      RESUME SCORE + ATS MATCH
      75 → 90 → 75
  ========================== */
  const [resumeScore, setResumeScore] = useState(75);
  const [atsMatch, setAtsMatch] = useState(82);

  useEffect(() => {
    let score = 75;
    let direction = 1;

    const interval = setInterval(() => {
      score += direction;

      if (score >= 90) {
        score = 90;
        direction = -1;
      }

      if (score <= 75) {
        score = 75;
        direction = 1;
      }

      setResumeScore(score);
      setAtsMatch(score + 7);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      SKILLS DETECTED
      8 → 15 → 8
  ========================== */
  const [skillsDetected, setSkillsDetected] = useState(8);

  useEffect(() => {
    let value = 8;
    let increasing = true;

    const interval = setInterval(() => {
      if (increasing) {
        value++;

        if (value >= 15) {
          value = 15;
          increasing = false;
        }
      } else {
        value--;

        if (value <= 8) {
          value = 8;
          increasing = true;
        }
      }

      setSkillsDetected(value);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      INTERVIEW VALUES
      ALL VALUES ANIMATE
  ========================== */
  const [interviewReadiness, setInterviewReadiness] = useState(72);
  const [technicalScore, setTechnicalScore] = useState(80);
  const [communicationScore, setCommunicationScore] = useState(74);

  useEffect(() => {
    let readiness = 72;
    let technical = 80;
    let communication = 74;

    let readinessDirection = 1;
    let technicalDirection = 1;
    let communicationDirection = 1;

    const interval = setInterval(() => {
      readiness += readinessDirection;
      technical += technicalDirection;
      communication += communicationDirection;

      if (readiness >= 88) {
        readiness = 88;
        readinessDirection = -1;
      }

      if (readiness <= 72) {
        readiness = 72;
        readinessDirection = 1;
      }

      if (technical >= 94) {
        technical = 94;
        technicalDirection = -1;
      }

      if (technical <= 80) {
        technical = 80;
        technicalDirection = 1;
      }

      if (communication >= 90) {
        communication = 90;
        communicationDirection = -1;
      }

      if (communication <= 74) {
        communication = 74;
        communicationDirection = 1;
      }

      setInterviewReadiness(readiness);
      setTechnicalScore(technical);
      setCommunicationScore(communication);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      CAREER MATCHING VALUES
      MATCHED ROLES: 3 → 10
      MATCH ACCURACY: 75 → 92
  ========================== */
  const [matchedRoles, setMatchedRoles] = useState(3);
  const [matchAccuracy, setMatchAccuracy] = useState(75);

  useEffect(() => {
    let roles = 3;
    let accuracy = 75;

    let rolesDirection = 1;
    let accuracyDirection = 1;

    const interval = setInterval(() => {
      roles += rolesDirection;
      accuracy += accuracyDirection;

      if (roles >= 10) {
        roles = 10;
        rolesDirection = -1;
      }

      if (roles <= 3) {
        roles = 3;
        rolesDirection = 1;
      }

      if (accuracy >= 92) {
        accuracy = 92;
        accuracyDirection = -1;
      }

      if (accuracy <= 75) {
        accuracy = 75;
        accuracyDirection = 1;
      }

      setMatchedRoles(roles);
      setMatchAccuracy(accuracy);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      TOP MATCH ROLES
  ========================== */
  const topMatches = [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "AI Engineer",
    "Backend Developer",
    "ML Engineer",
  ];

  const [topMatchIndex, setTopMatchIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopMatchIndex((current) =>
        (current + 1) % topMatches.length
      );
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  /* =========================
      AI ACTIVITY SEQUENCE
      1. Resume optimized
      2. Skills mapped
      3. Roles matched
      4. All white
      5. Hold 3 seconds
  ========================== */
  const [activityStage, setActivityStage] = useState(0);

  useEffect(() => {
    let timeoutId;

    const runSequence = () => {
      setActivityStage(1);

      timeoutId = setTimeout(() => {
        setActivityStage(2);

        timeoutId = setTimeout(() => {
          setActivityStage(3);

          timeoutId = setTimeout(() => {
            setActivityStage(4);

            timeoutId = setTimeout(() => {
              setActivityStage(0);

              timeoutId = setTimeout(() => {
                runSequence();
              }, 800);
            }, 3000);
          }, 700);
        }, 700);
      }, 700);
    };

    runSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  /* =========================
      FEATURE DATA
  ========================== */
  const featureData = {
    resume: {
      number: "01",
      title: "Resume Intelligence",
      subtitle: "Optimize your profile",
      status: "AI Analysis complete",

      metrics: [
        {
          label: "Resume Score",
          value: `${resumeScore}/100`,
          progress: resumeScore,
          colorClass: "metric-green",
        },
        {
          label: "ATS Match",
          value: `${atsMatch}%`,
          progress: atsMatch,
          colorClass: "metric-blue",
        },
        {
          label: "Skills Detected",
          value: `${skillsDetected}`,
          progress: (skillsDetected / 15) * 100,
          colorClass: "metric-purple",
        },
      ],
    },

    interview: {
      number: "02",
      title: "AI Interview",
      subtitle: "Practice with precision",
      status: "AI interviewer ready",

      metrics: [
        {
          label: "Interview Readiness",
          value: `${interviewReadiness}%`,
          progress: interviewReadiness,
          colorClass: "metric-green",
        },
        {
          label: "Technical",
          value: `${technicalScore}%`,
          progress: technicalScore,
          colorClass: "metric-blue",
        },
        {
          label: "Communication",
          value: `${communicationScore}%`,
          progress: communicationScore,
          colorClass: "metric-purple",
        },
      ],
    },

    career: {
      number: "03",
      title: "Career Matching",
      subtitle: "Find your best fit",
      status: "Skills aligned",

      metrics: [
        {
          label: "Matched Roles",
          value: `${matchedRoles}`,
          progress: (matchedRoles / 10) * 100,
          colorClass: "metric-green",
        },
        {
          label: "Match Accuracy",
          value: `${matchAccuracy}%`,
          progress: matchAccuracy,
          colorClass: "metric-blue",
        },
        {
          label: "Top Match",
          value: topMatches[topMatchIndex],
          progress: 88,
          colorClass: "metric-purple",
        },
      ],
    },
  };

  const active = featureData[activeFeature];

  return (
    <section className="hero" id="hero">

      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="hero-background" aria-hidden="true">

        <div className="hero-grid"></div>

        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>

        <div className="hero-atmosphere hero-atmosphere-one"></div>
        <div className="hero-atmosphere hero-atmosphere-two"></div>

        <div className="space-stars">
          {Array.from({ length: 55 }, (_, index) => (
            <span
              key={index}
              className={`star star-${index + 1}`}
            ></span>
          ))}
        </div>

      </div>

      {/* =========================
          MAIN HERO LAYOUT
      ========================== */}
      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hero-content">

          <div className="hero-copy">

            <div className="hero-badge">
              <span className="status-dot"></span>
              AI-powered placement intelligence
            </div>

            <h1 className="hero-title">
              Turn your preparation
              <br />
              <span>
                into professional readiness
              </span>
            </h1>

            <p className="hero-description">
              Your AI-powered command center for{" "}
              <span>resumes</span>,{" "}
              <span>interviews</span>,{" "}
              <span>skills</span>,
              <br className="hero-description-break" />
              and the roles that move your career forward
            </p>

            <div className="hero-buttons">

              <a
                href="#login"
                className="primary-btn"
              >
                <span className="primary-btn-label">
                  Start preparing
                </span>

                <span className="primary-btn-arrow">
                  →
                </span>
              </a>

              <a
                href="#features"
                className="secondary-btn"
              >
                Explore platform
              </a>

            </div>

          </div>

          {/* =========================
              FEATURE NAVIGATION
          ========================== */}
          <div
            className="hero-proof"
            aria-label="Platform capabilities"
          >

            <button
              type="button"
              className={`proof-item ${
                activeFeature === "resume"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveFeature("resume")}
              aria-pressed={activeFeature === "resume"}
            >

              <span className="proof-number">
                {featureData.resume.number}
              </span>

              <div className="proof-copy">
                <strong>
                  Resume Intelligence
                </strong>

                <small>
                  Optimize your profile
                </small>
              </div>

            </button>

            <div
              className="proof-line"
              aria-hidden="true"
            ></div>

            <button
              type="button"
              className={`proof-item ${
                activeFeature === "interview"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveFeature("interview")}
              aria-pressed={activeFeature === "interview"}
            >

              <span className="proof-number">
                {featureData.interview.number}
              </span>

              <div className="proof-copy">
                <strong>
                  AI Interview
                </strong>

                <small>
                  Practice with precision
                </small>
              </div>

            </button>

            <div
              className="proof-line"
              aria-hidden="true"
            ></div>

            <button
              type="button"
              className={`proof-item ${
                activeFeature === "career"
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveFeature("career")}
              aria-pressed={activeFeature === "career"}
            >

              <span className="proof-number">
                {featureData.career.number}
              </span>

              <div className="proof-copy">
                <strong>
                  Career Matching
                </strong>

                <small>
                  Find your best fit
                </small>
              </div>

            </button>

          </div>

          {/* =========================
              INTERACTIVE PRODUCT PREVIEW
          ========================== */}
          <div className="feature-preview-shell">

            <div className="ai-activity">

              <span className="ai-activity-dot"></span>

              <span className="ai-activity-text">
                AI analyzing your career profile...
              </span>

              <span className="ai-activity-divider"></span>

              <span
                className={`activity-check ${
                  activityStage >= 1
                    ? "activity-active"
                    : ""
                }`}
              >
                ✓ Resume optimized
              </span>

              <span
                className={`activity-check ${
                  activityStage >= 2
                    ? "activity-active"
                    : ""
                }`}
              >
                ✓ Skills mapped
              </span>

              <span
                className={`activity-check ${
                  activityStage >= 3
                    ? "activity-active"
                    : ""
                }`}
              >
                ✓ Roles matched
              </span>

            </div>

            <div className="feature-preview">

              <div className="preview-header">

                <div className="preview-heading">

                  <span className="preview-icon">
                    ✦
                  </span>

                  <div>
                    <strong>
                      {active.title}
                    </strong>

                    <small>
                      {active.subtitle}
                    </small>
                  </div>

                </div>

                <span className="preview-status">
                  <i></i>
                  LIVE
                </span>

              </div>

              <div className="preview-metrics">

                {active.metrics.map((metric, index) => (
                  <div
                    className="preview-metric"
                    key={`${activeFeature}-${index}`}
                  >

                    <div className="metric-top">

                      <span>
                        {metric.label}
                      </span>

                      <strong>
                        {metric.value}
                      </strong>

                    </div>

                    <div
                      className={`metric-progress metric-${index} ${metric.colorClass}`}
                    >
                      <span
                        style={{
                          width: `${metric.progress}%`,
                        }}
                      ></span>
                    </div>

                  </div>
                ))}

              </div>

              <div className="preview-footer">

                <span className="preview-footer-dot"></span>

                <span>
                  {active.status}
                </span>

                <span className="preview-arrow">
                  ↗
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT PRODUCT VISUAL
        ========================== */}
        <div className="hero-visual">

          <div className="hero-visual-glow"></div>

          <div className="hero-dashboard-stack">

            {/* =========================
                CAREER INSIGHTS
            ========================== */}
            <div className="ai-panel panel-back">

              <div className="panel-top">

                <span className="panel-icon">
                  ✦
                </span>

                <span>
                  CAREER INSIGHTS
                </span>

                <span className="panel-live">
                  LIVE
                </span>

              </div>

              <div className="panel-title">
                Top{" "}
                <strong>
                  {topPercentile}%
                </strong>
              </div>

              <div className="panel-subtitle">
                Your profile is outperforming similar
                candidates
              </div>

              <div className="mini-chart">

                <span className="chart-line"></span>

                <span className="chart-point p1"></span>
                <span className="chart-point p2"></span>
                <span className="chart-point p3"></span>
                <span className="chart-point p4"></span>
                <span className="chart-point p5"></span>

              </div>

              <div className="chart-labels">
                <span>Skills</span>
                <span>Projects</span>
                <span>ATS</span>
                <span>Interview</span>
              </div>

            </div>

            {/* =========================
                RESUME INTELLIGENCE
            ========================== */}
            <div className="ai-panel panel-main">

              <div className="panel-header">

                <div className="panel-brand">

                  <span className="resume-intelligence-star">
                    ✦
                  </span>

                  <div>
                    <strong>
                      Resume Intelligence
                    </strong>

                    <small>
                      AI analysis complete
                    </small>
                  </div>

                </div>

                <div className="panel-status">

                  <span></span>

                  <AnimatedResumePercent />

                </div>

              </div>

              <div className="resume-preview">

                <div className="resume-heading">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="resume-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="resume-section">

                  <div className="resume-section-title">
                    <span></span>
                    EXPERIENCE
                  </div>

                  <div className="resume-row">
                    <span></span>
                    <span></span>
                  </div>

                  <div className="resume-row">
                    <span></span>
                    <span></span>
                  </div>

                </div>

              </div>

            </div>

            {/* =========================
                AI RECOMMENDATION
            ========================== */}
            <div className="panel-recommendation">

              <div className="recommendation-title-row">

                <span className="recommendation-star">
                  ✦
                </span>

                <strong>
                  AI RECOMMENDATION
                </strong>

                <span className="recommendation-robot">
                  🤖
                </span>

              </div>

              <div className="recommendation-content">

                <small>
                  Strengthen your project impact
                  statements
                </small>

              </div>

              <span className="recommendation-arrow">
                →
              </span>

            </div>

            {/* =========================
                RESUME SCORE
            ========================== */}
            <div className="ai-panel panel-score">

              <div className="score-header">

                <span className="score-title">

                  <span className="score-star">
                    ✦
                  </span>

                  RESUME SCORE

                </span>

                <span className="score-dot"></span>

              </div>

              <div className="score-body">

                <div className="score-ring">

                  <div
                    className="score-ring-progress"
                    style={{
                      background: `conic-gradient(
                        #6d85ff ${resumeScore * 3.6}deg,
                        rgba(255, 255, 255, 0.07) ${
                          resumeScore * 3.6
                        }deg
                      )`,
                    }}
                  ></div>

                  <div className="score-ring-inner">

                    <strong>
                      {resumeScore}
                    </strong>

                    <small>
                      /100
                    </small>

                  </div>

                </div>

                <div className="score-info">

                  <strong>
                    Excellent
                  </strong>

                  <small>
                    +14 this week
                  </small>

                </div>

              </div>

              <div className="score-progress">

                <span
                  style={{
                    width: `${resumeScore}%`,
                  }}
                ></span>

              </div>

            </div>

            {/* =========================
                AI MOCK INTERVIEW
            ========================== */}
            <div className="ai-panel panel-interview">

              <div className="interview-content">

                <div className="interview-title-row">

                  <span className="interview-star">
                    ✦
                  </span>

                  <strong>
                    AI MOCK INTERVIEW
                  </strong>

                </div>

                <small>
                  Ready when you are
                </small>

              </div>

              <div className="interview-mic">
                ◉
              </div>

            </div>

            {/* =========================
                DASHBOARD PARTICLES
            ========================== */}
            <span
              className="dashboard-particle particle-one"
              aria-hidden="true"
            ></span>

            <span
              className="dashboard-particle particle-two"
              aria-hidden="true"
            ></span>

            <span
              className="dashboard-particle particle-three"
              aria-hidden="true"
            ></span>

          </div>

        </div>

      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}
      <div
        className="hero-scroll"
        aria-hidden="true"
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <b>
          ↓
        </b>

      </div>

    </section>
  );
}

/* =========================
    ANIMATED RESUME PERCENT
========================= */
function AnimatedResumePercent() {
  const [value, setValue] = useState(75);

  useEffect(() => {
    let current = 75;
    let direction = 1;

    const interval = setInterval(() => {
      current += direction;

      if (current >= 90) {
        current = 90;
        direction = -1;
      }

      if (current <= 75) {
        current = 75;
        direction = 1;
      }

      setValue(current);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <>{value}%</>;
}

export default Hero;