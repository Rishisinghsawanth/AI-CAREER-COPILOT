function Signup() {
  return (
    <section className="auth-section signup-section" id="signup">
      <div className="auth-shell signup-shell">
        <div className="auth-card signup-card">
          <div className="auth-card-top">
            <div className="auth-logo-small">P</div>
            <span>PLACEMENTPILOT AI</span>
          </div>

          <h3>Create your account</h3>

          <p className="auth-subtitle">
            Build your personalized placement intelligence workspace.
          </p>

          <form className="signup-form">
            <label>Full name</label>

            <input
              type="text"
              placeholder="Your full name"
            />

            <label>Email address</label>

            <input
              type="email"
              placeholder="you@example.com"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
            />

            <label>Confirm password</label>

            <input
              type="password"
              placeholder="Confirm your password"
            />

            <button type="submit" className="auth-submit">
              Create account
              <span>→</span>
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <button type="button" className="social-button">
            <span>G</span>
            Continue with Google
          </button>

          <p className="auth-bottom-text">
            Already have an account? <a href="#login">Sign in</a>
          </p>
        </div>

        <div className="auth-intro signup-intro">
          <span className="section-kicker">YOUR CAREER OS</span>

          <h2>
            Build the profile
            <span> recruiters notice.</span>
          </h2>

          <p>
            PlacementPilot brings your resume, interview preparation and career
            progress into one intelligent system.
          </p>

          <div className="signup-stat-grid">
            <div>
              <strong>01</strong>
              <span>Analyze</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Improve</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Prepare</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Match</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;