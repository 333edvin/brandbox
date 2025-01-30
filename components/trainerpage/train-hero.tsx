'use client'
import Image from "next/image";

export const TrainHero = () => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-12 lg:px-20 gap-6"> 
            {/* Text Section */}
            <div className="font-bold uppercase text-3xl md:text-6xl leading-tight z-10 flex flex-col justify-center max-w-lg space-y-4">
                <p className="text-[#FFEA00] text-lg md:text-xl ">with George Franklin</p>
                <p className="">Train with the best personal trainer</p>
            </div>
            
            {/* Image Section */}
            <div className="flex justify-center md:justify-end z-0 my-6">
                <Image 
                    src='/images/features.jpg' 
                    width={450} 
                    height={150} 
                    alt="trainer" 
                    className="w-full md:w-auto max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg" 
                />
            </div>
            
            {/* Name Overlay */}
            <div className="absolute bottom-0 md:top-10 left-0 flex flex-row gap-4 md:gap-6 z-20 w-auto uppercase text-[5vh] md:text-6xl outline-txt-bw font-bold">
                <p>George</p>
                <p>Franklin</p>
            </div>
        </div>
    );
}