import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  // Create unique animation variants for each card
  const floatingVariants = {
    floating: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      rotate: style?.rotate ? [
        parseFloat(style.rotate.replace('deg', '')),
        parseFloat(style.rotate.replace('deg', '')) + 5,
        parseFloat(style.rotate.replace('deg', ''))
      ] : [0, 5, 0],
      transition: {
        duration: 3 + Math.random() * 2, // Random duration between 3-5 seconds
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: Math.random() * 2 // Random delay to stagger animations
      }
    }
  };

  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      variants={floatingVariants}
      animate="floating"
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileDrag={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      variants={floatingVariants}
      animate="floating"
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileDrag={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    >
      {text}
    </motion.div>
  );
};

export default Card;