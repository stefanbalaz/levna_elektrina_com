import React from "react";
import Headline2 from "./Headline2";

interface CardProps {
  Icon?: React.ElementType;
  headline?: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ Icon, headline, text }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-center
        p-2 sm:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6
      "
    >
      {Icon && (
        <Icon
          className="
          text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
          text-green
          mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6
        "
        />
      )}

      <Headline2
        className="
          text-blue
          mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6
          w-100 sm:w-100 mx-auto
        "
      >
        {headline}
      </Headline2>
      <p className="">{text}</p>
    </div>
  );
};

export default Card;
