"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../../utils/cn";

export const Carousel = ({ items, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={cn("h-full flex flex-col gap-4", className)}>
      <div className="relative overflow-hidden h-full">
        <motion.div
          animate={{ x: `-${selectedIndex * 100}%` }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          {items}
        </motion.div>
      </div>
      <div className="flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Card = ({ card, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      className="shrink-0 w-full px-4"
    >
      <div className="bg-black/50 backdrop-blur-sm rounded-3xl overflow-hidden">
        <div className="p-8">
          <p className="text-sm text-white/60">{card.category}</p>
          <h3 className="text-2xl font-bold text-white mt-2">{card.title}</h3>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="w-full h-[300px] object-cover"
        />
        <div className="p-8">{card.content}</div>
      </div>
    </motion.div>
  );
}; 