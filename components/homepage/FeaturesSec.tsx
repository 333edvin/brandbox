'use client'
import Image from "next/image";
import CardReveal from "../animations/cardReveal";

const data = [
  {
    id:1,
    name:"PERSONAL TRAINER",
    img:"/images/personal-trainer.png",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    active:"#FFEA00"
  },
  {
    id:2,
    name:"EXPERT TRAINER",
    img:"/images/expert-trainer.png",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    active:"#252525"
  },
  {
    id:3,
    name:"FLEXIBLE TIME",
    img:"/images/flexible-time.png",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    active:"#252525"
  },
  {
    id:4,
    name:"UNISEX",
    img:"/images/unisex.png",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    active:"#252525"
  }
]
export const FeaturesSection = () => {

  return (
    <section className="bg-black text-white py-5 px-6 md:px-16 lg:px-24">
      <p className="text-4xl font-bold my-10">
        <span className="text-[#FFEA00]">
        FEEL GREAT.
        </span>BODY AND MIND
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Features List */}
        <div className="grid grid-cols-2 order-2 md:order-1 gap-2 p-0 md:py-5">
        {data.map((item) => (
          <div key={item.id}>
          <CardReveal>
          <div className={` bg-[${item.active}]  p-3 md:p-5 rounded flex flex-col justify-between`} >
              <Image src={item.img} width={50} height={50} alt="" className="rounded-full my-2 "/>
              <div className={`space-y-3 ${item.active === "#FFEA00" ? "text-black" : "text-white"}`}>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs md:text-sm">{item.desc}</p>
                <div className="flex flex-row justify-between items-center">
                <p>lorem lorem</p>
                {
                  item.active === "#FFEA00"? (

                    <Image src='/images/svg1.svg' width={50} height={50} alt="svg" className={`rounded-full w-5 h-5 md:w-8 md:h-8`}/>
                  ) :(
                    <Image src='/images/svg2.svg' width={50} height={50} alt="svg" className={`rounded-full w-5 h-5 md:w-8 md:h-8`}/>

                  )
                }
                </div>
              </div>
          </div>
          </CardReveal>
          </div>

        ))
          }
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center order-1 md:order-2 p-0 md:p-5 h-full">
          <CardReveal>

          <Image
            src="/images/features.jpg" // Replace with your actual image path
            alt="Gym Training"
            width={500}
            height={500}
            className="rounded-lg w-96 h-80 md:w-full md:h-full object-cover"
            />
            </CardReveal>
        </div>
      </div>
    </section>
  );
};
