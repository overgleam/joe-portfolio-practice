"use client";

import { cn } from "@/lib/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12 p-4 md:p-8 lg:p-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("josephalforque@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        `row-span-1 relative rounded-3xl overflow-hidden group/bento transition duration-200 shadow-black dark:shadow-noneborder border border-black dark:border-white/[0.1] justify-between flex flex-col space-y-4 bg-[#eee3e0] dark:bg-black-100 shadow-[10px_10px] ${
          id !== 6
            ? "active:translate-x-[10px] active:translate-y-[10px] active:shadow-none"
            : ""
        }`,
        className
      )}
      style={{
        backgroundColor:
          "linear-gradient(20deg, rgba(47,27,27 ,1) 0%, rgba(255,0,0,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover  object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={`font-sans text-nowrap font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#2b2f33] dark:text-[#C1C2D3] z-10
            }`}
          >
            {description}
          </div>
          <div
            className={`dark:text-white-100 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 
            ${id === 6 || id === 1 ? "text-white" : "text-[#2b2f33]"}
            `}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white bg-rose-500 dark:bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>

                {["Java", "Python", "ML"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white bg-[#fbe722] dark:bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Copied!" : "My Email"}
                icon={<IoCopyOutline />}
                handleClick={handleCopy}
                position="left"
                otherClasses="gap-2 bg-rose-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
