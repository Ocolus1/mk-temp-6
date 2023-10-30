import React from "react";
import gdrive from "../../src/assets/google-drive.svg";
import slack from "../../src/assets/slack-colored.svg";
import shopify from "../../src/assets/shopify.svg";
import telegram from "../../src/assets/telegram.svg";
import zapier from "../../src/assets/zapier.svg";
import email from "../../src/assets/email.svg";
import jira from "../../src/assets/jira.png";

function IntegrateSection() {
  return (
    <div className="flex flex-col lg:flex-row py-14 lg:py-20 items-center justify-center gap-x-32 max-w-5xl mx-auto px-10">
      <div className="flex flex-col gap-y-3">
        <div className="flex w-fit items-center justify-center rounded-full bg-[#D0E4FF] text-black py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold text-[10px] lg:text-xs">
          <span>INTEGRATE</span>
        </div>
        <h2 className="font-bold text-[#1A1A1A] text-4xl">
          Better Integration like no other.
        </h2>
        <p>
          BePrepared is a secure, white-labelled digital vault used to
          confidentially store and distribute your clients' cryptocurrency,
          passwords
        </p>
      </div>
      <div className="w-full py-5 px-2 md:px-20 lg:px-2">
        <div className="flex items-center justify-between">
          <div className="-mt-32 intrgrate-icon bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center ">
            <img
              className=" h-10 w-10 lg:p-3  md:h-14 md:w-14 lg:h-auto lg:w-auto"
              src={gdrive}
              alt="Google Drive"
            />
          </div>
          <div className="intrgrate-icon mt-20 bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center">
            <img
              className=" h-10 w-10 lg:p-3  md:h-14 md:w-14 lg:h-auto lg:w-auto"
              src={slack}
              alt="Slack"
            />
          </div>
          <div className="flex flex-col gap-y-10 md:gap-y-20">
            <div className=" intrgrate-icon bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center">
              <img
                className=" h-10 w-10 lg:p-3  md:h-14 md:w-14 lg:h-auto lg:w-auto"
                src={telegram}
                alt="Telegram"
              />
            </div>
            <div className="mt-10 ml-10 intrgrate-icon bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center">
              <img
                className=" h-10 w-10 lg:p-3  md:h-14 md:w-14 lg:h-auto lg:w-auto"
                src={email}
                alt="Email"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 lg:-ml-10">
          <div className="-mt-20 intrgrate-icon bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center">
            <img
              className=" h-10 w-10 lg:p-3  md:h-14 md:w-14 lg:h-auto lg:w-auto"
              src={zapier}
              alt="Zapier"
            />
          </div>

          <div className="-mt-10 intrgrate-icon bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center">
            <img
              className=" h-10 w-10 lg:p-3 md:h-14 md:w-14 lg:h-auto lg:w-auto"
              src={shopify}
              alt="Shopify"
            />
          </div>
          <div className="-mr-5 lg:-mr-10 mt-20 intrgrate-icon bg-[#D0E4FF]/30 h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center">
            <img
              className=" h-10 w-10 lg:p-3 mix-blend-multiply  md:h-14 md:w-14 lg:h-auto lg:w-auto"
              src={jira}
              alt="jira"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrateSection;

/* Didn't create a different component for the image-icons as they can be positioned individually in the future if needed. */
