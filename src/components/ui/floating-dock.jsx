"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../../utils/cn";

export const FloatingDock = ({ 
  items, 
  className, 
  mobileClassName 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className={cn(
        "fixed bottom-4 inset-x-0 w-fit mx-auto rounded-2xl border border-white/[0.2] bg-black/[0.8] backdrop-blur-md p-2 flex items-center justify-center gap-4",
        className,
        mobileClassName
      )}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {items.map((item, idx) => (
        <a
          key={item.title}
          href={item.href}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.title}
          </span>
          <motion.div
            className="w-10 h-10 p-2 rounded-full hover:bg-white/20 transition-colors"
            animate={{
              scale: hoveredIndex === idx ? 1.15 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
          </motion.div>
        </a>
      ))}
    </motion.div>
  );
}; 