import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [launching, setLaunching] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    setLaunching(true);

    setTimeout(() => {
      setLaunching(false);
    }, 2200);
  }

  return (
    <main className="login-page">

      {/* =====================================================
          SPACE BACKGROUND
      ===================================================== */}

      <div className="login-stars" aria-hidden="true">
        {Array.from({ length: 32 }).map((_, index) => (
          <span
            key={index}
            className={`login-star star-${index + 1}`}
          />
        ))}
      </div>

      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />

      {/* =====================================================
          MAIN AUTH LAYOUT
      ===================================================== */}

      <section className="login-layout">

        {/* ===================================================
            LEFT — SPACE / ROCKET EXPERIENCE
        =================================================== */}

        <div className="login-showcase">

          <div className="showcase-orbit orbit-one" />
          <div className="showcase-orbit orbit-two" />

          {/* Rocket */}
          <div className="rocket-stage">

            <div className="rocket-aura" />

            <div
              className={`rocket-launch ${
                launching ? "is-launching" : ""
              }`}
              aria-hidden="true"
            >

              <div className="rocket-body">

                <div className="rocket-nose" />

                <span className="rocket-window">
                  <span />
                </span>

                <span className="rocket-fin rocket-fin-left" />
                <span className="rocket-fin rocket-fin-right" />

              </div>

              <div className="rocket-flame">
                <span />
                <span />
                <span />
              </div>

              <div className="rocket-smoke">
                <i />
                <i />
                <i />
              </div>

            </div>

            {/* Launch trajectory */}
            <div className="rocket-trail">
              <span />
              <span />
              <span />
            </div>

          </div>

          {/* Showcase text */}
          <div className="showcase-copy">

            <span className="showcase-label">
              PLACEMENTPILOT AI
            </span>

            <h1>
              Your career.
              <br />
              <span>Ready for launch.</span>
            </h1>

            <p>
              Sign in to continue building your career with
              intelligent resume analysis, interview practice
              and placement preparation.
            </p>

          </div>

          {/* Stats */}
          <div className="showcase-stats">

            <div className="showcase-stat">
              <strong>AI</strong>
              <span>Career Intelligence</span>
            </div>

            <div className="stat-divider" />

            <div className="showcase-stat">
              <strong>24/7</strong>
              <span>Smart Preparation</span>
            </div>

            <div className="stat-divider" />

            <div className="showcase-stat">
              <strong>∞</strong>
              <span>Practice Sessions</span>
            </div>

          </div>

        </div>

        {/* ===================================================
            RIGHT — LOGIN
        =================================================== */}

        <div className="login-side">

          {/* Career visual */}
          <div className="career-visual">

            <div className="career-visual-glow" />

            <div
              className="career-star"
              aria-hidden="true"
            >
              ✦
            </div>

            {/* AI status */}
            <div className="career-card career-card-top">

              <span className="career-dot" />

              <div>
                <b>AI Career Analysis</b>
                <small>Profile optimized</small>
              </div>

            </div>

            {/* Resume */}
            <div className="career-card career-card-left">

              <div className="career-card-icon">
                ↗
              </div>

              <div>
                <small>RESUME SCORE</small>

                <b>
                  87<span>/100</span>
                </b>
              </div>

            </div>

            {/* Interview */}
            <div className="career-card career-card-right">

              <div className="career-card-icon purple">
                ◆
              </div>

              <div>
                <small>INTERVIEW READINESS</small>
                <b>92%</b>
              </div>

            </div>

            {/* Progress */}
            <div className="career-card career-card-bottom">

              <div className="career-progress">
                <span />
              </div>

              <div>
                <b>Career Progress</b>

                <small>
                  You're on the right trajectory
                </small>
              </div>

            </div>

            {/* Career message */}
            <div className="career-copy">

              <span>
                AI-POWERED CAREER INTELLIGENCE
              </span>

              <h2>
                Your next
                <strong> opportunity starts here.</strong>
              </h2>

              <p>
                Analyze. Prepare. Practice. Get placement ready
                with one intelligent career platform.
              </p>

            </div>

          </div>

          {/* =================================================
              LOGIN CARD
          ================================================= */}

          <div className="login-card">

            {/* Header */}
            <div className="login-heading">

              <span className="login-kicker">
                WELCOME BACK
              </span>

              <h2>Sign in</h2>

              <p>
                Continue your journey with PlacementPilot AI
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="input-group">

                <label htmlFor="email">
                  Email address
                </label>

                <div className="input-wrapper">

                  <span
                    className="input-icon"
                    aria-hidden="true"
                  >
                    @
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    autoComplete="email"
                  />

                </div>

              </div>

              {/* Password */}
              <div className="input-group">

                <div className="password-label">

                  <label htmlFor="password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() => {
                      setError(
                        "Password recovery will be available soon."
                      );
                    }}
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="input-wrapper">

                  <span
                    className="input-icon"
                    aria-hidden="true"
                  >
                    ◆
                  </span>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError("");
                    }}
                    autoComplete="current-password"
                  />

                </div>

              </div>

              {/* Remember */}
              <label className="remember">

                <input type="checkbox" />

                <span className="custom-checkbox" />

                <span>Remember me</span>

              </label>

              {/* Error */}
              {error && (
                <div
                  className="login-error"
                  role="alert"
                >
                  <span>!</span>
                  <p>{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                className={`login-submit ${
                  launching ? "launch-active" : ""
                }`}
                type="submit"
                disabled={launching}
              >

                <span>
                  {launching
                    ? "Launching..."
                    : "Sign in"}
                </span>

                <b aria-hidden="true">
                  {launching ? "◌" : "→"}
                </b>

              </button>

            </form>

            {/* Divider */}
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            {/* Social */}
            <div className="social-login">

              <button type="button">

                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt=""
                />

                <span>Google</span>

              </button>

              <button type="button">

                <span className="github-symbol">
                  GH
                </span>

                <span>GitHub</span>

              </button>

            </div>

            {/* Signup */}
            <p className="signup-text">

              <span>
                Don't have an account?
              </span>

              <a href="#signup">
                Create one
              </a>

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Login;