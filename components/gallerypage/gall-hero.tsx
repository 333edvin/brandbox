'use client'
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });
export const GalleryHero = () => {
    return (
        <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] xl:h-[50vh]">
            {/* Container for the image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/gallery.jpg"
                    alt="Gym Gallery"
                    fill
                    className="object-cover w-full h-full "
                    priority // Optional: if this image is above the fold
                />
            </div>

            {/* Overlay content */}
            <div className={`absolute inset-0 flex flex-col justify-between items-center text-center text-white bg-black bg-opacity-50 ${anton.className}`}>
                <div className={`mt-10 `}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-4">Gallery</h1>
                <p className="text-sm sm:text-sm md:text-xl lg:text-2xl max-w-2xl px-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                </div>
                <p>Home {'>>'} Gallery </p>
            </div>
        </section>
    );
};