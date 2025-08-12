import { useEffect, useState } from "react";

interface Circle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export const BackgroundCircles = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const newCircles: Circle[] = [];
    for (let i = 0; i < 20; i++) {
      newCircles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
        size: Math.random() * 8 + 4,
      });
    }
    setCircles(newCircles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute bg-capitalink-gold rounded-full opacity-60 animate-float"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};