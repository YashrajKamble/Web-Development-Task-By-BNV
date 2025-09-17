import React from "react";
import HeroImage from "../../src/assets/image1.png";
import HeroImage2 from "../../src/assets/image6.png";

const ArrowIcon = ({ className = "w-5 h-5 text-white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const SubHeroSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1 flex flex-col justify-center bg">
          <h2 className="text-4xl sm:text-5xl font-normal leading-tight">
            Casual
            <br />
            Inspirations
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600  max-w-[260px] md:max-w-[270px]">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>

          <button
            type="button"
            aria-label="Browse inspirations"
            className="mt-6 items-center gap-2 w-[220px] h-10 rounded-full border border-black/20 text-sm font-medium px-4 py-2 transition-transform hover:shadow"
          >
            Browse Inspirations
          </button>
        </div>

        <div className="hidden lg:grid lg:col-span-2  grid-cols-2 gap-6 ">
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] hover:scale-105 transform transition"
            role="button"
            tabIndex={0}
            aria-label="Say it with Shirt"
          >
            <img
              src={HeroImage}
              alt="Say it with Shirt"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-4 bottom-4 text-white font-semibold text-xl drop-shadow-md">
              <span className="text-2xl"> Say it</span>

              <br />
              <span className="text-2xl">with Shirt</span>
            </div>
            <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] hover:scale-105 transform transition"
            role="button"
            tabIndex={0}
            aria-label="Funky never get old"
          >
            <img
              src={HeroImage2}
              alt="Funky never get old"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-4 bottom-4 text-white font-normal text-xl drop-shadow-md">
              <span className="text-2xl">Funky never</span>
              <br />
              <span className="text-2xl">get old</span>
            </div>
            <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
