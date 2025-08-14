import { useState } from "react";
import { BackgroundCircles } from "./BackgroundCircles";
import { CapitaLinkLogo } from "./CapitaLinkLogo";
import { RotatingSquares } from "./RotatingSquares";
import { ChameleonDialogue } from "./ChameleonDialogue";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div className={`
      min-h-screen bg-gradient-bg relative overflow-hidden
      transition-all duration-600
      ${isExiting ? 'opacity-0 animate-fade-out' : 'opacity-100 animate-fade-in'}
    `}>
      <BackgroundCircles />
      
        {/* Header with Logo */}
        <div className="flex-shrink-0">
          <CapitaLinkLogo />
        </div>
        
        {/* Center with Rotating Squares */}
        <div className="flex-1 flex items-center justify-center">
          <RotatingSquares />
        </div>
        
        {/* Bottom with Chameleon Dialogue */}
        <div className="flex-shrink-0 pb-8">
          <ChameleonDialogue onComplete={handleComplete} />
        </div>
      </div>
  );
};