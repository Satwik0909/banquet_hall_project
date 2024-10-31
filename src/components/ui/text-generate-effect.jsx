"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TextGenerateEffect = ({ words, className }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const text = words;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
      </motion.div>
    </div>
  );
}; 