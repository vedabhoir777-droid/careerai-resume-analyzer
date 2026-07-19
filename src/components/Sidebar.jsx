import "./styles/Sidebar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaChartBar } from "react-icons/fa";

function Sidebar({ user, signOut }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sidebar">

      <div>
        <div className="logo">
          <h2>CareerAI</h2>
          <p>Resume Analyzer</p>
        </div>

        <div className="menu">

  <Link
    to="/dashboard"
    className={location.pathname === "/dashboard" ? "active" : ""}
  >
    🏠 Dashboard
  </Link>

  <Link
    to="/resume"
    className={location.pathname === "/resume" ? "active" : ""}
  >
    📄 Resume Manager
  </Link>

  <Link
    to="/ai-analysis"
    className={location.pathname === "/ai-analysis" ? "active" : ""}
  >
    🤖 AI Analysis
  </Link>

  <Link
    to="/vision-analysis"
    className={location.pathname === "/vision-analysis" ? "active" : ""}
  >
    👁️ Groq Vision
  </Link>

  <Link
    to="/analytics"
    className={location.pathname === "/analytics" ? "active" : ""}
  >
    📊 Analytics
  </Link>

  <Link
    to="/profile"
    className={location.pathname === "/profile" ? "active" : ""}
  >
    👤 Profile
  </Link>

</div>
      </div>

      <div className="bottom">
        <p>{user?.email}</p>

        <button
  className="logout-btn"
  onClick={async () => {
    await signOut();
    navigate("/");
  }}
>
  <FiLogOut size={20} />
  <span>Logout</span>
</button>
      </div>

    </div>
  );
}

export default Sidebar;