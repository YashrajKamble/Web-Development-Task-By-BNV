import React from "react";
import HeroImage from "../../src/assets/image2.png";
import HeroImage2 from "../../src/assets/image4.png";
import HeroImage3 from "../../src/assets/image5.png";

const HeroSection = () => {
  return (
    <main className="flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full mx-auto p-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1 bg-white rounded-3xl overflow-hidden shadow-md min-h-screen md:min-h-[1px] md:h-[700px]">
            <img
              src={HeroImage3}
              alt="A person sitting on a tennis court, representing a 'Color of Summer Outfit' collection."
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-between h-full text-white">
              <div>
                <h1 className="text-4xl sm:text-2xl lg:text-5xl font-normal  w-64 leading-tight max-w-md">
                  Color of Summer Outfit
                </h1>
                <p className="mt-4 text-base sm:text-lg max-w-sm  w-64">
                  100+ Collections for your outfit inspirations in this summer
                </p>
              </div>
              <button className="md:absolute mt-8 md:mt-72  px-6 py-2 sm:px-8 sm:py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                VIEW COLLECTIONS
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex gap-2 overflow-x-auto md:overflow-visible md:flex-col h-auto md:h-[700px]">
            <div className="relative flex-none md:flex-1 w-[70%] md:w-auto bg-white rounded-3xl overflow-hidden shadow-md">
              <img
                src={HeroImage}
                alt="A man riding a bicycle, representing the 'Outdoor Active' collection."
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative z-10 p-6 flex items-start  h-full">
                <h2 className="text-2xl sm:text-3xl text-black w-32">
                  Outdoor Active
                </h2>
              </div>
            </div>

            <div className="relative flex-none md:flex-1 w-[70%] md:w-auto bg-white rounded-3xl overflow-hidden shadow-md h-64">
              <img
                src={HeroImage2}
                alt="A woman in a red shirt, representing the 'Casual Comfort' collection."
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative z-10 p-6 flex items-start h-full">
                <h2 className="text-2xl sm:text-3xl text-black w-32">
                  Casual Comfort
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
