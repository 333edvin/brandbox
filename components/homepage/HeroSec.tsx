'use client'
import Image from "next/image"
import { Montserrat_Alternates} from "next/font/google";
// import { Bebas_Neue} from "next/font/google";
import TextReveal from "../animations/textReveal";
import OpacityReveal from "../animations/opacityReveal";
import  Link  from 'next/link';

const MontserratAlternates = Montserrat_Alternates({
    weight: ["100", "200", "400", "700"],
    subsets: ['cyrillic'],
  })
  // const BebasNeue = Bebas_Neue({
  //   weight: ["400"],
  //   subsets: ['latin'],
  // })
  

export const Hero = () =>{
    return(
        <div className="relative  mb-20 md:mb-0">
          <Image src='/images/bg-svg.svg' fill alt='bg-svg' className="object-cover"/>
      <div className=" w-full h-full flex items-center justify-center mt-14">
        <div className="absolute top-10 ">
            <TextReveal >
                    <h1 className={` py-5 text-[6rem] md:text-[11.8rem] font-bold text-[#FFEA00]  leading-[3.5rem] md:leading-none  z-0 text-gradient ${MontserratAlternates.className}`}>
                      BRAND
                      <span className="block md:hidden">
                        <br />
                      </span>
                      BOX
                    </h1>
            </TextReveal>
            <TextReveal >

                  <h1 className={`absolute top-0 py-5  text-[6rem] md:text-[11.8rem] font-bold text-[#FFEA00]  leading-[3.5rem] md:leading-none  z-20 outline-text   ${MontserratAlternates.className}`}>
                    BRAND
                    <span className="block md:hidden">
                      <br />
                    </span>
                    BOX
                  </h1>
          </TextReveal>
          <TextReveal >
          <p className={` text-2xl md:text-5xl mx-2 tracking-widest`}>FITNESS</p>
          </TextReveal> 
        </div>

        <div className=" md:flex-1 flex justify-end md:justify-center z-10 ">
          <Image
            src="/images/muscle.png"
            alt="Hero"
            width={500}
            height={500}
            className="object-cover transform translate-x-14 translate-y-16 md:translate-x-0 md:translate-y-0"
          />
        </div>
      </div>

      <div className="absolute  -bottom-16 md:bottom-48  left-5 md:left-24 z-20  ">
        <div className="mr-10">
            <TextReveal >
                    <p className="text-white max-w-lg text-xs md:text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s.
                    </p>
            </TextReveal>
        <div className="flex flex-row justify-between ">
          <OpacityReveal>
          <Link href="https://wa.me/1XXXXXXXXXX?" target="_blank">
        <button className="mt-6 px-3 py-2 md:px-6 md:py-3 text-[#FFEA00] border border-[#FFEA00] font-semibold hover:text-black hover:bg-[#FFEB22] hover:border hover:border-black transition">
          JOIN NOW
        </button>
          </Link>
          </OpacityReveal>
        {/* <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
          <i className="fas fa-play text-yellow-400 text-2xl"></i>
        </button> */}
        </div>
        </div>
      
      </div>
            </div>
    )
}