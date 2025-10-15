// src/App.tsx
import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";

import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Landing from "./pages/Landing";
// NOTE: removed Login import to avoid "module not found" if file missing

export default function App() {
  return (
    <div>
      <SignedIn>
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <UserButton />
        </div>
      </SignedIn>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <Landing />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/home"
          element={
            <SignedIn>
              <Home />
            </SignedIn>
          }
        />

        <Route
          path="/login"
          element={
            <SignedOut>
              <SignIn routing="path" path="/login" afterSignInUrl="/home" />
            </SignedOut>
          }
        />

        <Route
          path="/signup"
          element={
            <SignedOut>
              <SignUp routing="path" path="/signup" afterSignUpUrl="/home" />
            </SignedOut>
          }
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}