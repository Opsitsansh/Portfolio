"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function ComicText({ children, className = "", style = {}, fontSize = 5 }) {
  if (typeof children !== "string") {
    throw new Error("children must be a string");
  }

  const dotColor = "#EF4444";
  const backgroundColor = "#FACC15";

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`select-none text-center ${className}`}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        WebkitTextStroke: `${fontSize * 0.35}px #000000`,
        transform: "skewX(-10deg)",
        textTransform: "uppercase",
        filter: `
          drop-shadow(5px 5px 0px #000000) 
          drop-shadow(3px 3px 0px ${dotColor})
        `,
        backgroundColor: backgroundColor,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{
        opacity: 1,
        scale: isHovered ? 1.1 : 1,
        rotate: isHovered ? -2 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
}
