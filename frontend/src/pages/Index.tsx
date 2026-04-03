import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AuthPage from "@/components/AuthPage";
import CinematicTransition from "@/components/CinematicTransition";
import LandingPage from "@/components/LandingPage";

type AppState = "auth" | "transition" | "app";

const Index = () => {
  const [state, setState] = useState<AppState>("auth");

  const handleLogin = () => setState("transition");
  const handleTransitionComplete = () => setState("app");
  const handleLogout = () => setState("auth");

  return (
    <AnimatePresence mode="wait">
      {state === "auth" && <AuthPage key="auth" onLogin={handleLogin} />}
      {state === "transition" && (
        <CinematicTransition key="transition" onComplete={handleTransitionComplete} />
      )}
      {state === "app" && <LandingPage key="app" onLogout={handleLogout} />}
    </AnimatePresence>
  );
};

export default Index;
