import { useState, useEffect } from "react";

const introImages = [
  "Aprender sobre investimentos de forma divertida",
  "Conquistar seus objetivos financeiros",
  "Desenvolver inteligência financeira",
];

export const RotatingSquares = () => {
  const [positions, setPositions] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setPositions(prev => [prev[2], prev[0], prev[1]]);
        setIsAnimating(false);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 px-8">
      {positions.map((imageIndex, positionIndex) => (
        <div
          key={positionIndex}
          className={`
            bg-gradient-primary rounded-2xl shadow-soft border border-capitalink-gold/20
            transition-all duration-500 ease-in-out flex items-center justify-center
            ${positionIndex === 1 ? 'w-24 h-24 md:w-28 md:h-28' : 'w-16 h-16 md:w-20 md:h-20'}
            ${isAnimating ? 'animate-pulse' : ''}
          `}
        >
          <div className="text-center p-2">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-capitalink-gold rounded-full mx-auto mb-1 flex items-center justify-center">
              <span className="text-capitalink-dark-blue font-bold text-xs md:text-sm">
                {imageIndex + 1}
              </span>
            </div>
            <p className="text-xs text-center text-foreground/80 leading-tight hidden md:block">
              {introImages[imageIndex].split(' ').slice(0, 2).join(' ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};