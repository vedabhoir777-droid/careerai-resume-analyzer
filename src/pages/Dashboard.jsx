import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../components/styles/Dashboard.css";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import useAIAnalysis from "../hooks/useAIAnalysis";
import useVisionAnalysis from "../hooks/useVisionAnalysis";
import useResumes from "../hooks/useResumes";
import Analytics from "./Analytics";

import {
  FaFileAlt,
  FaRobot,
  FaEye,
  FaArrowRight,
  FaCheckCircle,
  FaBrain,
} from "react-icons/fa";

function Dashboard() {

  const { user, signOut } = useAuth();
  const navigate = useNavigate();
 const {
  analysis,
  analysisHistory,
  loading,
  analyzeResumeFile,
  getAnalysis
} = useAIAnalysis(user);
const {
  imageFile,
  setImageFile,
  visionAnalysis,
  visionHistory,
  analyzeImageResume,
  getVisionHistory
} = useVisionAnalysis(user);
const {
  resumes,
  title,setTitle,
  skills,setSkills,
  file,setFile,
  editId,
  getResumes,
  uploadResume,
  deleteResume,
  editResume,
  updateResume,
  viewResume
} = useResumes(user);


const userName = user?.email
  ? user.email.split("@")[0]
  : "User";

  useEffect(() => {
    if (user) {
      getResumes();
      getVisionHistory();
      getAnalysis();

    }
  }, [user]);


return (
  <div className="dashboard-content">

    <Header
      userName={userName}
      resumes={resumes}
      analysis={analysis}
      visionAnalysis={visionAnalysis}
    />

    <StatsCards
      resumes={resumes}
      analysisHistory={analysisHistory}
      visionHistory={visionHistory}
    />


    <div className="dashboard-section">

 <div className="dashboard-card">

  <h2>Quick Actions</h2>

  <div className="quick-actions">

    <div
      className="action-card"
      onClick={() => navigate("/resume")}
    >
      <div className="action-icon blue">
        <FaFileAlt />
      </div>

      <div className="action-content">
        <h3>Resume Manager</h3>
        <p>
          Upload, edit and manage all your resumes.
        </p>
      </div>

      <FaArrowRight className="arrow-icon" />
    </div>

    <div
      className="action-card"
      onClick={() => navigate("/ai-analysis")}
    >
      <div className="action-icon purple">
        <FaRobot />
      </div>

      <div className="action-content">
        <h3>AI Analysis</h3>
        <p>
          Generate ATS score and AI suggestions.
        </p>
      </div>

      <FaArrowRight className="arrow-icon" />
    </div>

    <div
      className="action-card"
      onClick={() => navigate("/vision-analysis")}
    >
      <div className="action-icon green">
        <FaEye />
      </div>

      <div className="action-content">
        <h3>Vision Analysis</h3>
        <p>
          Analyze resume images using AI Vision.
        </p>
      </div>

      <FaArrowRight className="arrow-icon" />
    </div>

  </div>

</div>

      <div className="dashboard-card">

  <h2>Platform Overview</h2>

  <div className="overview-list">

    <div className="overview-item">
      <FaFileAlt className="overview-icon" />
      <div>
        <h4>Resume Management</h4>
        <p>Upload, organize and manage all resumes.</p>
      </div>
    </div>

    <div className="overview-item">
      <FaBrain className="overview-icon" />
      <div>
        <h4>AI Resume Analysis</h4>
        <p>Receive ATS score and AI suggestions.</p>
      </div>
    </div>

    <div className="overview-item">
      <FaEye className="overview-icon" />
      <div>
        <h4>Vision Analysis</h4>
        <p>Analyze resume images using AI Vision.</p>
      </div>
    </div>

    <div className="overview-item">
      <FaCheckCircle className="overview-icon success" />
      <div>
        <h4>Career Ready</h4>
        <p>Build resumes that stand out.</p>
      </div>
    </div>

  </div>

</div>

    </div>
    <br/><br/>
    <div className="dashboard-card">

  <h2>Recent Resumes</h2>

  {resumes.length === 0 ? (

    <div className="empty-state">
      <p>No resumes uploaded yet.</p>
    </div>

  ) : (

    resumes.slice(0,3).map((resume)=>(

      <div
        key={resume.id}
        className="resume-item"
      >

        <div className="resume-icon">
          <FaFileAlt />
        </div>

        <div className="resume-info">
          <h3>{resume.title}</h3>
          <p>{resume.skills}</p>
        </div>

        <FaArrowRight className="resume-arrow"/>

      </div>

    ))

  )}

</div>
<br/><br/>
<div className="dashboard-card">

  <div className="analysis-header">

    <div className="analysis-title">

      <div className="analysis-icon ai">
        <FaRobot />
      </div>
      <div>
        <h2>Latest AI Analysis</h2>
        <p>Generated using CareerAI</p>
      </div>

    </div>

  </div>

  {analysis ? (

    <div className="analysis-box">
      {analysis.substring(0, 320)}...
    </div>

  ) : (

    <div className="empty-state">
      No AI Analysis available.
    </div>

  )}

  <button
    className="analysis-btn"
    onClick={() => navigate("/ai-analysis")}
  >
    View Full Report
    <FaArrowRight />
  </button>

</div>
<br/><br/>
<div className="dashboard-card">

  <div className="analysis-header">

    <div className="analysis-title">

      <div className="analysis-icon vision">
        <FaEye />
      </div>

      <div>
        <h2>Latest Vision Analysis</h2>
        <p>Image Resume Analysis</p>
      </div>

    </div>

  </div>

  {visionAnalysis ? (

    <div className="analysis-box">
      {visionAnalysis.substring(0,320)}...
    </div>

  ) : (

    <div className="empty-state">
      No Vision Analysis available.
    </div>

  )}

  <button
    className="analysis-btn vision-btn"
    onClick={() => navigate("/vision-analysis")}
  >
    View Full Report
    <FaArrowRight />
  </button>

</div>
    

  </div>
);}

export default Dashboard;