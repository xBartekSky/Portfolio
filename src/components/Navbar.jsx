import React, { useState } from "react";
import { Logo } from "./Logo";
import { GradientLink } from "./Gradient";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-slate-900 flex justify-center relative shadow-lg shadow-slate-900 z-[100]">
      <div className="w-full lg:w-4/5 h-full flex">
        <div className="w-full lg:w-1/2 h-full flex justify-between lg:justify-start items-center p-10">
          <Logo />
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            ☰
          </button>
        </div>

        <div className="hidden lg:flex w-1/2 h-full justify-between items-center">
          <GradientLink label="Home" link="#hero" />
          <GradientLink label="Projects" link="#projects" />
          <GradientLink label="Skills" link="#skills" />
          <GradientLink label="Contact" link="#contact" />
        </div>
      </div>

      <div
        onClick={() => setMenuIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out ${
          menuIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed top-20 left-0 h-full w-3/4 bg-slate-800 z-50 p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${
          menuIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <GradientLink label="Home" link="#hero" />
        <GradientLink label="Projects" link="#projects" />
        <GradientLink label="Skills" link="#skills" />
        <GradientLink label="Contact" link="#contact" />
      </div>
    </div>
  );
};
