import React from "react";

const App = () => {
  return (
    <div className="bg-[#121212] flex items-end" id="contact">
      <footer className="bg-[#191919] text-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20">
            <div className="w-full md:max-w-[420px]">
              <h2 className="text-2xl md:text-2xl font-bold mb-4 tracking-wide">
                ECOMMERCE
              </h2>
              <p className="text-sm md:text-sm text-gray-400 mb-8 leading-relaxed md:mr-36 mr-0">
                Ecommerce is a free UI Kit from Paperpillar that you can use for
                your personal or commercial project.
              </p>

              <div className="flex-2 mt-3 md:flex flex-col sm:flex-row items-center sm:items-stretch gap-2 md:gap-4">
                <input
                  type="email"
                  placeholder="Type your email address"
                  className="w-full sm:w-[280px] px-3 md:px-5 py-3 text-xs md:text-md md:py-3 rounded-full bg-transparent text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white mb-5 md:mb-0"
                />
                <button className="px-5  md:px-7 py-3 text-xs  justify-start md:justify-start md:py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200">
                  Submit
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-0">
              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 text-white">
                  POPULAR
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Jackets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Hat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 text-white">
                  MENU
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      All Category
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Special Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 text-white">
                  OTHER
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Tracking Package
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
