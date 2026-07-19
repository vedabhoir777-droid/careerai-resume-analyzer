function ResumeList({
  resumes,
  editResume,
  deleteResume,
  viewResume,
  analyzeResumeFile,
}) {

  return (

    <div className="resume-list">

      {resumes.length === 0 ? (

        <div className="empty-state">

          <h2>No Resume Uploaded</h2>

          <p>
            Upload your first resume to start AI-powered analysis.
          </p>

        </div>

      ) : (

        resumes.map((resume) => (

          <div className="resume-card" key={resume.id}>

            <div className="resume-top">

              <div className="resume-icon">
                📄
              </div>

              <div className="resume-info">

                <h3>{resume.title}</h3>

                <p className="skills">
                  {resume.skills}
                </p>

              </div>

            </div>

            <div className="resume-actions">

              <button
                className="view-btn"
                onClick={() => viewResume(resume.file_path)}
              >
                View
              </button>

              <button
                className="analyze-btn"
                onClick={() => analyzeResumeFile?.(resume)}
              >
                Analyze
              </button>

              <button
                className="edit-btn"
                onClick={() => editResume(resume)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteResume(resume.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default ResumeList;