import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Footer ni diring dapita do{" "}
          <span className="text-purple">Contact ni</span>
        </h1>
        <p className="text-gray-500 dark:text-white-200 md:mt-10 my-5 text-center">
          pislita lang na ang link sa ubos kung gusto ka kitag gwapo
        </p>
        <a href="https://www.facebook.com/DarkWanted08/">
          <MagicButton
            title="Facebook"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="gap-3 bg-[#f7b302]"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Copyleft © Joseph Alforque
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter saturate-150 bg-opacity-75 bg-rose-500 dark:bg-black-200 rounded-lg border border-black-300 shadow-black dark:shadow-white shadow-[3px_3px] active:translate-x-[3px] active:translate-y-[3px] transition duration-75 active:shadow-none"
            >
              <a href={profile.href} target="_blank">
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
