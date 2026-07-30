function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-kicker">THE PLATFORM</span>

        <h2>
          Everything you need to
          <span> get placement ready.</span>
        </h2>

        <p>
          A focused career workspace designed around the things that actually
          matter during placement preparation.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card feature-large">
          <div className="feature-number">01</div>

          <div className="feature-icon">◌</div>

          <h3>Resume Intelligence</h3>

          <p>
            Analyze your resume with ATS-focused scoring, skill detection,
            missing-skill identification and personalized recommendations.
          </p>

          <div className="feature-metric">
            <strong>ATS</strong>
            <span>Resume analysis engine</span>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-number">02</div>

          <div className="feature-icon">◈</div>

          <h3>AI Mock Interview</h3>

          <p>
            Practice technical and HR questions and receive structured AI
            feedback on your answers.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-number">03</div>

          <div className="feature-icon">⌁</div>

          <h3>Job Matching</h3>

          <p>
            Discover opportunities matched against the skills found in your
            resume.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-number">04</div>

          <div className="feature-icon">+</div>

          <h3>Career Dashboard</h3>

          <p>
            Keep your preparation signals, recommendations and progress in one
            focused workspace.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Features;