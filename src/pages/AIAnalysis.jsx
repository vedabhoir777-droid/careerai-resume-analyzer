import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useAIAnalysis from "../hooks/useAIAnalysis";
import AnalysisCard from "../components/AnalysisCard";

function AIAnalysis() {
  const { user } = useAuth();
  const [selectedReport, setSelectedReport] = useState("");

 const {
analysis,
analysisHistory,
loading,
getAnalysis,
sendReport,
} = useAIAnalysis(user);
  
  useEffect(() => {
  if (user) {
    getAnalysis();
  }
}, [user]);

useEffect(() => {
    if(analysisHistory.length>0){
        setSelectedReport(
            analysisHistory[0].analysis_result
        );
    }
}, [analysisHistory]);

  return (
  <div style={{ width: "100%", padding: "30px" }}>

    <h1 style={{ marginBottom: "8px" }}>
      🤖 AI Resume Analysis
    </h1>

    <p style={{ color: "#64748b", marginBottom: "30px" }}>
      View AI-generated resume feedback, ATS suggestions and improvement recommendations.
    </p>

    <div className="dashboard-card">

      <h2>📄 Latest AI Analysis</h2>

      <p style={{ color: "#64748b" }}>
        Your latest AI-generated resume report is displayed below.
      </p>

      <AnalysisCard
  analysis={selectedReport}
  loading={loading}
  sendReport={sendReport}
/>

    </div>
    <div className="dashboard-card" style={{ marginTop: "25px" }}>

  <h2>📚 Analysis History</h2>

  <p style={{ color: "#64748b", marginBottom: "20px" }}>
    Click any previous report to view it.
  </p>

  {analysisHistory.length === 0 ? (

  <p>No AI reports available.</p>

) : (

  analysisHistory.map((item) => (

    <div
      className="history-card"
      key={item.id}
    >

      <div>

        <h4>
          📄 {item.resumes?.title}
        </h4>

        <small style={{ color: "#64748b" }}>
          {new Date(item.created_at).toLocaleString()}
        </small>

      </div>

      <button
        className="history-btn"
        onClick={() =>
          setSelectedReport(item.analysis_result)
        }
      >
        View Report
      </button>

    </div>

  ))

)}

</div>

    <div className="dashboard-card" style={{ marginTop: "25px" }}>
      <h2>💡 Tips to Improve Resume</h2>

      <ul style={{ lineHeight: "2", color: "#475569" }}>
        <li>Add measurable achievements.</li>
        <li>Include relevant technical skills.</li>
        <li>Keep ATS-friendly formatting.</li>
        <li>Use action verbs in experience.</li>
        <li>Keep the resume concise (1–2 pages).</li>
      </ul>
    </div>

  </div>
);
}

export default AIAnalysis;