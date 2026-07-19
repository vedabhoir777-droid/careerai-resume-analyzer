import ATS from "./ATS";
import Skills from "./Skills";
import Section from "./Section";

function Vision({ visionAnalysis }) {

  const extractSection = (title, nextTitle) => {
    if (!visionAnalysis) return "";

    const regex = new RegExp(
      `${title}\\s*([\\s\\S]*?)${nextTitle ? nextTitle : "$"}`,
      "i"
    );

    const match = visionAnalysis.match(regex);

    return match ? match[1].trim() : "";
  };

  const visionATSScore =
    visionAnalysis?.match(/ATS\s*Score\s*:\s*(\d{1,3})%/i)?.[1] ||
    "N/A";

  const visionSkills = extractSection(
    "Technical Skills",
    "Strengths"
  )
    .replace("The following technical skills were identified:", "")
    .replace(/-/g, ",")
    .replace(/\n/g, ",")
    .replace(/,+/g, ",")
    .trim();

  const visionStrengths = extractSection(
    "Strengths",
    "Areas for Improvement"
  );

  const visionImprovements = extractSection(
    "Areas for Improvement",
    "Design Recommendations"
  );

  const visionDesign = extractSection(
    "Design Recommendations",
    "Overall Evaluation"
  );

  const visionOverall = extractSection(
    "Overall Evaluation",
    null
  );

  return (
    <div
      className="analysis-card"
      style={{ marginTop: "35px" }}
    >

      <h2
        style={{
          fontSize: "32px",
          color: "#0f172a",
          marginBottom: "25px",
        }}
      >
        👁️ Groq Vision Analysis
      </h2>

      <div className="dashboard-section">

        <ATS score={visionATSScore} />

        <div className="dashboard-card">

          <h3>📋 Vision Summary</h3>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
            }}
          >
            AI evaluated your resume layout,
            formatting, readability,
            ATS compatibility and
            overall visual quality.
          </p>

        </div>

      </div>

      <div
        className="dashboard-card"
        style={{
          marginTop: "30px",
          padding: "35px",
          borderRadius: "18px",
          border: "1px solid #dbeafe",
          background: "#fff",
        }}
      >

        <div
          style={{
            borderBottom: "2px solid #dbeafe",
            paddingBottom: "18px",
            marginBottom: "25px",
          }}
        >

          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "8px",
            }}
          >
            👁️ CareerAI Vision Resume Report
          </h2>

          <p
            style={{
              color: "#64748b",
            }}
          >
            AI Visual Resume Evaluation
          </p>

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >

          <div>

            <strong>ATS Score</strong>

            <br />

            {visionATSScore}%

          </div>

          <div>

            <strong>Status</strong>

            <br />

            Visual Review Completed

          </div>

          <div>

            <strong>Generated</strong>

            <br />

            {new Date().toLocaleString()}

          </div>

        </div>
        <hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "14px 0",
  }}
/>

        <h3
  style={{
    color: "#1e3a8a",
    fontSize: "22px",
    fontWeight: "700",
    borderLeft: "5px solid #2563eb",
    paddingLeft: "14px",
    marginBottom: "18px",
  }}
>
  💻 Technical Skills
</h3>

<Skills skills={visionSkills} />

        <hr
          style={{
            border: 0,
            height: "2px",
            background: "#dbeafe",
            margin: "14px 0",
          }}
        />

        <Section
          title="💪 Strengths"
          content={visionStrengths}
        />

        <hr
          style={{
            border: 0,
            height: "2px",
            background: "#dbeafe",
            margin: "14px 0",
          }}
        />

        <Section
          title="⚠ Areas for Improvement"
          content={visionImprovements}
        />

        <hr
          style={{
            border: 0,
            height: "2px",
            background: "#dbeafe",
            margin: "14px 0",
          }}
        />

        <Section
          title="🎨 Design Recommendations"
          content={visionDesign}
        />

        <hr
          style={{
            border: 0,
            height: "2px",
            background: "#dbeafe",
            margin: "14px 0",
          }}
        />

        <div
          style={{
            background: "#eff6ff",
            border: "2px solid #3b82f6",
            borderRadius: "15px",
            padding: "24px",
          }}
        >

          <Section
            title="🏁 Overall Evaluation"
            content={visionOverall}
          />
        </div>
      </div>
    </div>
  );
}

export default Vision;
