import React from 'react';
import collabImage1 from '../../assets/collabimage1.png'; 
import collabImage2 from '../../assets/collabimage2.png'; 

export default function CollaborationSection() {
  return (
    <div className="py-16 bg-white flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16">
      <div className="lg:w-[40%] text-left mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold mb-4">
          Interesting Collaboration With Us?
        </h2>
        <p className="text-base opacity-60 mb-4">
          Help you to reach your business goal
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
      <div className="relative lg:w-[50%] flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
        <div className="relative w-full lg:w-[48%]">
          <img src={collabImage1} alt="Collaboration 1" className="w-full h-auto rounded-lg shadow-lg object-cover" />
          <div className="absolute -top-4 -left-4 bg-blue-600 w-6 h-6 rounded-full"></div>
          <div className="absolute top-4 -left-6 bg-blue-600 w-2 h-2 rounded-full"></div>
        </div>
        <div className="relative w-full lg:w-[48%] mt-4 lg:mt-0">
          <img src={collabImage2} alt="Collaboration 2" className="w-full h-auto rounded-lg shadow-lg object-cover" />
          <div className="absolute -bottom-4 -right-4 bg-orange-600 w-6 h-6 rounded-full"></div>
          <div className="absolute bottom-4 -right-6 bg-orange-600 w-2 h-2 rounded-full"></div>
        </div>
        <div className="absolute -top-8 right-1/2 transform translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 right-1/4 transform translate-x-1/4 w-24 h-24 bg-orange-600 rounded-full opacity-20"></div>
      </div>
    </div>
  );
}
