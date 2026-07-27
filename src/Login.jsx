import { useState } from "react";

function Login() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }

  function handleLogin() {
    if (email === "") {
      setMessage("Please enter your email.");
      return;
    }

    if (password === "") {
      setMessage("Please enter your password.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setMessage("Login Successful ✅");
  }

  return (
    <section className="login">
      <h2>Login</h2>

      <form>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
        />

        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

        <p>{message}</p>
      </form>
    </section>
  );
}

export default Login;