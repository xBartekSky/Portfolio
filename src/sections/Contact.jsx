import React from "react";
import { Input } from "../components/Input";
import { ContactForm } from "../components/ContactForm";
import { GradientText } from "../components/Gradient";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:w-4/5 h-screen flex flex-col items-center gap-5 justify-center"
    >
      <div className="w-full flex justify-center items-center gap-2 leading-[1.5]">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-400">
          Contact
        </h1>
        <GradientText label="with me" />
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="text-lg text-gray-400 text-center">
          Got an idea? Let’s collaborate and turn it into something brilliant.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};
