import React from "react";
import Navbar from "../Navbar";
import heroChart from "../../src/assets/HeroGraphics.svg";
import google from "../../src/assets/google.svg";
import rrr from "../../src/assets/RRR.svg";
import slack from "../../src/assets/slack.svg";
import zoom from "../../src/assets/zoom.svg";
import adobe from "../../src/assets/adobe.svg";

function HeroSection() {
  return (
    <div className="hero">
      <Navbar />
      {/* HeroSection */}
      <div className="main-hero-section px-7 lg:px-10 max-w-5xl mx-auto flex flex-col gap-y-5 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-24 ">
        <div className="hero-content flex flex-col gap-y-5">
          <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.35] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-[#1A1A1A]">
            We love to make great things, things that matter.
          </h1>
          <p className="text-sm font-medium text-[#1A1A1A]/80 md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <a
            href="#"
            className="flex w-full lg:w-fit items-center text-white justify-center rounded-full bg-[#6498DD] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
          >
            <span>Explore now</span>
          </a>
        </div>
        <div className="hero-image md:pt-10 lg:pt-0">
          <img
            className=" h-auto w-[400px] lg:h-auto lg:w-[800px] xl:w-[1024px] drop-shadow-sm"
            src={heroChart}
            alt=""
          />
        </div>
      </div>

      {/* Featured-company Section */}
      <div className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center py-5 lg:py-20">
        <p className="text-base text-center lg:text-xl font-medium px-20">
          We have the fast paced growing companies with us
        </p>
        <div className="company-logo flex items-center lg:w-full max-w-4xl mx-auto justify-between gap-x-10">
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={google} alt="" />
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={rrr} alt="" />
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={slack} alt="" />
          <img className="h-10 w-10 lg:h-auto lg:w-auto" src={zoom} alt="" />
          <img className="h-10 w-10 lg:h-auto lg:w-auto" src={adobe} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
