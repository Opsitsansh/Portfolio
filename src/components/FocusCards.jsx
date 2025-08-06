"use client";
import React, { useState } from "react";

const colors = [
  "bg-purple-600", "bg-green-500", "bg-yellow-500", "bg-pink-500",
  "bg-blue-600", "bg-teal-400", "bg-red-500", "bg-indigo-500"
];

const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className="relative h-[420px] transition-all duration-300 rounded-xl overflow-hidden bg-[#0f0f0f] shadow-lg"
    style={{
      filter: hovered !== null && hovered !== index ? "blur(2px)" : "none",
      transform: hovered !== null && hovered !== index ? "scale(0.98)" : "scale(1)"
    }}
  >
    <img
      src={card.image}
      alt={card.title}
      className="absolute w-full h-full object-cover inset-0"
    />
    <div
      className="absolute inset-0 bg-black/60 p-5 flex flex-col justify-end transition-opacity duration-300"
      style={{ opacity: hovered === index ? 1 : 0 }}
    >
      <h3 className="text-white text-[22px] font-bold leading-snug">{card.title}</h3>
      <p className="text-gray-300 text-sm">{card.organization}</p>
      <p className="text-gray-400 text-sm mb-2">{card.year}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {card.skills.map((skill, i) => (
          <span
            key={skill}
            className={`px-2 py-1 text-xs text-white rounded hover:scale-105 transition-transform duration-200 ${colors[i % colors.length]}`}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <a
          href={card.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 font-semibold underline text-base hover:text-red-500 hover:scale-105 transition-all duration-200"
        >
          View Certificate
        </a>
      </div>
    </div>
  </div>
));

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

