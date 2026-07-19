import "./Hero.css";
import heroImage from "../assets/hero.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 AI Powered Resume Analyzer
        </span>

        <h1>
          Build a Resume That
          <br />
          Gets You Hired.
        </h1>
    
        <p>
          Analyze your resume using Artificial Intelligence,
          improve your ATS score, identify missing skills,
          and receive personalized career recommendations
          in seconds.
        </p>

       <div className="hero-buttons">

  <button
    className="primary-btn"
    onClick={() => navigate("/signup")}
  >
    Get Started
  </button>

  <button
    className="secondary-btn"
    onClick={() =>
      document
        .getElementById("features")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Learn More
  </button>

</div>

      </div>

      <div className="hero-right">

        <img
  src={heroImage}
  alt="CareerAI Dashboard"
  className="hero-image"
/>

      </div>

    </section>
  );
}

export default Hero;