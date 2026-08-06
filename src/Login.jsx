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

      {/* =========================
          SPACE BACKGROUND
      ========================== */}
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

      {/* =========================
          MAIN AUTH LAYOUT
      ========================== */}
      <section className="login-layout">

        {/* =========================
            LEFT — SPACE / ROCKET
        ========================== */}
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

            <p className="showcase-description">
              Sign in to continue building your career with
              intelligent resume analysis, interview practice
              and placement preparation.
            </p>

          </div>

          {/* =========================
              CAREER INSIGHTS
          ========================== */}
          <div className="showcase-stats">

            <div className="showcase-stat">
              <strong>87%</strong>
              <span>Resume Match Score</span>
            </div>

            <div className="stat-divider" />

            <div className="showcase-stat">
              <strong>12</strong>
              <span>Matched Opportunities</span>
            </div>

            <div className="stat-divider" />

            <div className="showcase-stat">
              <strong>92%</strong>
              <span>Interview Readiness</span>
            </div>

          </div>

        </div>

        {/* =========================
            RIGHT — LOGIN
        ========================== */}
        <div className="login-side">

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

                      if (error) {
                        setError("");
                      }
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

                      if (error) {
                        setError("");
                      }
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