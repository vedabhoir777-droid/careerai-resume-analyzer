function ATS({ score }) {

  const numericScore = Number(score);

  const quality =
    numericScore >= 90
      ? "Outstanding Resume"
      : numericScore >= 80
      ? "Excellent Resume Quality"
      : numericScore >= 70
      ? "Good Resume"
      : numericScore >= 60
      ? "Average Resume"
      : "Needs Improvement";

  return (
    <div className="dashboard-card">

      <h3>📊 ATS Score</h3>

      <h1
        style={{
          fontSize: "52px",
          color: "#2563eb",
          marginBottom: "10px",
        }}
      >
        {score}%
      </h1>

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#e5e7eb",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            width: `${numericScore}%`,
            height: "100%",
            background:
              numericScore >= 80
                ? "#22c55e"
                : numericScore >= 60
                ? "#f59e0b"
                : "#ef4444",
          }}
        />
      </div>

      <p
        style={{
          fontWeight: "600",
          color:
            numericScore >= 80
              ? "#16a34a"
              : numericScore >= 60
              ? "#d97706"
              : "#dc2626",
        }}
      >
        {quality}
      </p>

    </div>
  );
}

export default ATS;