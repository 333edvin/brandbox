'use client'
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50"
      
    >
      <div className="relative w-full h-full bg-black flex flex-col justify-center items-center text-white ">
        <div className="progress ">
            <div className="overlay"></div>
            <div className="left"></div>
            <div className="right"></div>
        </div>
        <p className="absolute text-6xl  z-40">BRANDBOX</p>
      </div>
    </motion.div>
  );
};

export default PageTransition;
