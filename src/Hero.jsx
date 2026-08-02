import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [activeFeature, setActiveFeature] = useState("resume");

  const featureData = {
    resume: {
      number: "01",
      title: "Resume Intelligence",
      subtitle: "Optimize your profile",
      status: "AI Analysis complete",
      metrics: [
        { label: "Resume Score", value: "87/100", progress: 87 },
        { label: "ATS Match", value: "92%", progress: 92 },
        { label: "Skills Detected", value: "14", progress: 78 },
      ],
    },

    interview: {
      number: "02",
      title: "AI Interview",
      subtitle: "Practice with precision",
      status: "AI interviewer ready",
      metrics: [
        { label: "Interview Readiness", value: "78%", progress: 78 },
        { label: "Technical", value: "84%", progress: 84 },
        { label: "Communication", value: "76%", progress: 76 },
      ],
    },

    career: {
      number: "03",
      title: "Career Matching",
      subtitle: "Find your best fit",
      status: "Skills aligned",
      metrics: [
        { label: "Matched Roles", value: "12", progress: 82 },
        { label: "Match Accuracy", value: "91%", progress: 91 },
        { label: "Top Match", value: "Software Engineer", progress: 88 },
      ],
    },
  };

  const active = featureData[activeFeature];

  return (
    <section className="hero" id="hero">

      {/* Background */}
      <div className="hero-grid"></div>

      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      <div className="hero-atmosphere hero-atmosphere-one"></div>
      <div className="hero-atmosphere hero-atmosphere-two"></div>

      {/* Galaxy stars */}
      <div className="space-stars" aria-hidden="true">
        {Array.from({ length: 55 }, (_, index) => (
          <span
            key={index}
            className={`star star-${index + 1}`}
          ></span>
        ))}
      </div>

      {/* Main content */}
      <div className="hero-content">

        <div className="hero-badge">
          <span className="status-dot"></span>
          AI-powered placement intelligence
        </div>

        <h1 className="hero-title">
          Turn your preparation
          <br />
          <span>into professional readiness</span>
        </h1>

        <p className="hero-description">
          Your AI-powered command center for <span>resumes</span>,{" "}
          <span>interviews</span>, <span>skills</span>,
          <br />
          and the roles that move your career forward
        </p>

        <div className="hero-buttons">

          <a href="#login" className="primary-btn">
            Start preparing
            <span>→</span>
          </a>

          <a href="#features" className="secondary-btn">
            Explore platform
          </a>

        </div>

        {/* Interactive feature navigation */}
        <div className="hero-proof">

          <button
            type="button"
            className={`proof-item ${
              activeFeature === "resume" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("resume")}
          >
            <span className="proof-number">01</span>

            <div>
              <strong>Resume Intelligence</strong>
              <small>Optimize your profile</small>
            </div>
          </button>

          <div className="proof-line"></div>

          <button
            type="button"
            className={`proof-item ${
              activeFeature === "interview" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("interview")}
          >
            <span className="proof-number">02</span>

            <div>
              <strong>AI Interview</strong>
              <small>Practice with precision</small>
            </div>
          </button>

          <div className="proof-line"></div>

          <button
            type="button"
            className={`proof-item ${
              activeFeature === "career" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("career")}
          >
            <span className="proof-number">03</span>

            <div>
              <strong>Career Matching</strong>
              <small>Find your best fit</small>
            </div>
          </button>

        </div>

        {/* Floating AI product preview */}
        <div className="feature-preview-shell">

          <div className="ai-activity">

            <span className="ai-activity-dot"></span>

            <span className="ai-activity-text">
              AI analyzing your career profile...
            </span>

            <span className="ai-activity-divider"></span>

            <span className="activity-check">✓ Resume optimized</span>
            <span className="activity-check">✓ Skills mapped</span>
            <span className="activity-check">✓ Roles matched</span>

          </div>

          <div className="feature-preview">

            <div className="preview-header">

              <div className="preview-heading">

                <span className="preview-icon">✦</span>

                <div>
                  <strong>{active.title}</strong>
                  <small>{active.subtitle}</small>
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

                    <span>{metric.label}</span>

                    <strong>{metric.value}</strong>

                  </div>

                  <div className="metric-progress">
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

              <span>{active.status}</span>

              <span className="preview-arrow">↗</span>

            </div>

          </div>

        </div>

      </div>

      {/* Right-side product visualization */}
      <div className="hero-visual">

        <div className="hero-visual-glow"></div>

        <div className="hero-dashboard-stack">

          {/* Back analytics panel */}
          <div className="ai-panel panel-back">

            <div className="panel-top">
              <span className="panel-icon">✦</span>
              <span>CAREER INSIGHTS</span>
              <span className="panel-live">LIVE</span>
            </div>

            <div className="panel-title">
              Top <strong>5%</strong>
            </div>

            <div className="panel-subtitle">
              Your profile is outperforming similar candidates
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

          {/* Main Resume AI panel */}
          <div className="ai-panel panel-main">

            <div className="panel-header">

              <div className="panel-brand">

                <div className="panel-logo">✦</div>

                <div>
                  <strong>Resume Intelligence</strong>
                  <small>AI analysis complete</small>
                </div>

              </div>

              <div className="panel-status">
                <span></span>
                98%
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

            <div className="ai-analysis">

              <div className="analysis-icon">✦</div>

              <div className="analysis-content">
                <strong>AI recommendation</strong>

                <small>
                  Strengthen your project impact statements
                </small>
              </div>

              <span className="analysis-arrow">→</span>

            </div>

          </div>

          {/* Resume score panel */}
          <div className="ai-panel panel-score">

            <div className="score-header">
              <span>RESUME SCORE</span>
              <span className="score-dot"></span>
            </div>

            <div className="score-body">

              <div className="score-ring">

                <div className="score-ring-inner">
                  <strong>88</strong>
                  <small>/100</small>
                </div>

              </div>

              <div className="score-info">
                <strong>Excellent</strong>
                <small>+14 this week</small>
              </div>

            </div>

            <div className="score-progress">
              <span></span>
            </div>

          </div>

          {/* AI interview mini card */}
          <div className="ai-panel panel-interview">

            <div className="interview-icon">
              ◉
            </div>

            <div className="interview-content">
              <strong>AI Mock Interview</strong>
              <small>Ready when you are</small>
            </div>

            <div className="interview-mic">
              ◉
            </div>

          </div>

          <span className="dashboard-particle particle-one"></span>
          <span className="dashboard-particle particle-two"></span>
          <span className="dashboard-particle particle-three"></span>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <b>↓</b>
      </div>

    </section>
  );
}

export default Hero;