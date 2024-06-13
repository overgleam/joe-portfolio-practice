"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";

const Joe = () => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState<Boolean>(true);
  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
    setToggle(!toggle);
  };
  return (
    <div className="pb-20 pt-30">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-screen"
          fill="rgb(253 132 227)"
        />
        <Spotlight
          className="top-40 left-10 md:left-[40%] h-[80vh] w-screen"
          fill="#2f3237"
        />

        <div className="h-screen w-full transition bg-white-300 dark:bg-black-100 dark:bg-grid-white/[0.02] bg-grid-black/[0.04] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center transition dark:bg-black-100 bg-white-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-black dark:text-blue-100 max-w-80">
              Joseph Alforque Portfolio
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl mt-4"
              words="Joseph Pinakagwapo sa Tanang kalibutang hastang Buanga Sheeeessshhh!"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hello, I&apos;m under the water my name is Joseph Alforque.
            </p>
            <a>
              <MagicButton
                title={toggle ? "Dark Mode" : "Light Mode"}
                icon={
                  toggle ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  )
                }
                position="right"
                handleClick={handleClick}
                otherClasses="gap-2 bg-[#fbe722] dark:text-black-100"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joe;
