import React, { useState } from "react";
import { Logo } from "./Logo";
import { GradientLink } from "./Gradient";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-slate-900 flex justify-center relative shadow-lg shadow-slate-900 sticky top-0 z-[100]">
      <div className="w-full lg:w-4/5 h-full flex">
        <div className="w-full lg:w-1/2 h-full flex justify-between lg:justify-start items-center p-10">
          <Logo />
          <button
            className="lg:hidden flex flex-col justify-between w-8 h-6 z-[101] relative"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <span
              className={`block h-1 bg-white transition-all duration-300 ease-in-out ${
                menuIsOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 bg-white transition-all duration-300 ease-in-out ${
                menuIsOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 bg-white transition-all duration-300 ease-in-out ${
                menuIsOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div className="hidden lg:flex w-1/2 h-full justify-between items-center">
          <GradientLink label="Home" link="hero" />
          <GradientLink label="Projects" link="projects" />
          <GradientLink label="Skills" link="skills" />
          <GradientLink label="Contact" link="contact" />
        </div>
      </div>

      <div
        onClick={() => setMenuIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out ${
          menuIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed  left-0 h-full w-3/4 bg-slate-800 z-50 p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${
          menuIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <GradientLink
          label="Home"
          link="hero"
          onclick={() => {
            setMenuIsOpen(false);
          }}
        />
        <GradientLink
          label="Projects"
          link="projects"
          onclick={() => {
            setMenuIsOpen(false);
          }}
        />
        <GradientLink
          label="Skills"
          link="skills"
          onclick={() => {
            setMenuIsOpen(false);
          }}
        />
        <GradientLink
          label="Contact"
          link="contact"
          onclick={() => {
            setMenuIsOpen(false);
          }}
        />
      </div>
    </div>
  );
};
