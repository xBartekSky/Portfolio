import React from "react";

export const GradientText = ({ label, tag: Tag = "h1" }) => {
  return (
    <Tag className="text-3xl lg:text-4xl font-bold leading-[1.5] underline tracking-tight bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent inline-block ">
      {label}
    </Tag>
  );
};

export const GradientLink = ({ label, link }) => {
  return (
    <a
      href={link}
      className="text-2xl leading-[1.5] tracking-tight text-transparent bg-white bg-clip-text inline-block transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 hover:border-b-2 hover:border-orange-400"
    >
      {label}
    </a>
  );
};
