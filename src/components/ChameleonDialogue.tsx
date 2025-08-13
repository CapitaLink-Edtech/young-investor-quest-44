import { useState } from "react";

const dialogueSequence = [
  {
    sprite: "/lovable-uploads/personagem_capitalink-Photoroom.png",
    text: "Seja bem-vindo futuro investidor de sucesso!"
  },
  {
    sprite: "/lovable-uploads/personagem_capitalink-Photoroom.png",
    text: "Investir é o caminho para você realizar seus sonhos e ter tranquilidade para viver a sua melhor vida!"
  },
  {
    sprite: "/lovable-uploads/Rike_Pre3-Cuidado.png",
    text: "Mas a gente sabe o quão perigoso pode ser para os iniciantes aprenderem sobre o assunto. Há muita coisa errada que pode ser feita."
  },
  {
    sprite: "/lovable-uploads/Rike_Pre3-Chateado.png",
    text: "E ainda o processo pode ser muito chato de entender."
  },
  {
    sprite: "/lovable-uploads/Rike_Pre4-Moedas.png",
    text: "Mas nós estamos aqui para te ajudar nessa!"
  },
  {
    sprite: "/lovable-uploads/Rike_Pre4-Moedas.png",
    text: "Aqui no CapitaLink você aprenderá todas as formas de fazer sua grana render, de um jeito prazeroso e confiável."
  },
  {
    sprite: "/lovable-uploads/personagem_capitalink-Photoroom.png",
    text: "Investir é incrível e divertido, e você vai ver o lado mágico dos investimentos."
  }
];

interface ChameleonDialogueProps {
  onComplete: () => void;
}

export const ChameleonDialogue = ({ onComplete }: ChameleonDialogueProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    if (currentStep < dialogueSequence.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      onComplete();
    }
  };

  const currentDialogue = dialogueSequence[currentStep];

  return (
    <div className="fixed bottom-0 right-0 flex items-end space-x-2 sm:space-x-4 cursor-pointer px-2 sm:px-4 py-3 md:py-6 z-50" onClick={handleClick}>
      {/* Chameleon Sprite - Left Side, Responsive */}
      <div className={`
        transition-all duration-500 transform flex-shrink-0 scale-100
        ${isTransitioning ? 'opacity-0 scale-95 rotate-12' : 'opacity-100 scale-100 rotate-0'}
      `}>
        <img 
          src={currentDialogue.sprite}
          alt="CapitaLink Chameleon" // tamanho do camaleão
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain filter drop-shadow-lg"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      
      {/* Speech Bubble - Right Side */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 flex-1 min-w-0">
        <div className={`
          relative bg-capitalink-cream rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 w-full max-w-xs sm:max-w-sm shadow-glow
          transition-all duration-500 transform
          ${isTransitioning ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0 animate-bounce-in'}
          border border-capitalink-gold/20 sm:border-2
        `}>
          <p className="text-capitalink-dark-blue text-sm sm:text-base md:text-lg leading-relaxed font-medium tracking-wide animate-fade-in" 
             style={{
               fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
               textShadow: '0 1px 2px rgba(0,0,0,0.1)',
               lineHeight: '1.5'
             }}>
            {currentDialogue.text}
          </p>
          {/* Speech bubble tail pointing to chameleon */}
          <div className="absolute bottom-3 sm:bottom-4 left-0 transform -translate-x-full">
            <div className="w-0 h-0 border-t-[12px] sm:border-t-[16px] md:border-t-[20px] border-b-[12px] sm:border-b-[16px] md:border-b-[20px] border-r-[12px] sm:border-r-[16px] md:border-r-[20px] border-t-transparent border-b-transparent border-r-capitalink-cream"></div>
          </div>
        </div>
        
        {/* Click indicator */}
        <div className="text-capitalink-gold text-xs sm:text-sm font-semibold animate-pulse tracking-wider">
          ✨ Toque para continuar ✨
        </div>
      </div>
    </div>
  );
};