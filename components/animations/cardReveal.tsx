"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const CardReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      
      
      scale: 1,    // Add scale here
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <motion.div
      variants={lineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default CardReveal;
