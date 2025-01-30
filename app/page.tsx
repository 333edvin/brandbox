'use client'
import { Hero } from "@/components/homepage/HeroSec";
import { SpecialProgram } from "@/components/homepage/Special";
import { FeaturesSection } from "@/components/homepage/FeaturesSec";
import { TrainersSection } from "@/components/homepage/TrainersSec";
import { About } from "@/components/homepage/About";


export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      {/* <Brands/> */}
      <About/>
      {/* <SpecialProgram/> */}
      <FeaturesSection/>
      <TrainersSection/>
      
      
    </div>
  );
}
