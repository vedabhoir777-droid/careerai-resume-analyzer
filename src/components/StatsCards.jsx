{/*import "./styles/StatsCards.css";
function StatsCards({
  resumes,
  analysisHistory,
  visionHistory,
}) {
  return (
    <div className="stats-grid">

      <div className="stat-card">
        <h3>{resumes?.length || 0}</h3>
        <p>📄 Total Resumes</p>
      </div>

      <div className="stat-card">
        <h3>{analysisHistory?.length || 0}</h3>
        <p>🤖 AI Reports</p>
      </div>

      <div className="stat-card">
        <h3>{visionHistory?.length || 0}</h3>
        <p>👁 Vision Reports</p>
      </div>

    </div>
  );
}

export default StatsCards; */}

import "./styles/StatsCards.css";

import {
  FaFileAlt,
  FaRobot,
  FaEye,
} from "react-icons/fa";

function StatsCards({
  resumes,
  analysisHistory,
  visionHistory,
}) {
  return (
    <div className="stats-grid">

      <div className="stat-card">

        <div className="stat-icon blue">
          <FaFileAlt />
        </div>

        <div className="stat-content">
          <h3>{resumes?.length || 0}</h3>
          <h4>Total Resumes</h4>
          <p>Uploaded resumes</p>
        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon purple">
          <FaRobot />
        </div>

        <div className="stat-content">
          <h3>{analysisHistory?.length || 0}</h3>
          <h4>AI Reports</h4>
          <p>Generated analyses</p>
        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon green">
          <FaEye />
        </div>

        <div className="stat-content">
          <h3>{visionHistory?.length || 0}</h3>
          <h4>Vision Reports</h4>
          <p>Image analyses</p>
        </div>

      </div>

    </div>
  );
}

export default StatsCards;