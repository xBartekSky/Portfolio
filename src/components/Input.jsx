import React from "react";

export const Input = ({
  placeholder = "Value",
  longtext = false,
  onchange,
  value,
}) => {
  return (
    <>
      {longtext ? (
        <textarea
          placeholder={placeholder}
          value={value}
          className="w-[95%] h-32 bg-slate-800 rounded-xl text-gray-300 border border-transparent p-2 outline-none transition-all duration-300 focus:border-orange-400 resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400"
          onChange={onchange}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className="w-[95%] h-10 bg-slate-800 rounded-xl text-gray-300 border border-transparent p-2 outline-none transition-all duration-300 focus:border-orange-400"
          onChange={onchange}
        />
      )}
    </>
  );
};
