import React from "react";
import growth1 from "../../../src/assets/growth-1.jpg";
import growth2 from "../../../src/assets/growth-2.jpg";
import growth3 from "../../../src/assets/growth-3.jpg";
import growth4 from "../../../src/assets/growth-4.jpg";
import growth5 from "../../../src/assets/growth-5.jpg";

function GrowthSection() {
  return (
    <div className="growth-section relative bg-[#6498DD]/10 pt-10 px-10">
      <div className="bg-white absolute bottom-0 left-0 right-0 h-24 lg:h-[200px]"></div>

      <div className="max-w-4xl flex flex-col gap-y-5 mx-auto">
        <div className="flex w-fit mx-auto items-center justify-center rounded-full bg-[#D0E4FF] text-[#1A1A1A] py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold text-[10px] lg:text-xs">
          <span>GROWTH</span>
        </div>
        <h2 className="text-3xl lg:text-5xl px-5 font-bold w-fit mx-auto text-center text-[#1A1A1A] lg:text-left">
          Turn your growth up by Bofi
        </h2>
        <p className="w-fit mx-auto text-center text-sm lg:text-base text-[#626262]/80 font-semibold">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
      </div>
      {/* All the images in Growth Section, Named as left --> right */}
      {/* Didn't use component, so you can change classed to customize how you want for each images */}
      <div className=" image-grid relative max-w-4xl mx-auto flex items-center justify-center gap-x-3 lg:gap-x-10 py-10">
        <div className="flex flex-col gap-y-3 lg:gap-y-10">
          <img className="rounded-2xl" src={growth1} alt="" />
          <img className="rounded-2xl" src={growth2} alt="" />
        </div>
        <div>
          <img className="rounded-2xl" src={growth3} alt="" />
        </div>
        <div className="flex flex-col gap-y-3 lg:gap-y-10">
          <img className="rounded-2xl" src={growth4} alt="" />
          <img className="rounded-2xl" src={growth5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GrowthSection;
