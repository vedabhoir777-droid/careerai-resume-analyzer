import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import useVisionAnalysis from "../hooks/useVisionAnalysis";
import Vision from "../components/Vision";

function VisionAnalysis() {

  const { user } = useAuth();

  const {
    setImageFile,
    visionAnalysis,
    visionHistory,
    selectedVisionReport,
    setSelectedVisionReport,
    analyzeImageResume,
    getVisionHistory,
  } = useVisionAnalysis(user);

  useEffect(() => {
    if (user) {
      getVisionHistory();
    }
  }, [user]);

  const currentReport =
    selectedVisionReport || visionAnalysis;

  return (
    <div>

      {/* Welcome */}

      <div className="welcome-card">

        <h1>👁️ Groq Vision Resume Analysis</h1>

        <p>
          Upload your resume image and receive an AI-powered
          visual evaluation with ATS score, formatting,
          design review and professional suggestions.
        </p>

      </div>

      {/* Upload */}

      <div className="upload-card">

        <div className="upload-header">

          <h2>📤 Upload Resume Image</h2>

          <p>
            Supported formats: JPG, PNG, JPEG
          </p>

        </div>

        <div className="file-upload">

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files[0])
            }
          />

        </div>

        <button
          className="upload-btn"
          onClick={analyzeImageResume}
        >
          🔍 Analyze Resume
        </button>

      </div>

      {/* Latest Report */}

      {currentReport && (

        <Vision
          visionAnalysis={currentReport}
        />

      )}

      {/* History */}

      {visionHistory.length > 0 && (

        <div
          className="dashboard-card"
          style={{
            marginTop: "35px",
          }}
        >

          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "20px",
            }}
          >
            📜 Vision Analysis History
          </h2>

          {visionHistory.map((item) => (

            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px",
                marginBottom: "15px",
                border: "1px solid #dbeafe",
                borderRadius: "12px",
                background: "#f8fbff",
              }}
            >

              <div>

               <strong>
  📄 {
    item.image_url &&
    item.image_url !== "null" &&
    item.image_url.trim() !== ""
      ? item.image_url
      : "Resume Image"
  }
</strong>

                <br/>

                <small
                  style={{
                    color: "#64748b",
                  }}
                >
                  {new Date(
                    item.created_at
                  ).toLocaleString()}
                </small>

              </div>

              <button
  className="history-btn"
  onClick={() => {
    console.log(item.analysis_result); // test
    setSelectedVisionReport(item.analysis_result);
  }}
>
  👁 View Report
</button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default VisionAnalysis;