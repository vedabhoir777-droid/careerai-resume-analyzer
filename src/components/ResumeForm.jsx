function ResumeForm({
  title,
  setTitle,
  skills,
  setSkills,
  setFile,
  editId,
  updateResume,
  uploadResume,
}) {
  return (
    <div className="upload-section">

      <div className="upload-card">

        <div className="upload-header">
          <h2>Upload Resume</h2>
          <p>
            Upload your resume in PDF format and let AI analyze your skills.
          </p>
        </div>

        <div className="form-group">
          <label>Resume Title</label>

          <input
            type="text"
            placeholder="Frontend Developer Resume"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Skills</label>

          <input
            type="text"
            placeholder="React, JavaScript, Node.js"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        <div className="file-upload">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <span>
            Drag & Drop or Choose Resume
          </span>

        </div>

        <button
          className="upload-btn"
          onClick={editId ? updateResume : uploadResume}
        >
          {editId ? "Update Resume" : "Upload Resume"}
        </button>

      </div>

    </div>
  );
}

export default ResumeForm;