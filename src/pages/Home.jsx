import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Hero from "../landing/Hero";
import Features from "../landing/Features";
import Stats from "../landing/Stats";
import CTA from "../landing/CTA";
import Footer from "../landing/Footer";

import "./Home.css";

function Home() {

  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="home">

      <nav className="navbar">

        <h2>CareerAI</h2>

        <div className="nav-buttons">

  <button
  className="nav-link"
  onClick={() =>
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Features
</button>

<button
  className="nav-link"
  onClick={() =>
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  About
</button>

<button
  className="nav-link"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Contact
</button>

  <Link to="/login">
    <button className="login-btn">
      Login
    </button>
  </Link>

  <Link to="/signup">
    <button className="signup-btn">
      Sign Up
    </button>
  </Link>

</div>

      </nav>

      <Hero />

      <Features />

     <Stats />

      <CTA />

      <Footer />

    </div>
  );
}

export default Home;