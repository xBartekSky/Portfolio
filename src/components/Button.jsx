import React from "react";

export const Button = ({ label, fill = true, icon: Icon, link }) => {
  const fillStyles =
    " bg-gradient-to-r from-orange-600 to-orange-400  text-white  ";

  const emptyStyles = " border-2 border-orange-500 text-white";
  const standardStyles =
    "p-4  text-xl flex rounded-lg  h-10 shadow-[0_0_10px_4px_rgba(249,115,22,0.7)] transition-all duration-300 hover:shadow-[0_0_25px_4px_rgba(249,115,22,0.7)] flex justify-center items-center gap-2 pointer";

  const styles = fill ? fillStyles : emptyStyles;
  return (
    <a href={link} className={standardStyles + " " + styles}>
      <Icon className="transition-all duration-300 hover:rotate-50"></Icon>
      <span className="truncate whitespace-nowrap overflow-hidden">
        {label}
      </span>
    </a>
  );
};
