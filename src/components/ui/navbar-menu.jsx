"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

export const Menu = ({ children, setActive }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:border-white/[0.2] bg-white dark:bg-black shadow-input flex justify-center space-x-4 px-8 py-4">
      {children}
    </nav>
  );
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div className="relative group">
      <motion.p
        onHoverStart={() => setActive(item)}
        className="cursor-pointer text-black dark:text-white"
      >
        {item}
      </motion.p>
      {active === item && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-4 min-w-[200px]"
          >
            {children}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export const HoveredLink = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={cn(
        "text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        alt={title}
        className="h-12 w-12 rounded-lg object-cover"
      />
      <div>
        <h3 className="font-medium text-black dark:text-white">{title}</h3>
        <p className="text-xs text-neutral-500">{description}</p>
      </div>
    </a>
  );
}; 