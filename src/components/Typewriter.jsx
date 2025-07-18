import React, { useState, useEffect } from "react";
import { GradientText } from "./Gradient";

export const Typewriter = ({ label = [], speed = 100, pause = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!Array.isArray(label) || label.length === 0) return;

    if (charIndex < label[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + label[textIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % label.length);
      }, pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, textIndex, label, speed, pause]);

  return <GradientText label={displayedText} />;
};
