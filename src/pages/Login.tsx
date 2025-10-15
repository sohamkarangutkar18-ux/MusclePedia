import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <SignIn routing="path" path="/login" afterSignInUrl="/home" />

      {/* Add a link for forgot password */}
      <p style={{ marginTop: "10px" }}>
        <Link to="/forgot-password" style={{ color: "blue", textDecoration: "underline" }}>
          Forgot your password?
        </Link>
      </p>
    </div>
  );
}
