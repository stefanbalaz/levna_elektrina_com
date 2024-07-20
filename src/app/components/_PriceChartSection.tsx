import React from "react";
import Headline2 from "./Headline2";
import PriceChart from "./PriceChart";
import DoubleButton from "./DoubleButton";
import Paragraph from "./Paragraph";

interface PriceChartSectionProps {
  headlineText: string;
  paragraphText: string;
  firstButtonText: string;
  firstButtonLink: string;
  firstButtonStyle: "primary" | "secondary";
  secondButtonText: string;
  secondButtonLink: string;
  secondButtonStyle: "primary" | "secondary";
  fetchUrl: string;
  priceLabel: string;
}

const PriceChartSection: React.FC<PriceChartSectionProps> = ({
  headlineText,
  paragraphText,
  firstButtonText,
  firstButtonLink,
  firstButtonStyle,
  secondButtonText,
  secondButtonLink,
  secondButtonStyle,
  fetchUrl,
  priceLabel,
}) => {
  return (
    <section
      className="
      w-full
        flex flex-col justify-center items-center
        mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
      "
    >
      <Headline2>{headlineText}</Headline2>
      <Paragraph text={paragraphText} />
      <PriceChart fetchUrl={fetchUrl} priceLabel={priceLabel} />
      <DoubleButton
        firstButtonText={firstButtonText}
        firstButtonLink={firstButtonLink}
        firstButtonStyle={firstButtonStyle}
        secondButtonText={secondButtonText}
        secondButtonLink={secondButtonLink}
        secondButtonStyle={secondButtonStyle}
      />
    </section>
  );
};

export default PriceChartSection;
