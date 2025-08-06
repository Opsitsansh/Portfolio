import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = [
    "Model-driven",
    "Production-grade", 
    "Inference-ready",
    "Autonomous",
    "Scalable",
    "GPU-accelerated",
    "Latency-tuned",
    "Containerized",
    "Impactful",
    "ML-native"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
      {/* Desktop View */}
      <motion.div 
        className="flex-col hidden md:flex c-space"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl font-bold text-neutral-300 mb-1"
          variants={itemVariants}
        >
          Hi, I'm ANSH
        </motion.h1>
        
        <motion.p 
          className="text-3xl font-bold text-neutral-300 mb-2"
          variants={itemVariants}
        >
          AI/ML Engineer
        </motion.p>
        
        <motion.p 
          className="text-3xl font-bold text-neutral-300 mb-3"
          variants={itemVariants}
        >
          Specialized in
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <FlipWords 
            words={words} 
            className="font-black text-white text-7xl leading-none tracking-tight"
          /> 
        </motion.div>
        
        <motion.p 
          className="text-3xl font-bold text-neutral-300"
          variants={itemVariants}
        >
          ML Engineering & Deployment
        </motion.p>
      </motion.div>

      {/* Mobile View */}
      <motion.div 
        className="flex flex-col md:hidden px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-2xl font-bold text-neutral-300 mb-2"
          variants={itemVariants}
        >
          Hi, I'm ANSH
        </motion.p>
        
        <motion.p 
          className="text-2xl font-bold text-neutral-300 mb-1"
          variants={itemVariants}
        >
          AI/ML Engineer
        </motion.p>
        
        <motion.p 
          className="text-2xl font-bold text-neutral-300 mb-4"
          variants={itemVariants}
        >
          Specialized in
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <FlipWords
            words={words}
            className="font-black text-white text-5xl leading-none tracking-tight"
          />
        </motion.div>
        
        <motion.p 
          className="text-2xl font-bold text-neutral-300"
          variants={itemVariants}
        >
          ML Engineering & Deployment
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroText;