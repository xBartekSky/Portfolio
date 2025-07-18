import {
  FaCode,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaHandsHelping,
  FaLinkedinIn,
} from "react-icons/fa";
import { Button } from "../components/Button";
import { Typewriter } from "../components/Typewriter";
import { motion } from "framer-motion";
import { NextSectionButton } from "../components/NextSectionButton";
import { SocialButton } from "../components/SocialButton";

export const Hero = () => {
  const texts = ["Frontend developer", "Bartosz Fijołek"];

  return (
    <div className="w-full lg:w-4/5  flex flex-col justify-between relative p-5">
      <div className="flex flex-col lg:flex-row  w-full ">
        <div className="w-full lg:w-1/3  flex justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col gap-5 justify-start lg:items-start mt-[13vh] lg:mt-[13vh]"
          >
            <div className="flex items-center gap-2">
              <h1 className="text-3xl lg:text-4xl text-white font-bold leading-[1.5]">
                Hi, I’m
              </h1>
              <Typewriter label={texts} />
            </div>
            <p className="text-white font-bold text-xl text-left">
              I specialize in building modern, responsive web interfaces with
              clean, efficient code.
            </p>
            <div className="w-full flex gap-10">
              <Button label="My works" icon={FaCode} link="#projects" />
              <Button
                label="Contact"
                fill={false}
                icon={FaHandsHelping}
                link="#contact"
              />
            </div>

            <div className="w-full flex gap-4">
              <SocialButton
                icon={FaGithub}
                link="https://github.com/xBartekSky"
              />
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex w-2/3 h-full justify-end ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-2/3 h-full flex justify-end lg:mt-[1vh] "
          >
            <img
              className="size-200 transition-all duration-300 hover:scale-[1.05]"
              src="/mainImage.svg"
              alt="Main visual"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[100px] ">
        <NextSectionButton label="My projects" link="projects" />
      </div>
    </div>
  );
};
