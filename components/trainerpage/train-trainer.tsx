'use client'
import Image from "next/image";

export const TrainTrainer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  md:px-12 lg:px-20"> 
            {/* Image Section */}
            <div className="flex gap-5 justify-center md:justify-start ">
                <Image 
                    src='/images/trainer1.jpg' 
                    width={300} 
                    height={200} 
                    alt="trainer"  
                    className="object-cover w-40 h-42 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg shadow-lg" 
                />
                <Image 
                    src='/images/guinness.jpg' 
                    width={300} 
                    height={200} 
                    alt="trainer"  
                    className="object-cover w-40 h-42 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-lg shadow-lg" 
                />
            </div>
            
            {/* Text Section */}
            <div className="relative flex flex-col justify-end items-end text-sm md:text-lg lg:text-xl  ">
                <div className=" outline-txt-bw ">
                    <p className="text-[10rem] md:text-[20rem] lg:text-[25rem] font-bold leading-none">01</p>
                </div>
                <p className="absolute top-10 md:top-52  z-10  leading-relaxed max-w-lg text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptate. Ut, officiis sequi placeat cumque modi incidunt molestias enim? Dicta laudantium illum minus recusandae tempora ut voluptatem dignissimos iure at.
                </p>
            </div>
        </div>
    );
}
