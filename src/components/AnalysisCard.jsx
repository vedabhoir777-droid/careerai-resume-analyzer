import ATS from "./ATS";
import Section from "./Section";
import Skills from "./Skills";
import Vision from "./Vision";


function AnalysisCard({
  analysis,
  visionAnalysis,
  sendReport,
}) {


  const extractSection = (text, title, nextTitle) => {

    if (!text) return "";

    const regex = new RegExp(
      `${title}\\s*([\\s\\S]*?)${nextTitle ? nextTitle : "$"}`,
      "i"
    );

    const match = text.match(regex);

    return match ? match[1].trim() : "";

  };


  // ATS Score

  const atsMatch =
    analysis?.match(/ATS\s*Score\s*:\s*(\d+)/i);


  const atsScore =
    atsMatch ? atsMatch[1] : "N/A";


  const score = Number(atsScore);


  const quality =
    score >= 90
      ? "Outstanding Resume"
      : score >= 80
      ? "Excellent Resume Quality"
      : score >= 70
      ? "Good Resume"
      : score >= 60
      ? "Average Resume"
      : "Needs Improvement";



  // Report Sections

  const candidateOverview = extractSection(
    analysis,
    "Candidate Overview",
    "Technical Skills"
  );


  const technicalSkills = extractSection(
    analysis,
    "Technical Skills",
    "Key Strengths"
  );


  const strengths = extractSection(
    analysis,
    "Key Strengths",
    "Areas for Improvement"
  );


  const improvements = extractSection(
    analysis,
    "Areas for Improvement",
    "Missing Skills"
  );


  const missingSkills = extractSection(
    analysis,
    "Missing Skills",
    "Recommended Job Roles"
  );


  const recommendedRoles = extractSection(
    analysis,
    "Recommended Job Roles",
    "Career Recommendations"
  );


  const careerRecommendations = extractSection(
    analysis,
    "Career Recommendations",
    "Final Verdict"
  );


  const finalVerdict = extractSection(
    analysis,
    "Final Verdict",
    null
  );



  const suggestions = [];


  if (improvements)
    suggestions.push(
      "Improve work experience details"
    );


  if (missingSkills) {

    suggestions.push(
      "Add missing technical skills"
    );

    suggestions.push(
      "Include certifications"
    );

  }


  if (careerRecommendations)
    suggestions.push(
      "Build more real-world projects"
    );


  suggestions.push(
    "Use more ATS-friendly keywords"
  );


  suggestions.push(
    "Quantify your achievements"
  );



  // Vision Sections


  const visionATSMatch =
    visionAnalysis?.match(
      /ATS\s*Score\s*:\s*(\d+)%/i
    );


  const visionATSScore =
    visionATSMatch
      ? visionATSMatch[1]
      : "N/A";



  const visionSkills = extractSection(
    visionAnalysis,
    "Technical Skills",
    "Strengths"
  );


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
    <>
    {analysis && (

  <div className="analysis-card">

    <h2
      style={{
        fontSize: "32px",
        marginBottom: "25px",
        color: "#0f172a",
      }}
    >
      🤖 AI Resume Analysis
    </h2>


    <div className="dashboard-section">


      <ATS score={atsScore} />


      <div className="dashboard-card">

        <h3>💡 AI Suggestions</h3>

        <ul
          style={{
            paddingLeft: "20px",
            lineHeight: "2",
            color: "#334155",
          }}
        >

          {suggestions.map((item,index)=>(

            <li key={index}>
              {item}
            </li>

          ))}

        </ul>

      </div>


    </div>



    <div
      className="dashboard-card"
      style={{
        marginTop:"30px",
        padding:"35px",
        borderRadius:"18px",
        border:"1px solid #dbeafe",
        background:"#ffffff",
      }}
    >


      <h2
        style={{
          color:"#1e3a8a",
          marginBottom:"8px",
        }}
      >
        📄 CareerAI Professional Resume Report
      </h2>


      <p
        style={{
          color:"#64748b",
        }}
      >
        Generated using Artificial Intelligence
      </p>



      <div
        style={{
          marginTop:"30px",
          display:"flex",
          flexDirection:"column",
          gap:"18px",
        }}
      >

       <h3
  style={{
    color: "#1e3a8a",
    fontSize: "22px",
    fontWeight: "700",
    borderLeft: "5px solid #2563eb",
    paddingLeft: "14px",
    marginBottom: "12px",
  }}
>
  👤 Candidate Overview
</h3>

<p
  style={{
    color:"#475569",
    fontSize:"15px",
    lineHeight:"1.65",
    whiteSpace:"pre-line",
  }}
>
  {candidateOverview}
</p>

<div
  style={{
    height: "2px",
    background:
      "linear-gradient(to right,#2563eb,#93c5fd,#2563eb)",
    opacity: 0.35,
    borderRadius: "20px",
    margin: "18px 0",
  }}
/>

<h3
  style={{
    color:"#1e3a8a",
    fontSize:"22px",
    fontWeight:"700",
    borderLeft:"5px solid #2563eb",
    paddingLeft:"14px",
    display:"flex",
    alignItems:"center",
    gap:"8px",
    marginBottom:"15px",
  }}
>
  💻 Technical Skills
</h3>

<Skills skills={technicalSkills}/>

{/* Strengths */}

<hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "18px 0",
  }}
/>

<Section
  title="✅ Key Strengths"
  content={strengths}
/>

{/* Areas for Improvement */}

<hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "18px 0",
  }}
/>

<Section
  title="⚠ Areas for Improvement"
  content={improvements}
/>

{/* Missing Skills */}

<hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "18px 0",
  }}
/>

<Section
  title="❌ Missing Skills"
  content={missingSkills}
/>

{/* Recommended Job Roles */}

<hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "18px 0",
  }}
/>

<Section
  title="💼 Recommended Job Roles"
  content={recommendedRoles}
/>

{/* Career Recommendations */}

<hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "18px 0",
  }}
/>

<Section
  title="🚀 Career Recommendations"
  content={careerRecommendations}
/>

{/* Final Verdict */}

<hr
  style={{
    border: 0,
    height: "2px",
    background: "#dbeafe",
    margin: "18px 0",
  }}
/>

<Section
  title="🏆 Final Verdict"
  content={finalVerdict}
/>
        

        {sendReport && (

          <div
            style={{
              marginTop:"35px",
              textAlign:"center",
            }}
          >

            <button
              onClick={sendReport}
              style={{
                width:"100%",
                padding:"16px",
                borderRadius:"12px",
                background:
                "linear-gradient(90deg,#2563eb,#1d4ed8)",
                color:"#fff",
                border:"none",
                fontWeight:"700",
                fontSize:"16px",
                cursor:"pointer",
              }}
            >
              📧 Send Report to Email

            </button>

          </div>

        )}



      </div>

    </div>


  </div>

)}



{visionAnalysis && (

  <Vision

    visionATSScore={visionATSScore}

    visionSkills={visionSkills}

    visionStrengths={visionStrengths}

    visionImprovements={visionImprovements}

    visionDesign={visionDesign}

    visionOverall={visionOverall}

  />

)}


</>
);

}

export default AnalysisCard;