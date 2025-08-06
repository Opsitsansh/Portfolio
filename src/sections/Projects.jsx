import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { ComicText } from "../components/magicui/comic-text";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}

      {/* 🔥 GitHub CTA Section */}
      <div className="mt-16 text-center flex flex-col items-center justify-center gap-4">
        <ComicText fontSize={3}>Checkout more projects on GitHub!</ComicText>

        <a
          href="https://github.com/Opsitsansh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InteractiveHoverButton>
            • Visit GitHub
          </InteractiveHoverButton>
        </a>
      </div>
    </section>
  );
};

export default Projects;
