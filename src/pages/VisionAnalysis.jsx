{/*import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import useVisionAnalysis from "../hooks/useVisionAnalysis";

function VisionAnalysis() {
  const { user } = useAuth();

  const {
    setImageFile,
    visionAnalysis,
    analyzeImageResume,
    getVisionHistory,
  } = useVisionAnalysis(user);

  useEffect(() => {
    if (user) {
      getVisionHistory();
    }
  }, [user]);

  const getSection = (title, nextTitle) => {
  if (!visionAnalysis) return "";

  const regex = new RegExp(
    `${title}\\s*([\\s\\S]*?)${nextTitle ? nextTitle : "$"}`,
    "i"
  );

  const match = visionAnalysis.match(regex);
  return match ? match[1].trim() : "";
};

const atsScore =
  visionAnalysis?.match(/ATS Score:\s*(\d{1,3})%/i)?.[1] ||
  visionAnalysis?.match(/ATS score is (\d{1,3}) out of 100/i)?.[1] ||
  "N/A";

const skills = getSection("Technical Skills", "Strengths")
  .replace("The following technical skills were identified:", "")
  .replace(/-/g, ",")
  .replace(/\n/g, ",");

const strengths = getSection("Strengths", "Areas for Improvement");

const improvements = getSection(
  "Areas for Improvement",
  "Design Recommendations"
);

const design = getSection(
  "Design Recommendations",
  "Overall Evaluation"
);

const overall = getSection("Overall Evaluation", null);

  return (
    <div className="dashboard-content">

      <div className="welcome-card">
        <h1>👁️ Groq Vision Analysis</h1>

        <p>
          Upload a resume image and let AI analyze layout,
          formatting, skills and resume quality.
        </p>
      </div>

      <div className="upload-card">

        <h2>📤 Upload Resume Image</h2>

        <p>
          Supported formats: JPG, PNG, JPEG
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <br/> <br/>
        <button onClick={analyzeImageResume}>
          🔍 Analyze Resume
        </button>

      </div>

      {visionAnalysis && (

        <div className="analysis-card">

          <h2>🧠 Vision Report</h2>

          <div className="dashboard-section">

            <div className="dashboard-card">
              <h3>📄 Resume Layout</h3>
              <p>✅ Layout detected successfully</p>
            </div>

            <div className="dashboard-card">
              <h3>🎯 AI Review</h3>
              <p>Formatting, readability and skills analyzed.</p>
            </div>

          </div>

          <div
  className="dashboard-card"
  style={{ marginTop: "25px" }}
>
  <h3>📋 Complete Vision Analysis</h3>
  <>
  <h2 style={{ color: "#2563eb" }}>
    📊 ATS Score: {atsScore}%
  </h2>

  <h3>💻 Technical Skills</h3>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "20px",
    }}
  >
    {skills
      .split(",")
      .filter(skill => skill.trim())
      .map((skill, index) => (
        <span
          key={index}
          style={{
            background: "#dbeafe",
            color: "#1e40af",
            padding: "8px 14px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          {skill.trim()}
        </span>
      ))}
  </div>

  <h3>✅ Strengths</h3>
  <p
    style={{
      whiteSpace: "pre-wrap",
      lineHeight: "1.9",
      color: "#475569",
    }}
  >
    {strengths
      .replace("Here are five professional strengths:", "")
      .replace(/---/g, "")}
  </p>

  <h3>⚠️ Areas for Improvement</h3>
  <p
    style={{
      whiteSpace: "pre-wrap",
      lineHeight: "1.9",
      color: "#475569",
    }}
  >
    {improvements
      .replace("Here are five professional improvement suggestions:", "")
      .replace(/---/g, "")}
  </p>

  <h3>🎨 Design Recommendations</h3>
  <p
    style={{
      whiteSpace: "pre-wrap",
      lineHeight: "1.9",
      color: "#475569",
    }}
  >
    {design
      .replace("Here are some visual and formatting improvements:", "")
      .replace(/---/g, "")}
  </p>

  <h3>🏁 Overall Evaluation</h3>
  <p
    style={{
      lineHeight: "1.9",
      color: "#475569",
    }}
  >
    {overall}
  </p>
</>

</div>

        </div>

      )}

    </div>
  );
}

export default VisionAnalysis;*/}

{/*
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useVisionAnalysis from "../hooks/useVisionAnalysis";
import Vision from "../components/Vision";

function VisionAnalysis() {
  const { user } = useAuth();
  const [selectedVisionReport, setSelectedVisionReport] = useState("");

 const {
  imageFile,
  setImageFile,
  visionAnalysis,
  visionHistory,
  analyzeImageResume,
  getVisionHistory,
} = useVisionAnalysis(user);

  useEffect(() => {
    if (user) {
      getVisionHistory();
    }
  }, [user]);

  const extractSection = (text, title, nextTitle) => {
    if (!text) return "";

    const regex = new RegExp(
      `${title}\\s*([\\s\\S]*?)${nextTitle ? nextTitle : "$"}`,
      "i"
    );

    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };

  const visionATSMatch =
  visionAnalysis?.match(/ATS\s*Score\s*:\s*(\d{1,3})%/i);

const visionATSScore =
  visionATSMatch?.[1] || "N/A";

  const visionSkills = extractSection(
  visionAnalysis,
  "Technical Skills",
  "Strengths"
)
.replace("The following technical skills were identified:", "")
.replace(/-/g, ",")
.replace(/\n/g, ",")
.replace(/,+/g, ",")
.trim();

  const visionStrengths = extractSection(
    visionAnalysis,
    "Strengths",
    "Areas for Improvement"
  );

  const visionImprovements = extractSection(
    visionAnalysis,
    "Areas for Improvement",
    "Design Recommendations"
  );

  const visionDesign = extractSection(
    visionAnalysis,
    "Design Recommendations",
    "Overall Evaluation"
  );

  const visionOverall = extractSection(
    visionAnalysis,
    "Overall Evaluation",
    null
  );

  return (
    <div className="resume-page">

      <div className="welcome-card">
        <h1>👁️ Groq Vision Resume Analysis</h1>

        <p>
          Upload a resume image to receive AI-powered feedback on layout,
          formatting, readability, ATS compatibility and overall design quality.
        </p>
      </div>

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
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <span>
            Choose a resume image for AI visual analysis
          </span>

        </div>

        <button
          className="upload-btn"
          onClick={analyzeImageResume}
        >
          🔍 Analyze Resume
        </button>

      </div>

      {visionAnalysis && (

        {/*<Vision
          visionATSScore={visionATSScore}
          visionSkills={visionSkills}
          visionStrengths={visionStrengths}
          visionImprovements={visionImprovements}
          visionDesign={visionDesign}
          visionOverall={visionOverall}
        />*/}/*
        <Vision
        visionAnalysis={selectedVisionReport || visionAnalysis}
/>

      )}

    </div>
  );
}

export default VisionAnalysis;
*/
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