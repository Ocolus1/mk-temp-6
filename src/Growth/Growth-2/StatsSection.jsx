import React from "react";
function StatsSection() {
  return (
    <div>
      <div className="stats-section">
        <div className="max-w-4xl flex flex-col gap-y-5 mx-auto">
          <div className="flex w-fit mx-auto items-center justify-center rounded-full bg-[#D0E4FF] text-black  py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold text-[10px] lg:text-xs">
            <span>NEW STATS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium w-fit mx-auto text-center px-10 lg:px-0">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
        <div className=" stats-grid z-20 max-w-4xl mx-auto flex items-center justify-between md:px-10  gap-x-10 py-14 px-5 lg:px-0">
          <div className="flex flex-col items-center justify-center gap-y-3 ">
            <h2 className="text-2xl lg:text-6xl text-[#6498DD] font-bold">
              200%
            </h2>
            <p className="text-center text-xs md:text-base">
              increase in new pipeline generated
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-2xl lg:text-6xl text-[#6498DD] font-bold">
              70%
            </h2>
            <p className="text-center text-xs md:text-base">
              Increase in form workforce
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-2xl lg:text-6xl text-[#6498DD] font-bold">
              40%
            </h2>
            <p className="text-center text-xs md:text-base">
              Decrease in cost per lead
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
