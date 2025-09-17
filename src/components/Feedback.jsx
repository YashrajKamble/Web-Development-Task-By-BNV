import React from "react";
import FeedbackImage from "../../src/assets/image3.png";

const Feedback = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-0 md:px-7">
        <div className="relative isolate overflow-hidden shadow-xl rounded-3xl p-6 sm:p-10 lg:p-16">
          <img
            className="absolute inset-0 h-full w-full object-cover md:hidden"
            src={FeedbackImage}
            alt="Abstract background pattern"
            style={{ objectPosition: "left top" }}
          />

          <img
            className="absolute inset-0 h-full w-full object-cover hidden md:block"
            src={FeedbackImage}
            alt="Abstract background pattern"
            style={{ objectPosition: "right top" }}
          />

          <div className="relative z-10 text-white">
            <p className="text-sm font-semibold text-gray-200">
              What people said
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-normal tracking-tight mb-7">
              Love the way they <br /> handle the order.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-300 md:w-110 md:mr-5">
              Very professional and friendly at the same time. They packed the
              order on schedule and the detail of their wrapping is top notch.
              One of my best experience for buying online items. Surely will
              come back for another purchase.
            </p>
            <div className="mt-6">
              <img
                className="md:hidden h-10 w-10 object-cover position-left-top rounded-4xl"
                src={FeedbackImage}
                alt="avatar"
                style={{ objectPosition: "left top" }}
              />
              <p className="text-sm font-semibold">Samantha William</p>
              <p className="text-sm text-gray-400">Fashion Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
