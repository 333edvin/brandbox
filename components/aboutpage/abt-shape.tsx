'use client';

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Item {
  number: string;
  title: string;
  content: string;
}

const items: Item[] = [
  {
    number: "01",
    title: "WHAT WE HAVE TO OFFER?",
    content:
      "Docendi minimum an vel, ei ignota suscipit vel. Ex tantas docendi repudiare per, sed summo dictas fierent in. Legimus noluisse duo et, ea mei nostrud alterum patrioque.",
  },
  { 
    number: "02",
    title: "HEALTHY EATING TIPS",
    content: "Docendi minimum an vel, ei ignota suscipit vel. Ex tantas docendi repudiare per, sed summo dictas fierent in. Legimus noluisse duo et, ea mei nostrud alterum patrioque." 
  },
  { 
    number: "03", 
    title: "CHANGE YOUR NUTRITION", 
    content: "Docendi minimum an vel, ei ignota suscipit vel. Ex tantas docendi repudiare per, sed summo dictas fierent in. Legimus noluisse duo et, ea mei nostrud alterum patrioque."
  },
  { 
    number: "04", 
    title: "PROTEIN PACKED DISHES", 
    content: "Docendi minimum an vel, ei ignota suscipit vel. Ex tantas docendi repudiare per, sed summo dictas fierent in. Legimus noluisse duo et, ea mei nostrud alterum patrioque." 
  },
];

export const AboutShape: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div className="space-y-10">
        <div className="relative uppercase">
          <p className="text-8xl outline-txt-bw font-bold">Shape</p>
          <p className="absolute inset-0 flex justify-center items-center text-2xl font-semibold mt-2">
            Better Habit&apos;s
          </p>
          <p className="absolute top-0 left-0 md:left-16 text-6xl font-light">+</p>
        </div>
        <p className="text-sm ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam aliquid qui itaque harum a. Consectetur possimus aperiam maxime, modi reiciendis unde quasi illo doloremque obcaecati voluptatibus? Dicta eos reprehenderit earum.
        </p>

        <button className="border p-5 rounded-full">View More</button>
      </div>

      <div className="max-w-xl mx-auto p-4 text-white bg-black">
        {items.map((item) => (
          <div key={item.number} className="border-b border-gray-700">
            <button
              className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-800 transition-all"
              onClick={() => setOpenIndex(openIndex === Number(item.number) ? null : Number(item.number))}

            >
              <span className="flex items-center gap-2 my-3">
                <span className="text-gray-400">{item.number}</span>
                <span className="font-semibold">{item.title}</span>
              </span>
              <ChevronRight
                className={`transition-transform ${
                  openIndex === Number(item.number) ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === Number(item.number) ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-400">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
