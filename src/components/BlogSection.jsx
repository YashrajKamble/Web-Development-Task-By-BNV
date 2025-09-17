import React from "react";
import BlogImage from "../../src/assets/image7.png";

const BlogSection = () => {
  return (
    <section className="font-inter bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto md:px-7">
        <h2 className="text-xl sm:text-2xl text-gray-900 mb-6">
          From The Blog
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
              <img
                src={BlogImage}
                alt="Clothes hanging on a rack"
                className="w-[200%] h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left p-">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 mb-4">
              How to combine your daily outfit to look fresh and cool.
            </h3>
            <p className="text-base text-gray-700 mb-6">
              Maybe you don’t need to buy new clothes to have a nice, cool,
              fresh-looking outfit every day. Maybe what you need is to combine
              your clothes collections. Mix and match is the key.
            </p>
            <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors duration-300 font-medium">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
