import "./Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="stats-heading">
        <span>OUR IMPACT</span>

        <h2>Helping Students Build Better Careers</h2>

        <p>
          CareerAI provides intelligent resume analysis to help
          students and professionals improve their chances of
          getting shortlisted.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>1000+</h3>
          <p>Resumes Analyzed</p>
        </div>

        <div className="stat-card">
          <h3>95%</h3>
          <p>ATS Accuracy</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>AI Availability</p>
        </div>

        <div className="stat-card">
          <h3>50+</h3>
          <p>Career Suggestions</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;