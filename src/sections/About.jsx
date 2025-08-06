"use client";

import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import ResumeSection from "../components/ResumeSection";
import { AnimatedTechStack } from "../components/AnimatedTechStack";

const About = () => {
  const grid2Container = useRef();

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Coding perspective"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Ansh Kumar Nimboria</p>
            <p className="subtext">
              I'm a final-year B.Tech Computer Science student passionate 
              about building innovative tech solutions, with a strong interest in 
              machine learning, deep learning, and full-stack development.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE WITH PURPOSE
            </p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Deep Learning" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Well-structured" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", top: "30%", left: "70%" }} text="Code with Intent" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Train-Test-Evaluate" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="AI-Powered" containerRef={grid2Container} />
            <Card style={{ rotate: "-10deg", top: "25%", left: "60%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/blazor-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-10deg", top: "0%", left: "88%" }} image="assets/logos/python-logo.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-5deg", top: "80%", left: "65%" }} image="assets/logos/tensorflow-Photoroom.png" containerRef={grid2Container} />
            <Card style={{ rotate: "5deg", top: "85%", left: "75%" }} image="assets/logos/react-logo.png" containerRef={grid2Container} />
            <Card style={{ rotate: "10deg", top: "70%", left: "85%" }} image="assets/logos/node.js-logo.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-20deg", top: "35%", left: "10%" }} image="assets/logos/git-logo.png" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Delhi (IST, GMT+5:30), and available for both hybrid and remote collaboration across World.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Ready to build the next big thing? Let's collaborate and transform your ideas into cutting-edge solutions.
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack */}
        <div className="grid-default-color grid-5 relative p-4 md:col-span-6">
          <p className="headtext z-10">Tech Stack</p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 w-full h-full">
            <div className="w-full md:w-1/2 h-[18rem] overflow-hidden">
              <AnimatedTechStack />
            </div>
            <div className="w-full md:w-1/2 relative h-[18rem] -mt-4">
              <Frameworks />
            </div>
          </div>
        </div>

        {/*  Grid 6: Resume Section styled in grid box */}
        <div className="grid-default-color grid-6 md:col-span-6 p-6 flex flex-col items-center justify-center gap-6 rounded-xl transition-transform duration-300 hover:scale-[1.015] ">
          <ResumeSection />
        </div>

      </div>
    </section>
  );
};

export default About;

