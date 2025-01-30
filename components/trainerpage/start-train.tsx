'use client'
import Image from "next/image";

export const StartTraining = () => {
    return (
        <div className="flex flex-col justify-center items-center uppercase px-4 md:px-12 lg:px-20 text-center space-y-6">
            <p className="text-3xl md:text-4xl font-bold">Start Training <br /> With Me</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { src: "/images/special2.png", label: "Online Classes" },
                    { src: "/images/special2.png", label: "Personal Classes" },
                    { src: "/images/special2.png", label: "Group Classes" }
                ].map((item, index) => (
                    <div key={index} className={`${index === 1 ? "md:mt-10" : "md:mt-0"} group flex flex-col items-center space-y-3`}>
                        <Image 
                            src={item.src} 
                            width={300} 
                            height={500} 
                            alt={item.label} 
                            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm"
                        />
                        <p className="text-xl group-hover:text-[#FFEA00] transition-colors">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}