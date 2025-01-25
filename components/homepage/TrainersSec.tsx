import Image from "next/image";
import TextReveal from "../animations/textReveal";
import OpacityReveal from "../animations/opacityReveal";
import CardReveal from "../animations/cardReveal";
import {FaWhatsapp} from 'react-icons/fa'
export const TrainersSection = () => {
  return (
    <section className="relative bg-black text-white py-5 px-6 md:px-16 md:py-12 lg:px-24">
      {/* Background text */}
      <div className="absolute top-10 md:top-0 flex justify-center items-center">
        <TextReveal>
        <h1 className="text-gray-800 text-7xl md:text-[13rem] font-extrabold ">
          TRAINERS
        </h1>
        </TextReveal>
      </div>

      {/* Content */}
      <div className="relative  grid grid-cols-2 md:grid-cols-3 gap-8 items-center mt-16">
        {/* Left Trainer Image */}

        <div className="relative flex justify-center order-2 md:order-1">
          <OpacityReveal>
            <Image
              src="/images/trainer1.jpg"
              alt="Trainer 1"
              width={300}
              height={400}
              className="rounded-lg object-cover"
              />
              <div className="absolute bottom-2  left-2 md:left-5 text-white text-2xl  rounded-full p-2 md:p-4 border border-[#FFEA00]">
                <FaWhatsapp/>
              </div>
          </OpacityReveal>
        </div>

        {/* Center Content */}
        <div className="h-full order-1 md:order-2 col-span-2 md:col-span-1">
          <CardReveal >
            <div className="h-full flex flex-col justify-center items-center rounded-lg py-6 px-4  border border-[#FFEA00] ">
              <h2 className="text-xl md:text-2xl font-bold text-[#FFEA00]">
                MOST EXPERT TRAINERS
              </h2>
              <button className="mt-4 bg-[#FFEA00] text-black font-semibold py-2 px-6 hover:text-[#FFEA00] hover:bg-black hover:border hover:border-[#FFEA00] transition">
                CONTACT NOW
              </button>
            </div>
          </CardReveal>
        </div>


        {/* Right Trainer Image */}
        <div className="relative flex justify-center order-3 md:order-3">
        <OpacityReveal>
          <Image
            src="/images/trainer2.jpg" // Replace with your image path
            alt="Trainer 2"
            width={300}
            height={400}
            className="rounded-lg object-cover"
            />
            <div className="absolute bottom-2  left-2 md:left-5 text-white text-2xl  rounded-full p-2 md:p-4 border border-[#FFEA00]">
                <FaWhatsapp/>
              </div>
        </OpacityReveal>
        </div>
      </div>
    </section>
  );
};
