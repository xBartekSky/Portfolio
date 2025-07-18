import React, { useState, useEffect, useRef } from "react";

export const SkillCard = ({
  color,
  icon: Icon,
  label,
  description,
  usecase,
}) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setHovered(!hovered);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => window.innerWidth > 768 && setHovered(true)}
      onMouseLeave={() => window.innerWidth > 768 && setHovered(false)}
      onClick={handleClick}
      style={{
        border: `2px solid ${color}`,
        backgroundColor: "#0f172a",
        boxShadow: hovered ? `0 0 25px 2px ${color}` : `0 0 10px 1px ${color}`,
      }}
      className={`relative w-32 h-32 flex flex-col items-center justify-center 
        rounded-3xl cursor-pointer transition-all duration-300 
        ${hovered ? "scale-110 z-10" : "scale-100"}
      `}
    >
      <Icon size={50} color={color} />
      <p className="mt-2 text-sm font-semibold text-white">{label}</p>

      {hovered && (
        <div className="absolute top-full mt-2 w-full lg:w-64 bg-slate-800 text-gray-300 text-xs p-3 rounded-xl shadow-xl z-50 flex flex-col gap-2">
          <p>{description}</p>
          {usecase && (
            <>
              <p className="font-bold">Use:</p>
              <p style={{ color: color }}>{usecase}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
