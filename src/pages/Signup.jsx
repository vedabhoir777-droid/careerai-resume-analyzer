import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/login");
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
          Create your account ✨ <br />
          Start building ATS-friendly resumes with AI.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSignup}
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
  placeholder="Create a password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

          <button
            className="auth-btn"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Signup;