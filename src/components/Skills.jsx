function Skills({ skills }) {

  if (!skills) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "15px",
      }}
    >
      {skills
        .split(",")
        .filter(skill => skill.trim() !== "")
        .map((skill, index) => (
          <span
            key={index}
            style={{
              background: "#dbeafe",
              color: "#1e40af",
              padding: "8px 16px",
              borderRadius: "30px",
              fontWeight: "600",
            }}
          >
            {skill.trim()}
          </span>
        ))}
    </div>
  );
}

export default Skills;