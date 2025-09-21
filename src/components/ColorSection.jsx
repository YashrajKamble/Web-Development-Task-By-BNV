import React from "react";
import { colors } from "../services/constants";
import { ColorSwatch } from "../hooks/ColorSwitch";

const ColorSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white max-w-7xl mx-auto rounded-xl">
      <div className="mb-8 md:mb-0 md:w-1/4">
        <h1 className="text-4xl md:text-5xl font-normal text-black font-sans leading-tight">
          Explore by Colors
        </h1>
      </div>

      <div className="w-full md:w-3/4 md:pl-20">
        <div role="list" className="flex flex-wrap gap-4">
          {colors.map((color, index) =>
            color.name === "CLEAN WHITE" ? (
              <React.Fragment key={`color-${index}`}>
                <ColorSwatch
                  name={color.name}
                  tailwindClass={color.tailwindClass}
                />
                <div className="w-full" aria-hidden="true" />
              </React.Fragment>
            ) : (
              <ColorSwatch
                key={`color-${index}`}
                name={color.name}
                tailwindClass={color.tailwindClass}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
