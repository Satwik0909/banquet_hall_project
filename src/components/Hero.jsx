"use client";
import { motion } from "framer-motion";
import React from 'react';
import { TextEffect } from './TextEffect';
import { AuroraBackground } from './ui/aurora-background';
import { BackgroundGradient } from './ui/background-gradient';

const Hero = () => {
  return (
    <div id="home" className="relative z-10 min-h-screen">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 pt-24 min-h-screen"
        >
          <div className="text-4xl md:text-7xl font-bold text-white text-center bg-clip-text">
            Create Unforgettable Moments
          </div>
          
          <div className="font-light text-xl md:text-4xl text-neutral-200 py-4 text-center max-w-4xl">
            Transform your special occasions into extraordinary memories in our luxurious venues
          </div>

          <div className="mt-8 flex gap-4">
            <BackgroundGradient className="rounded-[20px]">
              <button className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-opacity-90 transition">
                Book Now
              </button>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-[20px]">
              <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-opacity-90 transition">
                Virtual Tour
              </button>
            </BackgroundGradient>
          </div>

          <TextEffect className="mt-12" />
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default Hero; 