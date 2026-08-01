import "./Features.css";

function Features() {
  const features = [
    {
      number: "01",
      icon: "◈",
      title: "Resume Intelligence",
      text: "Analyze your resume with ATS-focused scoring, missing-skill identification and personalized recommendations.",
      tag: "ATS",
      tagText: "Resume analysis engine",
    },
    {
      number: "02",
      icon: "✦",
      title: "AI Mock Interview",
      text: "Practice technical and HR questions and receive structured AI feedback on your answers.",
      tag: "AI",
      tagText: "Interview simulation",
    },
    {
      number: "03",
      icon: "◎",
      title: "Job Matching",
      text: "Discover opportunities matched against the skills, experience and technologies found in your resume.",
      tag: "MATCH",
      tagText: "Skill-based matching",
    },
    {
      number: "04",
      icon: "◫",
      title: "Career Insights",
      text: "Understand your strengths, identify skill gaps and see exactly where you should focus your preparation.",
      tag: "DATA",
      tagText: "Career intelligence",
    },
  ];

  return (
    <section className="features-section" id="features">

      {/* GALAXY BACKGROUND */}
      <div className="galaxy-bg">
        <div className="galaxy-core"></div>
        <div className="galaxy-ring ring-one"></div>
        <div className="galaxy-ring ring-two"></div>
        <div className="galaxy-ring ring-three"></div>
      </div>

      {/* STARS */}
      <div className="stars stars-one"></div>
      <div className="stars stars-two"></div>
      <div className="stars stars-three"></div>

      {/* FLOATING SPACE OBJECTS */}
      <div className="space-orb orb-one"></div>
      <div className="space-orb orb-two"></div>
      <div className="space-orb orb-three"></div>

      <div className="features-container">

        <div className="features-heading">
          <div className="eyebrow">
            <span></span>
            THE PLATFORM
          </div>

          <h2>
            Everything you need to get
            <br />
            <span>placement ready.</span>
          </h2>

          <p>
            A focused career workspace designed around the things
            <br />
            that actually matter during placement preparation.
          </p>

          <div className="platform-stats">
            <div>
              <strong>10K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Powered Intelligence</span>
            </div>

            <div>
              <strong>99.9%</strong>
              <span>Data Security</span>
            </div>
          </div>
        </div>

        <div className="feature-grid">

          {features.map((feature, index) => (
            <div
              className={`feature-card card-${index + 1}`}
              key={feature.number}
            >

              <div className="card-glow"></div>

              <div className="feature-number">
                {feature.number}
              </div>

              <div className="feature-visual">

                <div className="visual-orbit orbit-a"></div>
                <div className="visual-orbit orbit-b"></div>

                <div className="visual-core">
                  <span>{feature.icon}</span>
                </div>

                <div className="orbit-dot dot-a"></div>
                <div className="orbit-dot dot-b"></div>
                <div className="orbit-dot dot-c"></div>

              </div>

              <div className="feature-content">

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

                <div className="feature-footer">
                  <div>
                    <strong>{feature.tag}</strong>
                    <span>{feature.tagText}</span>
                  </div>

                  <button className="feature-arrow">
                    →
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="feature-bottom-bar">

          <div className="bottom-item">
            <div className="bottom-icon">✦</div>
            <div>
              <strong>AI POWERED</strong>
              <span>Advanced intelligence for accurate results</span>
            </div>
          </div>

          <div className="bottom-item">
            <div className="bottom-icon">◇</div>
            <div>
              <strong>SECURE & PRIVATE</strong>
              <span>Your data stays protected</span>
            </div>
          </div>

          <div className="bottom-item">
            <div className="bottom-icon">ϟ</div>
            <div>
              <strong>REAL-TIME ANALYSIS</strong>
              <span>Instant actionable insights</span>
            </div>
          </div>

          <div className="bottom-item">
            <div className="bottom-icon">◉</div>
            <div>
              <strong>BUILT FOR PLACEMENTS</strong>
              <span>Everything in one workspace</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;