'use client';
import React, { useState } from 'react';

// Demo array of images
const images: string[] = [
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
  '/images/dummy.jpg',
];

export const GalleryImages: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  return (
    <div className=" p-6 md:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => openModal(image, index)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-5 left-5">
                <p className="font-bold text-sm md:text-2xl">0{index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 mt-20">
          <div className="bg-white rounded-lg max-w-3xl max-h-full overflow-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-[#FFEA00] text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#FFAE00]"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={showPreviousImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
            >
              &larr;
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};