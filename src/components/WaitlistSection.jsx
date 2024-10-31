"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const WaitlistSection = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join Our Exclusive List
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Be the first to know about special offers, exclusive events, and VIP experiences at our luxury venues. 
          Whether you're planning a wedding, corporate event, or special celebration, we'll keep you updated with 
          the latest packages and availability.
        </p>
        <div className="flex gap-2 mt-4 relative z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-purple-500 w-full bg-neutral-950 placeholder:text-neutral-700 text-white px-4 py-2"
          />
          <button className="px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition">
            Subscribe
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default WaitlistSection; 