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

            <span>AI Analysis</span>
            <span>Vision Analysis</span>
            <span>Resume Manager</span>

          </div>

          <div>

            <h3>Company</h3>

            <span>About</span>
            <span>Features</span>
            <span>Contact</span>

          </div>

          <div>

            <h3>Resources</h3>

            <span>Privacy</span>
            <span>Terms</span>
            <span>Help Center</span>

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