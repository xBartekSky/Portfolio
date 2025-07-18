import React from "react";
import { FaGithub } from "react-icons/fa";

export const SocialButton = ({ icon: Icon, link }) => {
  return (
    <a
      href={link}
      className="border rounded-3xl border-gray-400 p-1 transition-all duration-300  hover:scale-[1.1] "
    >
      <Icon size={25} color="#9ca3af" />
    </a>
  );
};
