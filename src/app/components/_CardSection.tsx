import React from "react";
import Headline2 from "./Headline2";
import SingleButton from "./SingleButton";
import CardThree from "./CardThree";
import { TbWorldSearch } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

interface CardSectionProps {
  headlineText: string;
  buttonText: string;
  buttonLink: string;
  buttonStyle: "primary" | "secondary";
}

const CardSection: React.FC<CardSectionProps> = ({
  headlineText,
  buttonText,
  buttonLink,
  buttonStyle,
}) => {
  return (
    <section
      className="
        w-full
        flex items-center flex-col justify-center 
        mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
      "
    >
      <Headline2>{headlineText}</Headline2>
      <CardThree
        cardOneIcon={TbWorldSearch}
        cardOneHeadline="Objektivní a rychlé"
        cardOneText="Okamžité online srovnání aktuálních nabídek dodavatelů"
        cardTwoIcon={GiReceiveMoney}
        cardTwoHeadline="Garance nejnižší ceny"
        cardTwoText="Mnohé online portály garantují nejlepší ceny"
        cardThreeIcon={RiCustomerService2Line}
        cardThreeHeadline="Zákaznický servis"
        cardThreeText="Standardem internetových portálů je odborná podpora uživatelů"
      />
      <SingleButton
        buttonText={buttonText}
        buttonLink={buttonLink}
        buttonStyle={buttonStyle}
      />
    </section>
  );
};

export default CardSection;
