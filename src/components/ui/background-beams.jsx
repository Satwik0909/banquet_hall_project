"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null);

  useEffect(() => {
    const moveBeams = (e) => {
      if (!beamsRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = beamsRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      beamsRef.current.style.setProperty("--x", x.toFixed(2));
      beamsRef.current.style.setProperty("--y", y.toFixed(2));
    };

    window.addEventListener("mousemove", moveBeams);
    return () => window.removeEventListener("mousemove", moveBeams);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden [--x:0.5] [--y:0.5]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,182,255,0.1)_10%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(100,200,255,0.1)_10%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.1)_0%,transparent_60%)]" />
    </div>
  );
}; 