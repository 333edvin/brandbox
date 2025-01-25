'use client'
import { motion } from "framer-motion";


const PageTransition = () => {
  return (
    <motion.div
      className="z-50"
      initial={{ opacity: 0, x: "100%" }}  // Start from the right (off-screen)
      animate={{ opacity: 1, x: 0 }}       // Slide in and fade in
      exit={{ opacity: 0, x: "-100%" }}    // Slide out to the left (off-screen)
      transition={{ duration: 1 }}          // Set the duration of the animation
    >
      <div className="w-full h-full bg-black flex justify-center items-center text-white">
            BRANDBOX
      </div>
    </motion.div>
  );
};

export default PageTransition;
