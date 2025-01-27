'use client'
import Image from "next/image"

export const Brands = ()=>{
    return(
        <div className="flex flex-row justify-between items-center bg-white mx-5 p-5 md:p-0 md:mx-20 rounded mt-28 md:mt-0">
            <Image src='/images/adidas.png' alt='' width={100} height={100} className="w-12 h-12 md:w-auto md:h-auto "/>
            <Image src='/images/adidas.png' alt='' width={100} height={100} className="w-12 h-12 md:w-auto md:h-auto "/>
            <Image src='/images/adidas.png' alt='' width={100} height={100} className="w-12 h-12 md:w-auto md:h-auto "/>
            <Image src='/images/adidas.png' alt='' width={100} height={100} className="w-12 h-12 md:w-auto md:h-auto "/>
            <Image src='/images/adidas.png' alt='' width={100} height={100} className="w-12 h-12 md:w-auto md:h-auto "/>
            <Image src='/images/adidas.png' alt='' width={100} height={100} className="w-12 h-12 md:w-auto md:h-auto "/>
        </div>
    )
}