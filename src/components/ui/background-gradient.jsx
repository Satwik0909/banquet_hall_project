"use client";
import { motion, useMotionValue } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("relative group/card", containerClassName)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={cn(
          "absolute -inset-px rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-lg transition duration-1000",
          className
        )}
        style={{
          translateX: mouseX,
          translateY: mouseY,
          rotate: animate ? 0 : 45,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
