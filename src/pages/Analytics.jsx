import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Analytics() {
  const { user } = useAuth();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aiReports, setAiReports] = useState([]);
  const [visionReports, setVisionReports] = useState([]);

  useEffect(() => {
    if (user) {
      getAnalyticsData();
    }
  }, [user]);

  async function getAnalyticsData() {

    // Fetch resumes
    const { data: resumeData } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", user.id);

    setResumes(resumeData || []);

    // Fetch AI reports
    const { data: aiData } = await supabase
      .from("resume_analysis")
      .select("*")
      .eq("user_id", user.id);

    setAiReports(aiData || []);

    // Fetch Vision reports
    const { data: visionData } = await supabase
      .from("vision_analysis")
      .select("*")
      .eq("user_id", user.id);

    setVisionReports(visionData || []);

  }

  const chartData = resumes.map((resume) => ({
    name: resume.title,
    skills: resume.skills
      ? resume.skills.split(",").length
      : 0,
  }));

  const totalResumes = resumes.length;
  const totalAIReports = aiReports.length;

  const totalVisionReports = visionReports.length;

  const totalSkills = resumes.reduce(
    (sum, resume) =>
      sum +
      (resume.skills
        ? resume.skills.split(",").length
        : 0),
    0
  );

  const averageSkills =
    totalResumes > 0
      ? (totalSkills / totalResumes).toFixed(1)
      : 0;

  const highestSkills =
    resumes.length > 0
      ? Math.max(
        ...resumes.map((r) =>
          r.skills
            ? r.skills.split(",").length
            : 0
        )
      )
      : 0;
  const atsScores = aiReports
    .map((report) => {
      const match = report.analysis_result?.match(/ATS\s*Score\s*:\s*(\d+)/i);
      return match ? Number(match[1]) : null;
    })
    .filter((score) => score !== null);


  const averageATS =
    atsScores.length > 0
      ? (
        atsScores.reduce((a, b) => a + b, 0) /
        atsScores.length
      ).toFixed(1)
      : 0;
  // Top Skills

  const skillCount = {};

  resumes.forEach((resume) => {

    if (!resume.skills) return;

    resume.skills.split(",").forEach((skill) => {

      const cleanSkill = skill.trim();

      if (cleanSkill) {

        skillCount[cleanSkill] =
          (skillCount[cleanSkill] || 0) + 1;

      }

    });

  });

  const topSkills = Object.entries(skillCount)
    .sort((a, b) => b[1] - a[1]);
  console.log(resumes);
  console.log(skillCount);

  return (
    <div
      style={{
        marginLeft: "10px",
        padding: "30px",
        maxWidth: "calc(100vw - 250px)",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#1e3a8a",
          marginBottom: "30px",
        }}
      >
        📊 Analytics Dashboard
      </h1>

      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        
        <div className="dashboard-card">
          <h2>{totalResumes}</h2>
          <p>📄 Total Resumes</p>
        </div>

        <div className="dashboard-card">
          <h2>{totalAIReports}</h2>
          <p>🤖 AI Reports</p>
        </div>

        <div className="dashboard-card">
          <h2>{totalVisionReports}</h2>
          <p>👁️ Vision Reports</p>
        </div>

        <div className="dashboard-card">

          <h2
            style={{
              fontSize: "32px",
              color: "#2563eb",
              marginBottom: "8px",
            }}
          >
            ⭐ {averageATS}%
          </h2>

          <p
            style={{
              color: "#64748b",
              fontWeight: "600",
            }}
          >
            Average ATS Score
          </p>
        </div>
      </div>

      {/* Chart */}

      <div
        className="dashboard-card"
        style={{
          padding: "20px",
          marginTop: "25px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Skills Per Resume
        </h2>

        <ResponsiveContainer
          width="100%"
          height={250}
        >
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="skills"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div
        className="dashboard-card"
        style={{
          marginTop: "35px",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          🔥 Top Skills
        </h2>

        {topSkills.length === 0 ? (

          <p>No skills found.</p>

        ) : (

          topSkills.map(([skill, count]) => (

            <div
              key={skill}
              style={{
                display: "grid",
                gridTemplateColumns: "150px 90px 1fr",
                alignItems: "center",
                gap: "15px",
                marginBottom: "18px",
              }}
            >

              <strong
                style={{
                  color: "#1e293b",
                  fontSize: "15px",
                }}
              >
                {skill}
              </strong>


              <span
                style={{
                  color: "#2563eb",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                {count} Resume{count > 1 ? "s" : ""}
              </span>


              <div
                style={{
                  height: "12px",
                  background: "#e2e8f0",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >

                <div
                  style={{
                    width: `${(count / topSkills[0][1]) * 100}%`,
                    height: "100%",
                    background: "#2563eb",
                    borderRadius: "10px",
                  }}
                />

              </div>


            </div>

          ))

        )}

      </div>

      {/* Resume Details */}

      <div
        className="dashboard-card"
        style={{
          marginTop: "35px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          📂 Resume Summary
        </h2>

        {resumes.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "#64748b",
            }}
          >
            <h3>📄 No resumes uploaded</h3>

            <p>
              Upload your first resume to start AI analysis.
            </p>
          </div>
        ) : (
          resumes.map((resume) => (
            <div
              key={resume.id}
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "15px 0",
                borderBottom:
                  "1px solid #e5e7eb",
              }}
            >
              <div>
                <strong>
                  {resume.title}
                </strong>

                <br />


                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >

                  {resume.skills?.split(",").map((skill) => (

                    <span
                      key={skill}
                      style={{
                        background: "#bfdbfe",
                        color: "#1e3a8a",
                        padding: "8px 16px",
                        borderRadius: "25px",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {skill.trim()}
                    </span>

                  ))}

                </div>
              </div>

              <div
                style={{
                  fontWeight: "600",
                  color: "#2563eb",
                }}
              >
                ⭐ {resume.skills
                  ? resume.skills.split(",").length
                  : 0} Skills
              </div>
            </div>
          ))
        )}
      </div>
      {/* Recent Activity */}

      <div
        className="dashboard-card"
        style={{
          marginTop: "35px",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          🕒 Recent Activity
        </h2>


        {aiReports.length === 0 ? (

          <p>No recent activity found.</p>

        ) : (

          aiReports.slice(0, 5).map((report) => (

            <div
              key={report.id}
              style={{
                padding: "15px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >

              <strong>
                Resume Analysis Completed
              </strong>


              <p
                style={{
                  margin: "8px 0",
                  color: "#64748b",
                }}
              >
                ATS Score extracted from AI report
              </p>


              <small
                style={{
                  color: "#94a3b8",
                }}
              >
                {new Date(report.created_at).toLocaleDateString("en-GB")}
              </small>

            </div>

          ))

        )}

      </div>
    </div>
  );
}

export default Analytics;