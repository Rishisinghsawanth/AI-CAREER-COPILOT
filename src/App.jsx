import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Login />
        <Signup />
        <Features />
        <Dashboard />
      </main>

      <Footer />
    </>
  );
}

export default App;