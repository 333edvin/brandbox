'use client'
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative px-6 md:px-16 lg:px-24">
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 md:my-20">
        <div>
          <h6 className="text-sm font-semibold text-[#FFEA00] uppercase">Who We Are</h6>
          <p className="text-4xl font-bold ">
            <span className="outline-text">ELEVATE YOUR FITNESS</span> <br /> JOURNEY WITH US
          </p>
        </div>
        <div className="text-justify">
          <p className="text-gray-300 text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt quae alias quaerat quam ipsa 
            repudiandae, suscipit vitae consequuntur earum ut. Aut corrupti obcaecati delectus. Amet, quisquam in. 
            Voluptates, dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt quae alias 
            quaerat quam ipsa repudiandae, suscipit vitae consequuntur earum ut. Aut corrupti obcaecati delectus. Amet, 
            quisquam in. Voluptates, dolore.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative flex justify-center my-5">
        <div
          className="w-full max-w-7xl cursor-pointer relative"
          onClick={openModal}
        >
          {/* Image as placeholder for video */}
          <img
            src="/images/aboutImg.jpg"
            alt="Video Placeholder"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center bg-[#FFEA00] rounded-full p-5 md:p-10">
              <FaPlay className="text-xl md:text-2xl text-[#252525] ml-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full  ">
            <button
              className="absolute top-3 right-3 text-[#252525] hover:text-gray-700 bg-[#FFEA00] z-10 p-2 rounded-full"
              onClick={closeModal}
            >
              <IoClose/>
            </button>
            <video className="w-full h-auto rounded-lg" controls >
              <source src="/videos/aboutVid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};
