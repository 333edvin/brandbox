'use client'
import PageTransition from "@/components/animations/pageTransition";
import { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    // Set a timer to remove the transition after it finishes
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="relative h-screen ">
      {showTransition && <PageTransition />}
      {!showTransition && children}
    </div>
  );
}
