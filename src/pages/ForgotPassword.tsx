import { SignIn } from "@clerk/clerk-react";

export default function ForgotPassword() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      {/* Clerk will render "Forgot password?" form here */}
      <SignIn
        routing="path"
        path="/forgot-password"
        signInUrl="/login"
        afterSignInUrl="/home"
        appearance={{
          elements: {
            card: { boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: "12px" },
            headerTitle: { fontSize: "22px", fontWeight: "600" },
            formFieldInput: { borderRadius: "8px", padding: "10px" },
          },
        }}
      />
    </div>
  );
}
