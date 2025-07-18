import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { IoIosSend } from "react-icons/io";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const handlePost = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mdkdokvq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        phone: phoneNumber,
        message: desc,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
      setEmail("");
      setPhoneNumber("");
      setDesc("");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handlePost}
      className="w-4/5 lg:w-1/3 flex flex-col gap-10 items-center bg-slate-900 rounded-xl border-t-2 border-orange-400 p-5"
    >
      <Input
        placeholder="Email address"
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Phone number (optional)"
        value={phoneNumber}
        onchange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        longtext={true}
        placeholder="Tell about your project or idea..."
        value={desc}
        onchange={(e) => setDesc(e.target.value)}
      />
      <button
        type="submit"
        className="h-10 bg-orange-400 flex justify-center items-center p-2 rounded-lg text-white  text-xl"
      >
        <IoIosSend />
        Send Message
      </button>
      {status && (
        <p className="text-sm text-center text-green-500 font-semibold">
          {status}
        </p>
      )}
    </form>
  );
};
