'use client'
import Image from "next/image";
import { Montserrat_Alternates} from "next/font/google";
import TextReveal from "../animations/textReveal";
import OpacityReveal from "../animations/opacityReveal";
import CardReveal from "../animations/cardReveal";

const MontserratAlternates = Montserrat_Alternates({
    weight: ["100", "200", "400", "700"],
    subsets: ['cyrillic'],
  })
  
export const SpecialProgram = () => {

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 lg:px-24 my-5">
      {/* Section Title */}
      <TextReveal>
      <h2 className={`text-center startxl text-2xl md:text-5xl  mb-8 ${MontserratAlternates.className}`}>
        OUR <span className="text-[#FFEA00]">SPECIAL</span> PROGRAM
      </h2>
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 flex  gap-2 items-center justify-center mt-5 md:mt-10">
  {/* Left Sidebar */}
  <div className=" flex flex-col md:flex-row  gap-2 items-center  ">
    {/* Rotated Text */}
    <CardReveal >
    <div className="block sm:hidden">
    <Image
      src="/images/mab-mobile.jpg"
      alt="Small Screen"
      width={400}
      height={400}
      className="rounded-lg object-cover"
    />
  </div>

  {/* Image for medium screens */}
  <div className="hidden md:block">
    <Image
      src="/images/mab.jpg"
      alt="Medium Screen"
      width={150}
      height={400}
      className="rounded-lg object-cover h-72"
    />
  </div>
      </CardReveal>
    
          {/* Images */}
    <div className="grid grid-cols-2 gap-2 ">

      <CardReveal>
        <Image
          src="/images/special1.jpg"
          alt="Mind and Body 1"
          width={400}
          height={400}
          className="rounded-lg object-cover h-72"
        />
      </CardReveal>
      <CardReveal>
        <Image
          src="/images/special2.png"
          alt="Mind and Body 2"
          width={400}
          height={400}
          className="rounded-lg object-cover h-72"
          />
    </CardReveal>
          </div>
  </div>

  {/* Right Content */}
  <div className="lg:ml-8 lg:flex-grow mt-10 md:mt-0">
    <OpacityReveal>
    <h3 className="text-2xl  font-bold mb-4">
      CLASSES WITH EXPERT TRAINERS
    </h3>
  
    <p className="text-gray-400 mb-6 ">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book.
    </p>
    <div className="flex gap-8">
      {/* Statistics */}
      <div className="text-start">
        <p className="text-[#FFEA00] text-4xl md:text-5xl font-bold">5+</p>
        <p className="text-gray-400 text-3xl outline-text spc">YEARS</p>
      </div>
      <div className="text-start">
        <p className="text-[#FFEA00] text-4xl md:text-5xl font-bold">20+</p>
        <p className="text-gray-400 text-3xl outline-text spc">EQUIPMENTS</p>
      </div>
    </div>
    </OpacityReveal>
  </div>
</div>

    </section>
  );
};
