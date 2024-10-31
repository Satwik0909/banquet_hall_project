"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const [scope, animate] = React.useState();
  React.useEffect(() => {
    animate();
  }, [scope]);

  const renderWords = () => {
    return (
      <motion.div className="inline">
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.split("").map((char, index) => (
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
      />
    </div>
  );
}; 