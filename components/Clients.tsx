import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Mga words of Wisdom ni Alporke{" "}
        <span className="text-purple">Pinaka Gwapo</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10 max-lg:mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-10 w-5" />
            <img
              src={nameImg}
              alt={name}
              className="md:w-24 w-20 filter invert dark:invert-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
