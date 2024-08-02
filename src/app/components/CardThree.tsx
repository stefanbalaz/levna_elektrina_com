import React from "react";
import Card from "./Card";

interface CardProps {
  icon?: React.ElementType;
  headline: string;
  text: string;
}

interface CardThreeProps {
  cardOneIcon?: CardProps["icon"];
  cardOneHeadline?: CardProps["headline"];
  cardOneText?: CardProps["text"];
  cardTwoIcon?: CardProps["icon"];
  cardTwoHeadline?: CardProps["headline"];
  cardTwoText?: CardProps["text"];
  cardThreeIcon?: CardProps["icon"];
  cardThreeHeadline?: CardProps["headline"];
  cardThreeText?: CardProps["text"];
}

const CardThree: React.FC<CardThreeProps> = ({
  cardOneIcon,
  cardOneHeadline,
  cardOneText,
  cardTwoIcon,
  cardTwoHeadline,
  cardTwoText,
  cardThreeIcon,
  cardThreeHeadline,
  cardThreeText,
}) => {
  return (
    <div
      className="
        w-100 mx-auto
        grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 
        gap-3 sm:gap-y-3 md:gap-y-3 lg:gap-5 xl:gap-7 2xl:gap-9
       text-lg leading-relaxed sm:text-xl sm:leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed 
        mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16    
      "
    >
      <div className="bg-grayLight w-full sm:max-w-xs md:max-w-sm 2xl:max-w-md mx-auto">
        <Card
          Icon={cardOneIcon}
          headline={cardOneHeadline}
          text={cardOneText}
        />
      </div>
      <div className="bg-grayLight w-full sm:max-w-xs md:max-w-sm 2xl:max-w-md mx-auto">
        <Card
          Icon={cardTwoIcon}
          headline={cardTwoHeadline}
          text={cardTwoText}
        />
      </div>
      <div className="sm:col-span-2 2xl:col-span-1 bg-grayLight w-full sm:max-w-xs md:max-w-sm 2xl:max-w-md mx-auto">
        <Card
          Icon={cardThreeIcon}
          headline={cardThreeHeadline}
          text={cardThreeText}
        />
      </div>
    </div>
  );
};

export default CardThree;
