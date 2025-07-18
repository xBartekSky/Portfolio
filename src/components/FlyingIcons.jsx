import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

export const FlyingIcons = ({ count }) => {
  const icons = [FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs];
  const [positions, setPositions] = useState([]);

  //Inicjalizacja ikon i ich pozycji
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const dynamicCount =
      count ?? (screenWidth < 768 ? 8 : screenWidth < 1024 ? 14 : 20);

    const newPositions = Array(dynamicCount)
      .fill(0)
      .map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      }));

    setPositions(newPositions);
  }, [count]);

  //animowanie ikon i zarzadzanie ich ruchem
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => {
          let newX = pos.x + pos.speedX;
          let newY = pos.y + pos.speedY;
          let newRotation = pos.rotation + pos.rotationSpeed;

          if (newX < 0 || newX > window.innerWidth) pos.speedX = -pos.speedX;
          if (newY < 0 || newY > window.innerHeight) pos.speedY = -pos.speedY;

          return {
            ...pos,
            x: Math.min(Math.max(newX, 0), window.innerWidth),
            y: Math.min(Math.max(newY, 0), window.innerHeight),
            rotation: newRotation,
            speedX: pos.speedX,
            speedY: pos.speedY,
          };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      {positions.map(({ x, y, icon: Icon, size, rotation }, i) => (
        <Icon
          key={i}
          size={size}
          color="#F97316"
          style={{
            position: "fixed",
            top: y,
            left: x,
            transform: `rotate(${rotation}deg)`,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: -1,
            opacity: 0.7,
          }}
        />
      ))}
    </>
  );
};
