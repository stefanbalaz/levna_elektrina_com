/* import React from "react";
import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import SingleButton from "./SingleButton";

interface ConversionProps {
  mainHeadline: string;
  subHeadline: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  buttonLink: string;
  buttonStyle: "primary" | "secondary";
  buttonText: string;
  buttonClassName?: string;
}

export default function Conversion({
  mainHeadline,
  subHeadline,
  bullet1,
  bullet2,
  bullet3,
  buttonLink,
  buttonStyle,
  buttonText,
  buttonClassName = "",
}: ConversionProps) {
  const content = [bullet1, bullet2, bullet3];

  return (

    <div
      className="bg-grayLight opacity-80 w-auto h-auto rounded-sm 
    p-3 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-10
    "
    >
      <Headline2
        className="text-left text-blue 
        mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4
      "
      >
        {mainHeadline}
      </Headline2>

      <Headline3
        className="text-left text-blue
        mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4
      "
      >
        {subHeadline}
      </Headline3>

      <div
        className="flex flex-col 
       text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed
       mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4
      "
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-x-2 lg:gap-x-3  items-center
            mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2 2xl:mb-3
            
            "
          >
            <div
              className="flex justify-center items-center gap-y-10 w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-blueLight text-blue rounded-full font-bold
            
            text-base leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-lg lg:leading-relaxed xl:text-2xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed
            
            "
            >
              {index + 1}
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>

      <SingleButton
        buttonText={buttonText}
        buttonLink={buttonLink}
        buttonStyle={buttonStyle}
        className={buttonClassName}
      />
    </div>
  );
}
 */

import React from "react";
import { twMerge } from "tailwind-merge";
import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import SingleButton from "./SingleButton";

interface ConversionProps {
  mainHeadline: string;
  subHeadline: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  buttonLink: string;
  buttonStyle: "primary" | "secondary";
  buttonText: string;
  buttonClassName?: string;
  mainHeadlineClassName?: string;
  subHeadlineClassName?: string;
}

export default function Conversion({
  mainHeadline,
  subHeadline,
  bullet1,
  bullet2,
  bullet3,
  buttonLink,
  buttonStyle,
  buttonText,
  buttonClassName = "",
  mainHeadlineClassName = "",
  subHeadlineClassName = "",
}: ConversionProps) {
  const content = [bullet1, bullet2, bullet3];

  return (
    <div
      className={twMerge(`
        bg-grayLight opacity-80 w-auto h-auto rounded-sm 
        p-3 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-10
      `)}
    >
      <Headline2
        className={twMerge(`
          text-left text-blue 
          mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4
          ${mainHeadlineClassName}
        `)}
      >
        {mainHeadline}
      </Headline2>

      <Headline3
        className={twMerge(`
          text-left text-blue
          mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4
          ${subHeadlineClassName}
        `)}
      >
        {subHeadline}
      </Headline3>

      <div
        className={twMerge(`
          flex flex-col 
          text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed
          mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4
        `)}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className={twMerge(`
              flex flex-row gap-x-2 lg:gap-x-3 items-center
              mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2 2xl:mb-3
            `)}
          >
            <div
              className={twMerge(`
                flex justify-center items-center gap-y-10 w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-blueLight text-blue rounded-full font-bold
                text-base leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-lg lg:leading-relaxed xl:text-2xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed
              `)}
            >
              {index + 1}
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>

      <SingleButton
        buttonText={buttonText}
        buttonLink={buttonLink}
        buttonStyle={buttonStyle}
        className={buttonClassName}
      />
    </div>
  );
}
