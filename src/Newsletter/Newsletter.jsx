import React from "react";

function Newsletter() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-5 lg:px-0">
      <div className="newletter-container p-5 lg:p-14 flex flex-col lg:gap-y-10 rounded-xl border border-slate-400/20">
        <h2 className="text-2xl lg:text-4xl font-medium max-w-2xl mx-auto text-center">
          An enterprise template to ramp up your company website
        </h2>
        <div className="input-form flex flex-col md:flex-row items-center justify-center gap-x-5">
          <div className="w-full lg:w-2/3">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-3 rounded-full w-full mt-5 focus:outline-none ring-1  focus:ring-2 focus:ring-[#6498DD]"
            />
          </div>
          <button className="w-1/2 bg-[#6498DD] hover:shadow-lg hover:drop-shadow transition duration-200 lg:w-1/5 text-white font-semibold text-sm lg:text-lg rounded-full px-5 py-3 mt-5">
            3-day free trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
