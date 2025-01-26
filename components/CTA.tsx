import Image from "next/image";

export const CallToAction = () => {
    return (
      <section className="relative bg-black text-white py-5 flex justify-center mb-10">
        <div className="mx-0 md:mx-20">
        <Image src='/images/cta.svg' width={1000} height={300} alt="cta" className="w-full h-52 md:h-full object-cover md:object-contain "/>
        </div>
        <div className="absolute top-16 md:gap-10 flex flex-col  text-black    max-w-4xl m-5">
          <h2 className="text-sm md:text-2xl p-4 md:p-8 font-semibold">
            Join our gym today and achieve your fitness goals with state-of-the-art equipment and expert trainers.
          </h2>
          <div className="flex justify-end ">
          <button className="bg-black text-sm md:text-xl p-4 md:p-10 text-[#FFEA00] border border-[#FFEA00] font-semibold hover:text-black hover:bg-[#FFEB22] hover:border hover:border-black transition">
            JOIN NOW
          </button>
          </div>
        </div>
      </section>
    );
  };
  