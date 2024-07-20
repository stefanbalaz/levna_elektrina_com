import React from "react";
import { BulletPointsProps } from "../dodavatel/[name]/types";
import Headline3 from "./Headline3";

const BulletPoints: React.FC<BulletPointsProps> = ({
  bullets,
  className = "",
}) => {
  const defaultClasses = `
    w-100 sm:w-3/4 text-center
    flex flex-col justify-center items-center
    text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed
    px-2 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6
    mb-2 sm:mb-2 md:mb-3 lg:mb-5 xl:mb-7 2xl:mb-9
    ${className}
  `;

  return (
    <div className={defaultClasses}>
      {bullets?.map((item, index) => (
        <div
          key={index}
          className="
            flex flex-col gap-x-2 lg:gap-x-3 items-center
            mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6
            "
        >
          <div
            className="
              flex justify-center items-center 
              w-10 h-10  
              md:w-12 md:h-12  
              lg:w-14 lg:h-14  
              xl:w-16 xl:h-16  
              bg-blueLight text-blue rounded-full font-bold
              leading-relaxed 
              text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
              mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6
              "
          >
            {index + 1}
          </div>

          <Headline3 className="mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
            {item.headline}
          </Headline3>
          <div className="mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulletPoints;
