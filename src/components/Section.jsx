function Section({ title, content }) {

  if (!content) return null;

  return (
    <>

      <h3
        style={{
          color: "#1e3a8a",
          fontSize: "22px",
          fontWeight: "700",
          borderLeft: "5px solid #2563eb",
          paddingLeft: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#475569",
          fontSize: "15px",
          lineHeight: "1.65",
          whiteSpace: "pre-line",
        }}
      >
        {content}
      </p>
    </>
  );
}

export default Section;