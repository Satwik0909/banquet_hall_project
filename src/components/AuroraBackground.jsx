"use client";
import React from "react";
import { cn } from "../utils/cn";

export const AuroraBackground = ({
  children,
  className,
  containerClassName,
  size = 350,
  position = "center",
  blur = 100,
  intensity = 20,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden opacity-80",
          className
        )}
      >
        <div
          className={cn(
            "absolute -inset-[10px]",
            position === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            position === "top" && "top-0 left-1/2 -translate-x-1/2",
            position === "bottom" && "bottom-0 left-1/2 -translate-x-1/2",
          )}
          style={{
            width: size,
            height: size,
            filter: `blur(${blur}px)`,
            opacity: intensity / 100,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-aurora" />
        </div>
      </div>
      {children}
    </div>
  );
}; 