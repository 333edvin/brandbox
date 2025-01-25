"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.2, 
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%" },
};

const TextReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={textRevealVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div className="line" variants={lineVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextReveal;
