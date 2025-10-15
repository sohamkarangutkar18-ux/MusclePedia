// src/pages/Landing.tsx

import { useNavigate } from "react-router-dom";
import "./Landing.css"; // ✅ Create this new CSS file

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className="landing-header">
        <h1> Welcome to <span>Muscle❚█══█❚Pedia</span></h1>
        <p>
          Explore interactive muscle anatomy, track exercises, and learn fitness insights.
          <br />
          Sign up or log in to start your personalized fitness experience!
        </p>
      </header>

      {/* Buttons Section */}
      <div className="landing-buttons">
        <button className="btn login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn signup-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>

      {/* Footer Section */}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Muscle-Pedia. All rights reserved.</p>
      </footer>
    </div>
  );
}