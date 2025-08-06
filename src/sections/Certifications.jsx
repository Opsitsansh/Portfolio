"use client";
import React from "react";
import certifications from "../constants/certifications";
import { FocusCards } from "../components/FocusCards";

const Certifications = () => {
  const cards = certifications.map((cert, index) => ({
    title: cert.title,
    organization: cert.organization,
    year: cert.year,
    image: cert.image,
    certificateUrl: cert.certificateUrl,
    skills: cert.skills,
  }));

  return (
    <div id="certifications" className="w-full min-h-screen pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-left">
          Certifications
        </h2>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default Certifications;






