import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import useResumes from "../hooks/useResumes";
import ResumeForm from "../components/ResumeForm";
import ResumeList from "../components/ResumeList";
import useAIAnalysis from "../hooks/useAIAnalysis";
import "../components/styles/Resume.css";

function Resume() {
  const { user } = useAuth();
  const { analyzeResumeFile } = useAIAnalysis(user);

  const {
    resumes,
    title,
    setTitle,
    skills,
    setSkills,
    setFile,
    editId,
    uploadResume,
    updateResume,
    deleteResume,
    editResume,
    viewResume,
    getResumes,
  } = useResumes(user);

  useEffect(() => {
  if (user) {
    getResumes();
  }
}, [user]);

  return (
    <div className="dashboard-content">

      <div className="welcome-card">
        <h1>📄 Resume Manager</h1>

        <p>
          Upload, organize and analyze your resumes using AI.
        </p>
      </div>

      <ResumeForm
        title={title}
        setTitle={setTitle}
        skills={skills}
        setSkills={setSkills}
        setFile={setFile}
        editId={editId}
        uploadResume={uploadResume}
        updateResume={updateResume}
      />

      <div style={{ marginTop: "35px" }}>
        <ResumeList
  resumes={resumes}
  editResume={editResume}
  deleteResume={deleteResume}
  viewResume={viewResume}
  analyzeResumeFile={analyzeResumeFile}
/>
      </div>

    </div>
  );
}

export default Resume;