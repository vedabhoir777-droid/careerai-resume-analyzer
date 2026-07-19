{/*import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {

  const { user, signOut } = useAuth();

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    getResumes();
  }, []);

  async function getResumes() {

    const { data } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", user.id);

    setResumes(data || []);

  }

  const chartData = resumes.map((resume) => ({
    name: resume.title,
    skills: resume.skills.split(",").length,
  }));

  return (
    <div style={{ display: "flex" }}>

      <div style={{ marginLeft: "260px", width: "100%", padding: "30px" }}>

        <h1>Analytics Dashboard</h1>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="skills" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Analytics;*/}


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

  useEffect(() => {
    if (user) {
      getResumes();
    }
  }, [user]);

  async function getResumes() {
    const { data } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", user.id);

    setResumes(data || []);
  }

  const chartData = resumes.map((resume) => ({
    name: resume.title,
    skills: resume.skills
      ? resume.skills.split(",").length
      : 0,
  }));

  const totalResumes = resumes.length;

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
          <p>Total Resumes</p>
        </div>

        <div className="dashboard-card">
          <h2>{averageSkills}</h2>
          <p>Average Skills</p>
        </div>

        <div className="dashboard-card">
          <h2>{highestSkills}</h2>
          <p>Highest Skills</p>
        </div>
      </div>

      {/* Chart */}

      <div className="dashboard-card">
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Skills Per Resume
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
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
          Resume Details
        </h2>

        {resumes.length === 0 ? (
          <p>No resumes found.</p>
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

                <small
                  style={{
                    color: "#64748b",
                  }}
                >
                  {resume.skills}
                </small>
              </div>

              <div
                style={{
                  fontWeight: "600",
                  color: "#2563eb",
                }}
              >
                {resume.skills
                  ? resume.skills.split(",")
                      .length
                  : 0}{" "}
                Skills
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Analytics;