"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

export const AuroraBackground = ({
  children,
  className,
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-black",
        containerClassName
      )}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{
            scale: 1.5,
            opacity: 0.7,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-50"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl" />
          </div>
        </motion.div>
      </div>
      
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
}; 