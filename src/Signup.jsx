import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const scrollToLogin = () => {
    document.getElementById("login")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please complete all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setCreating(true);

    setTimeout(() => {
      setCreating(false);
    }, 2200);
  };

  const passwordStrength =
    form.password.length === 0
      ? ""
      : form.password.length < 6
      ? "WEAK"
      : form.password.length < 10
      ? "GOOD"
      : "STRONG";

  return (
    <main className="signup-page" id="signup">

      {/* =====================================================
          DEEP SPACE
      ===================================================== */}

      <div className="signup-nebula nebula-one" />
      <div className="signup-nebula nebula-two" />
      <div className="signup-nebula nebula-three" />

      <div className="signup-stars" aria-hidden="true">
        {Array.from({ length: 65 }).map((_, index) => (
          <span
            key={index}
            className={`signup-star star-${index + 1}`}
          />
        ))}
      </div>

      {/* Distant galaxy */}
      <div className="signup-galaxy" aria-hidden="true">
        <div className="galaxy-core" />
        <div className="galaxy-arm galaxy-arm-one" />
        <div className="galaxy-arm galaxy-arm-two" />
      </div>

      {/* =====================================================
          TOP BRAND
      ===================================================== */}

      <header className="signup-brand">
        <div className="brand-mark">
          <span>✦</span>
        </div>

        <div className="brand-copy">
          <strong>PLACEMENTPILOT</strong>
          <span>AI CAREER INTELLIGENCE</span>
        </div>
      </header>

      {/* =====================================================
          MAIN EXPERIENCE
      ===================================================== */}

      <section className="signup-container">

        {/* ===================================================
            LEFT — SPACE EXPERIENCE
        =================================================== */}

        <div className="signup-visual">

          <div className="visual-kicker">
            <span className="kicker-line" />
            <span>YOUR CAREER OS</span>
            <span className="kicker-status" />
          </div>

          <h1>
            Launch your
            <br />
            <span>career trajectory.</span>
          </h1>

          <p className="visual-description">
            Build your path from preparation to placement with
            one intelligent workspace designed around your career.
          </p>

          {/* Rocket trajectory */}
          <div className="rocket-trajectory" aria-hidden="true">
            <div className="trajectory-ring ring-one" />
            <div className="trajectory-ring ring-two" />

            <div className="trajectory-line" />

            <div className="mini-rocket">
              <div className="mini-rocket-body">
                <span />
              </div>

              <div className="mini-rocket-flame">
                <i />
                <i />
              </div>
            </div>
          </div>

          {/* Orbit system */}
          <div className="career-orbit-system">

            <div className="orbit orbit-large" />
            <div className="orbit orbit-medium" />
            <div className="orbit orbit-small" />

            <div className="career-planet">
              <div className="planet-atmosphere" />
              <div className="planet-light" />
              <div className="planet-surface" />

              <span>✦</span>
            </div>

            <div className="orbit-node node-one">
              <small>AI</small>
            </div>

            <div className="orbit-node node-two">
              <small>CV</small>
            </div>

            <div className="orbit-node node-three">
              <small>DSA</small>
            </div>

          </div>

          {/* Process */}
          <div className="signup-features">

            <div className="feature-item">
              <span className="feature-number">01</span>

              <div>
                <strong>Analyze</strong>
                <span>Understand your profile</span>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-number">02</span>

              <div>
                <strong>Improve</strong>
                <span>Build stronger skills</span>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-number">03</span>

              <div>
                <strong>Launch</strong>
                <span>Prepare for placements</span>
              </div>
            </div>

          </div>
        </div>

        {/* ===================================================
            RIGHT — COMMAND MODULE
        =================================================== */}

        <div className="signup-panel">

          <div className="signup-card">

            <div className="card-top-line" />

            <div className="card-header">

              <div>
                <span className="card-kicker">
                  NEW MISSION
                </span>

                <h2>Create account</h2>

                <p>
                  Initialize your PlacementPilot profile.
                </p>
              </div>

              <div className="card-status">
                <span />
                SECURE
              </div>

            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="field">

                <label htmlFor="name">
                  FULL NAME
                </label>

                <div className="input-box">

                  <span className="field-icon">
                    ◉
                  </span>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div className="field">

                <label htmlFor="signup-email">
                  EMAIL ADDRESS
                </label>

                <div className="input-box">

                  <span className="field-icon">
                    @
                  </span>

                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />

                </div>

              </div>

              {/* PASSWORDS */}
              <div className="field-row">

                <div className="field">

                  <label htmlFor="signup-password">
                    PASSWORD
                  </label>

                  <div className="input-box">

                    <span className="field-icon">
                      ◆
                    </span>

                    <input
                      id="signup-password"
                      name="password"
                      type="password"
                      placeholder="Create password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />

                  </div>

                </div>

                <div className="field">

                  <label htmlFor="confirmPassword">
                    CONFIRM
                  </label>

                  <div className="input-box">

                    <span className="field-icon">
                      ✓
                    </span>

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />

                  </div>

                </div>

              </div>

              {/* PASSWORD STRENGTH */}
              <div className="password-meter">

                <div className="meter-bars">
                  <span
                    className={
                      form.password.length >= 1
                        ? "active"
                        : ""
                    }
                  />

                  <span
                    className={
                      form.password.length >= 4
                        ? "active"
                        : ""
                    }
                  />

                  <span
                    className={
                      form.password.length >= 6
                        ? "active"
                        : ""
                    }
                  />

                  <span
                    className={
                      form.password.length >= 10
                        ? "active"
                        : ""
                    }
                  />
                </div>

                <small>
                  {passwordStrength || "PASSWORD STRENGTH"}
                </small>

              </div>

              {/* ERROR */}
              {error && (
                <div className="signup-error">
                  <span>!</span>
                  <p>{error}</p>
                </div>
              )}

              {/* CREATE */}
              <button
                type="submit"
                className={`create-button ${
                  creating ? "creating" : ""
                }`}
                disabled={creating}
              >

                <span>
                  {creating
                    ? "INITIALIZING..."
                    : "CREATE ACCOUNT"}
                </span>

                <b>
                  {creating ? "◌" : "→"}
                </b>

              </button>

            </form>

            {/* DIVIDER */}
            <div className="signup-divider">
              <span>OR CONTINUE WITH</span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="google-button"
            >
              <span className="google-icon">
                G
              </span>

              <span>
                Continue with Google
              </span>

              <b>↗</b>
            </button>

            {/* LOGIN */}
            <div className="signin-line">

              <span>
                Already have an account?
              </span>

              <button
                type="button"
                onClick={scrollToLogin}
              >
                Sign in
              </button>

            </div>

            {/* SECURITY */}
            <div className="security-line">

              <span>⌁</span>

              <p>
                Secure authentication • Protected profile
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="signup-footer">
        <span>PLACEMENTPILOT AI</span>
        <i />
        <span>CAREER INTELLIGENCE SYSTEM</span>
      </footer>

    </main>
  );
}

export default Signup;