import "./CTA.css";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section id="about" className="cta">

      <div className="cta-box">

        <h2>
          Ready to Improve Your Resume?
        </h2>

        <p>
          Analyze your resume with AI, improve your ATS score,
          discover missing skills and get personalized career
          recommendations in seconds.
        </p>

        <button onClick={() => navigate("/signup")}>
          🚀 Start Analyzing
        </button>

      </div>

    </section>
  );
}

export default CTA;