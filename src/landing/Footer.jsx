import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>CareerAI</h2>

          <p>
            AI-powered Resume Analyzer that helps students and
            professionals build ATS-friendly resumes and improve
            their career opportunities.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <h3>Product</h3>

            <a href="#">AI Analysis</a>
            <a href="#">Vision Analysis</a>
            <a href="#">Resume Manager</a>

          </div>

          <div>

            <h3>Company</h3>

            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>

          </div>

          <div>

            <h3>Resources</h3>

            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Help Center</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 CareerAI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;