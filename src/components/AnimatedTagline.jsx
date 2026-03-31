import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AnimatedTagline = ({ text }) => {
  // CHANGE 1: Split the text into an array of words
  const words = text.split(" ");

  // Animation variants for the container and each word
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      // Adjusted stagger speed for words
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      // CHANGE 2: Updated padding and border-radius to better support wrapped text
      className="px-6 sm:px-8 py-4 rounded-3xl bg-gradient-to-r from-brand-orange via-brand-gold to-brand-glow 
                 animate-gradient-x shadow-lg shadow-brand-orange/30"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.h2
        // CHANGE 3: Added responsive font sizes
        className="text-center font-semibold text-brand-dark tracking-wide
                   text-sm sm:text-base md:text-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {/* CHANGE 4: Map over words instead of letters, adding a space after each */}
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block" // Ensures each word is treated as an animatable block
          >
            {word}
            {"\u00A0"}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
};

export default AnimatedTagline;
