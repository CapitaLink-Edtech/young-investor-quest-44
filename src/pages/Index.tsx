import { useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { LoginScreen } from "@/components/LoginScreen";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen">
      {!showLogin ? (
        <IntroScreen onComplete={() => setShowLogin(true)} />
      ) : (
        <LoginScreen />
      )}
    </div>
  );
};

export default Index;
