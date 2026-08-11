import "./Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="stats-heading">
        <span>OUR IMPACT</span>

        <h2>Everything You Need In One Platform</h2>

        <p>
          CareerAI combines AI Resume Analysis, Vision AI,
          ATS scoring and Resume Management into one
          modern career platform.
        </p>
      </div>

     <div className="landing-stats-grid">

        <div className="stat-card">
          <h3>3</h3>
          <p>AI Modules</p>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <p>Cloud Based</p>
        </div>

        <div className="stat-card">
          <h3>ATS</h3>
          <p>Resume Scoring</p>
        </div>

        <div className="stat-card">
          <h3>Vision AI</h3>
          <p>Image Analysis</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;