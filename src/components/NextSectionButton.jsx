import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { GradientText } from "./Gradient";

export const NextSectionButton = ({ label, link }) => {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <a href={"#" + link} className="flex flex-col items-center">
          <GradientText label={label} />
          <IoIosArrowDown size={80} color="#f97316" />
        </a>
      </motion.div>
    </div>
  );
};
