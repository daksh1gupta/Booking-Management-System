import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SearchBox from "./SearchBox";
import FeaturesSection from "./FeaturesSection";
import PopularRoutes from "./PopularRoutes";
import AIChatAssistant from "./AIChatAssistant";

interface LandingPageProps {
  onLogout: () => void;
}

const LandingPage = ({ onLogout }: LandingPageProps) => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-sky">
      <Navbar onLogout={onLogout} onMicClick={() => setChatOpen(true)} />
      <HeroSection />
      <SearchBox />
      <FeaturesSection />
      <PopularRoutes />
      <div className="h-16" />
      <AIChatAssistant isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
};

export default LandingPage;
