"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

export const HoverEffect = ({
  items,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.title + idx}
          className="relative group block p-2 h-full w-full"
        >
          <motion.div
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 h-full w-full p-8"
          >
            <div className="relative z-10">
              <div className="text-xl font-bold text-zinc-100 mb-2">
                {item.title}
              </div>
              <div className="text-sm text-zinc-400">{item.description}</div>
            </div>
            <Background />
          </motion.div>
        </a>
      ))}
    </div>
  );
};

const Background = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}; 