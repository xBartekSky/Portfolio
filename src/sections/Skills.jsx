import React from "react";
import { SkillCard } from "../components/SkillCard";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { GradientText } from "../components/Gradient";
import { NextSectionButton } from "../components/NextSectionButton";
export const Skills = () => {
  return (
    <div
      id="skills"
      className="w-4/5 min-h-screen  lg:h-screen flex flex-col gap-5 pt-25 lg:pt-45   "
    >
      <div className="w-full flex flex-col justify-center items-center">
        <GradientText label="My skills" />
        <h1 className="text-gray-400 text-center">
          Here are the tools and technologies I work with every day. Click to
          more information.
        </h1>
      </div>
      <div className="w-full flex flex-wrap gap-5 justify-center mt-20">
        <SkillCard
          icon={FaHtml5}
          color="#E34F26"
          label="HTML5"
          description="Defines the structure of web pages using semantic markup."
          usecase="Page structure, multimedia embedding, semantic layout."
        />
        <SkillCard
          icon={FaCss3}
          color="#1572B6"
          label="CSS3"
          description="Styles content with layout, color, and animations."
          usecase=" Responsive design, styling, animations, layout control."
        />
        <SkillCard
          icon={FaJs}
          color="#F7DF1E"
          label="JavaScript"
          description="Adds interactivity and dynamic behavior to web apps."
          usecase="DOM manipulation, API calls, event handling, app logic"
        />

        <SkillCard
          icon={FaReact}
          color="#61DAFB"
          label="ReactJs"
          description="React is a library for building fast, modular, component-based UIs."
          usecase="Building SPAs, UI components, dynamic frontends"
        />
        <SkillCard
          icon={RiTailwindCssFill}
          color="#38BDF8"
          label="Tailwind"
          description="Tailwind CSS is a utility-first CSS framework that enables rapid UI development by providing low-level, reusable styling classes."
          usecase="Use Tailwind CSS to quickly build responsive, custom designs without writing custom CSS"
        />
        <SkillCard
          icon={DiMysql}
          color="#4479A1"
          label="MySql"
          description="MySQL is a relational database system that stores structured data efficiently."
          usecase="User data storage, authentication systems, application backends"
        />
      </div>
      <div className="w-full flex justify-center py-10">
        <NextSectionButton label="Contact" link="contact" />
      </div>
    </div>
  );
};
