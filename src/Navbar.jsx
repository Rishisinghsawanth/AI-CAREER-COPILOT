function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>🚀</span>
        <h2>PlacementPilot AI</h2>
      </div>

      <ul>
        <li>Features</li>
        <li>Resume AI</li>
        <li>Mock Interview</li>
        <li>Pricing</li>
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;