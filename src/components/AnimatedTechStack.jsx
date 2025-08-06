"use client";
import { AnimatedList, AnimatedListItem } from "./magicui/animated-list";

const customTechStack = [
  {
    name: "Programming Languages",
    description: "Python, R, HTML, CSS, JS and React",
    icon: "🤖",
    color: "#F97316",
  },
  {
    name: "AI & ML",
    description: "Deep Learning, Computer Vision, NLP",
    icon: "🧠",
    color: "#6366F1",
  },
  {
    name: "Framework & Libraries",
    description: "TensorFlow, Keras, NumPy, Pandas",
    icon: "🎯",
    color: "#60A5FA",
  },
  {
    name: "Data Viz",
    description: "Matplotlib, Seaborn",
    icon: "📊",
    color: "#34D399",
  },
  {
    name: "Backend / API",
    description: "FastAPI, Node.js, REST APIs",
    icon: "🛠️",
    color: "#F472B6",
  },
  {
    name: "Tools & Platform",
    description: "Git, GitHub, VS Code, Jupyter notebook, Pycharm",
    icon: "🧰", // Updated emoji for tools
    color: "#A78BFA",
  },
];

export function AnimatedTechStack() {
  return (
    <AnimatedList delay={2000}> {/* Slower animation (3 seconds) */}
      {customTechStack.map((tech, index) => (
        <AnimatedListItem key={index}>
          <div
            className="flex flex-col w-full rounded-xl border bg-black/5 p-4 backdrop-blur-sm transition-all hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
            style={{
              borderColor: tech.color,
              color: "white",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="text-3xl"
                style={{
                  backgroundColor: tech.color,
                  borderRadius: "9999px",
                  padding: "0.3rem",
                }}
              >
                {tech.icon}
              </div>
              <p className="text-md font-semibold">{tech.name}</p>
            </div>
            <p className="text-gray-400 text-sm ml-12 mt-1">{tech.description}</p>
          </div>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}


