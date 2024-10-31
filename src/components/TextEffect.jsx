"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [
  {
    text: "Create",
    className: "text-white",
  },
  {
    text: "your",
    className: "text-white",
  },
  {
    text: "dream",
    className: "text-blue-500",
  },
  {
    text: "celebration",
    className: "text-blue-500",
  },
  {
    text: "with",
    className: "text-white",
  },
  {
    text: "us.",
    className: "text-pink-500",
  },
];

export const TextEffect = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words} />
      <div className="mt-8">
        <TextGenerateEffect 
          words="Transform your special moments into extraordinary memories with our luxurious banquet halls."
          className="text-gray-300 text-xl text-center max-w-2xl"
        />
      </div>
    </div>
  );
}; 