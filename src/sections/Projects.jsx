import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { GradientText } from "../components/Gradient";
import { NextSectionButton } from "../components/NextSectionButton";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-4/5 flex flex-col justify-between pt-20 items-center"
    >
      <div className="w-full flex flex-col items-center">
        <GradientText label="My works" />
        <h1 className="text-gray-400 text-center">
          These are projects where I put my ideas into action and learned a lot
        </h1>
      </div>

      <div className="w-full flex flex-wrap gap-6 justify-center mt-10">
        <ProjectCard
          src="/todo.png"
          stack={["React", "Tailwind"]}
          title="Taskly - Simple, efficient task management app"
          desc="TodoApp to prosty i intuicyjny menedżer zadań, który pomaga użytkownikom organizować codzienne zadania."
          liveLink="https://tasklybf.netlify.app/"
          codeLink="https://github.com/xBartekSky/Taskly"
        />
        <ProjectCard
          src="/webhotel.png"
          stack={["React", "Tailwind"]}
          title="Taskly - Simple, efficient task management app"
          desc="TodoApp to prosty i intuicyjny menedżer zadań, który pomaga użytkownikom organizować codzienne zadania."
          codeLink="https://github.com/xBartekSky/Booking-Clone"
        />
      </div>

      <div className="w-full flex justify-center py-10">
        <NextSectionButton label="My skills" link="skills" />
      </div>
    </div>
  );
};
