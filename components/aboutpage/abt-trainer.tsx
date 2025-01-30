'use client'

import Image from "next/image"

export const MeetTrainer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> 
            {/* Text Section */}
            <div className="space-y-10 flex flex-col justify-center items-start md:ml-10 order-2 md:order-1">
                <div className="relative uppercase w-full">
                    <p className="text-7xl md:text-8xl font-bold outline-txt-bw ">Trainer</p>
                    <p className="absolute inset-0 flex justify-center items-center text-2xl font-semibold w-full mt-2">Get a trainer</p>
                    <p className="absolute top-0 left-0 md:left-10 text-6xl font-light ">+</p>
                </div>
                <div className="space-y-4 text-sm md:text-lg">
                    <p>✅ Personalized training plans</p>
                    <p>✅ Professional guidance & support</p>
                    <p>✅ Tailored nutrition advice</p>
                    <p>✅ Achieve your fitness goals</p>
                </div>
                <button className="border border-white px-6 py-3 rounded-full  hover:bg-gray-800 hover:text-white transition">
                    View More
                </button>
            </div>
            
            {/* Image Section */}
            <div className="relative flex justify-center items-center order-1 md:order-2">
                <Image 
                    src="/images/trainer1.jpg" 
                    alt="trainer" 
                    width={400} 
                    height={400} 
                    className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
                />
                <p className="absolute bottom-2 left-2 md:bottom-4 md:left-4 uppercase text-2xl md:text-5xl font-bold  p-2 ">
                    Meet <br/> George
                </p>
            </div>
        </div>
    )
}
