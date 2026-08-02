function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
    <span className="ai-mark">✦</span>
  <h2>AI CAREER COPILOT</h2>
</a>

      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#resume-analyzer">Resume AI</a></li>
        <li><a href="#mock-interview">Mock Interview</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
      </ul>

      <a href="#login" className="nav-btn">
        Get Started
        <span>→</span>
      </a>
    </nav>
  );
}

export default Navbar;