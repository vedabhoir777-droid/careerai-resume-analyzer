import "./styles/Header.css";
function Header({ userName }) {
  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "800",
          color: "#0f172a",
          marginBottom: "6px",
        }}
      >
         Welcome back, {userName} 👋
      </h1>

      <p
        style={{
          color: "#64748b",
          fontSize: "16px",
          marginBottom: "35px",
        }}
      >
        Manage resumes, generate AI-powered reports and analyze resume images with Groq Vision.
      </p>
    </>
  );
}

export default Header;