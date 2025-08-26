"use client";

import { FlipText } from "../components/magicui/Flip-text";

const ResumeSection = () => {
  return (
    <div className="col-span-6 bg-gradient-to-br from-[#1f2235] to-[#141627] p-6 flex flex-col items-center justify-center gap-6 rounded-xl shadow-lg">
      
      {/* Heading with Poppins font */}
      <h2
        className="text-4xl sm:text-5xl font-bold tracking-[0.25em] text-white"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <FlipText>RESUME</FlipText>
      </h2>

      {/* Description */}
      <p className="text-center text-sm sm:text-base text-gray-300 max-w-xl">
        Explore my qualifications, experience, and achievements in detail.
        You can view the PDF online or download it for later.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* View Resume */}
        <a
          href="/Ansh_Resume_v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium transition"
        >
          📖 View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/Ansh_Resume_v2.pdf"
          download = "Ansh_Resume_v2.pdf"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium transition"
        >
          📥 Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;


