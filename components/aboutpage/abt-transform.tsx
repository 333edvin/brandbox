'use client'
import Image from 'next/image'

export const AboutTransform = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-1 md:px-8 lg:px-16">
            {/* Image Section */}
            <div className='flex gap-4 justify-center md:justify-start'>
                <Image 
                    src="/images/special1.jpg" 
                    className='w-[40vw] h-[40vh] md:w-[18vw] md:h-[50vh] rounded-2xl object-cover' 
                    alt='transform1' 
                    width={300} 
                    height={500} 
                />
                <Image 
                    src="/images/special1.jpg" 
                    className='w-[40vw] h-[40vh] md:w-[18vw] md:h-[50vh] rounded-2xl object-cover' 
                    alt='transform2' 
                    width={300} 
                    height={500} 
                />
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-6 text-center md:text-left p-4 md:p-0">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Transform your mindset, transform your body
                    </h1>
                    <p className="text-sm md:text-lg text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi et dicta debitis voluptate hic obcaecati culpa porro aut aliquid maxime excepturi blanditiis nulla fugit sint, repellat, ad similique doloremque.
                    </p>
                </div>
                
                {/* Stats Section */}
                <div className="flex flex-row justify-center md:justify-between gap-6 md:gap-0">
                    <div className="text-center">
                        <p className='text-4xl md:text-6xl font-bold outline-text'>2+</p>
                        <p className='text-xs md:text-lg font-semibold text-gray-700'>Years</p>
                    </div>
                    <div className="text-center">
                        <p className='text-4xl md:text-6xl font-bold outline-text'>20+</p>
                        <p className='text-xs md:text-lg font-semibold text-gray-700'>Equipments</p>
                    </div>
                    <div className="text-center">
                        <p className='text-4xl md:text-6xl font-bold outline-text'>50+</p>
                        <p className='text-xs md:text-lg font-semibold text-gray-700'>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
