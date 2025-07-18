import { FaCode } from "react-icons/fa";
import { Button } from "./Button";
import { CgMediaLive } from "react-icons/cg";

export const ProjectCard = ({
  src,
  title,
  desc,
  stack = [],
  codeLink,
  liveLink,
}) => {
  return (
    <div className="w-[400px] min-h-[550px] flex flex-col  rounded-2xl overflow-hidden shadow-md bg-slate-900 transition-all duration-300 hover:border-orange-400 hover:scale-[1.05] hover:shadow-[0_0_25px_4px_rgba(249,115,22,0.7)]">
      <div className="w-full max-h-[250px]">
        <img src={src} alt={title} className="w-full h-full object-cfull" />
      </div>

      <div className="p-4 flex flex-col gap-4 flex-1">
        <div className="w-full">
          <a className="flex items-center justify-center w-2/10 border border-blue-400 rounded-2xl text-blue-400 p-1 bg-blue-400/20">
            <FaCode />
            Web
          </a>
        </div>
        <div>
          <h1 className="text-xl text-white font-semibold">
            {title || "Tytuł projektu"}
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            {desc || "Opis projektu"}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {stack.map((item, i) => (
            <p
              key={i}
              className="text-white border rounded-2xl border-slate-800 flex items-center px-3 py-1 text-sm bg-slate-800"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="mt-auto flex gap-3 flex-wrap">
          <Button icon={FaCode} label="Code" link={codeLink} />
          <Button
            icon={CgMediaLive}
            fill={false}
            label={liveLink ? "Live version" : "N/A"}
            link={liveLink}
          />
        </div>
      </div>
    </div>
  );
};
