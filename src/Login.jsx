import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [launching, setLaunching] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
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

      {/* STARFIELD */}
      <div className="login-stars" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className={`login-star star-${index + 1}`}
          />
        ))}
      </div>

      {/* AMBIENT LIGHT */}
      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />

      {/* SINGLE OUTER BOX */}
      <section className="login-layout">

        {/* LEFT SIDE */}
        <div className="login-showcase">

          {/* ROCKET */}
          <div className="rocket-stage">

            <div className="rocket-aura" />

            <div
              className={`rocket-launch ${
                launching ? "is-launching" : ""
              }`}
              aria-hidden="true"
            >
              <div className="rocket-body">
                <span className="rocket-window" />
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

          </div>

          {/* WELCOME BACK */}
          <div className="showcase-copy">
            <p className="eyebrow">WELCOME BACK!</p>
          </div>

          {/* STATS */}
          <div className="showcase-stats">

            <div>
              <strong>AI</strong>
              <span>Career Intelligence</span>
            </div>

            <div className="stat-divider" />

            <div>
              <strong>24/7</strong>
              <span>Smart Preparation</span>
            </div>

            <div className="stat-divider" />

            <div>
              <strong>∞</strong>
              <span>Practice Sessions</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-side">

          {/* EXISTING LOGIN CARD */}
          <div className="login-card">

            {/* LOGIN HEADING */}
            <div className="login-heading">

              <p className="eyebrow">WELCOME BACK!</p>

              <h2>Sign in</h2>

              <span>
                Login to continue your journey
              </span>

            </div>

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin}>

              <div className="input-group">

                <label htmlFor="email">
                  Email address
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ✉
                  </span>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />

                </div>

              </div>

              <div className="input-group">

                <div className="password-label">

                  <label htmlFor="password">
                    Password
                  </label>

                  <button type="button">
                    Forgot password?
                  </button>

                </div>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ⌁
                  </span>

                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />

                </div>

              </div>

              {/* REMEMBER ME */}
              <label className="remember">

                <input type="checkbox" />

                <span className="custom-checkbox" />

                Remember me

              </label>

              {/* ERROR */}
              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}

              {/* SIGN IN */}
              <button
                className={`login-submit ${
                  launching ? "launch-active" : ""
                }`}
                type="submit"
              >

                <span>
                  {launching
                    ? "Launching..."
                    : "Sign in"}
                </span>

                <b>→</b>

              </button>

            </form>

            {/* DIVIDER */}
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="social-login">

              <button type="button">

                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                />

                Google

              </button>

              <button type="button">

                <img
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt="GitHub"
                />

                GitHub

              </button>

            </div>

            {/* SIGN UP */}
            <p className="signup-text">

              Don't have an account?

              <button type="button">
                Create one
              </button>

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Login;