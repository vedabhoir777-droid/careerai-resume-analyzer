import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="back-home">
  ← Back to Home
</Link>
      <div className="auth-card">
       
        <h1>CareerAI</h1>

        <p>
          Welcome back 👋 <br />
          Sign in to continue your AI Resume journey.
        </p>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <label>Email</label>

<input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

          <label>Password</label>

<input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

          <button
            className="auth-btn"
            type="submit"
          >
            Login
          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?{" "}

          <Link to="/signup">
            Sign Up
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;