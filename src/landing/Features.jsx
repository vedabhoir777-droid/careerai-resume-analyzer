import "./Features.css";

const features = [
  {
    icon: "🤖",
    title: "AI Resume Analysis",
    desc: "Get detailed AI-powered resume evaluation with ATS score, strengths, weaknesses and personalized improvement suggestions."
  },
  {
    icon: "👁️",
    title: "Vision Resume Review",
    desc: "Upload resume images and let AI analyze formatting, layout, readability and professional appearance."
  },
  {
    icon: "📊",
    title: "ATS Score Checker",
    desc: "Know how well your resume performs with Applicant Tracking Systems before applying for jobs."
  },
  {
    icon: "💼",
    title: "Career Guidance",
    desc: "Receive role recommendations, missing skills and personalized career suggestions."
  },
  {
    icon: "⚡",
    title: "Instant Reports",
    desc: "Generate complete resume reports within seconds using advanced AI models."
  },
  {
    icon: "🔒",
    title: "Secure Storage",
    desc: "Store and manage all your resumes securely with cloud-based storage."
  }
];

function Features() {
  return (
    <section className="features" id="features">

      <div className="features-heading">

        <span>WHY CAREERAI?</span>

        <h2>
          Everything You Need To Build
          <br />
          A Job Winning Resume
        </h2>

        <p>
          CareerAI combines Artificial Intelligence with ATS optimization
          to help you create professional resumes that stand out.
        </p>

      </div>

      <div className="features-grid">

        {features.map((item, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;