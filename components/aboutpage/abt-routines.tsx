'use client'

import Image from "next/image"

const brands = [
    { id: 1, src: "/images/adidas.png", alt: "Adidas" },
    { id: 2, src: "/images/adidas.png", alt: "Nike" },
    { id: 3, src: "/images/adidas.png", alt: "Puma" },
    { id: 4, src: "/images/adidas.png", alt: "Reebok" },
  ];

export const AboutRoutines = () => {
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {brands.map((brand) => (
          <div key={brand.id} className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src={brand.src}
              fill
              className="rounded-full object-contain"
              alt={brand.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    )
}