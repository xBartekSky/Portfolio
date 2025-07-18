import React from "react";
import { GradientText } from "./Gradient";

export const Logo = () => {
  return (
    <div className="inline-flex gap-2 justify-center pb-1 relative  ">
      <h1 className="text-3xl lg:text-4xl font-bold leading-[1.5] text-white">
        Bartosz
      </h1>
      <GradientText label="Fijołek" />
      <span className="absolute bottom-0 left-1/2 w-4/5 h-1 bg-gradient-to-r from-orange-600 to-orange-400 inline-block -translate-x-1/2"></span>
    </div>
  );
};
