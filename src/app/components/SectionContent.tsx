import React from "react";
import { twMerge } from "tailwind-merge";
import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";
import DoubleButton from "./DoubleButton";
import SingleButton from "./SingleButton";
import CardThree from "./CardThree";
import PriceChart from "./PriceChart";
import BulletPoints from "./BulletPoints";
import ProviderLogo from "./ProviderLogo";
import Image from "next/legacy/image";
import { BulletPoint } from "../dodavatel/[name]/types";

interface SectionProps {
  mainHeadlineText?: string;
  mainHeadlineType?: "Headline2" | "Headline3" | "none";
  subHeadlineText?: string;
  paragraphText?: string;
  firstButtonText?: string;
  firstButtonLink?: string;
  firstButtonStyle?: "primary" | "secondary";
  secondButtonText?: string;
  secondButtonLink?: string;
  secondButtonStyle?: "primary" | "secondary";
  sectionClassName?: string;
  mainHeadlineClassName?: string;
  subHeadlineClassName?: string;
  paragraphClassName?: string;
  firstButtonClassName?: string;
  secondButtonClassName?: string;
  cardOneProps?: {
    cardOneIcon: any;
    cardOneHeadline: string;
    cardOneText: string;
  };
  cardTwoProps?: {
    cardTwoIcon: any;
    cardTwoHeadline: string;
    cardTwoText: string;
  };
  cardThreeProps?: {
    cardThreeIcon: any;
    cardThreeHeadline: string;
    cardThreeText: string;
  };
  priceChartProps?: {
    fetchUrl: string;
    priceLabel: string;
  };
  bulletPoints?: BulletPoint[];
  bulletClassName?: string;
  provider?: {
    id: number;
    name: string;
    logo: string;
    slug: string;
    descriptionOne: string;
    nameShort: string;
  };
  textPicture?: {
    pictureSrc: string;
    pictureAlt: string;
    text: string;
  };
  background?: string; // New prop for background color
}

const SectionContent: React.FC<SectionProps> = ({
  mainHeadlineText,
  mainHeadlineType = "none",
  subHeadlineText,
  paragraphText,
  firstButtonText,
  firstButtonLink,
  firstButtonStyle,
  secondButtonText,
  secondButtonLink,
  secondButtonStyle,
  sectionClassName,
  mainHeadlineClassName,
  subHeadlineClassName,
  paragraphClassName,
  firstButtonClassName,
  secondButtonClassName,
  cardOneProps,
  cardTwoProps,
  cardThreeProps,
  priceChartProps,
  bulletPoints,
  bulletClassName,
  provider,
  textPicture,
  background,
}) => {
  const renderMainHeadline = () => {
    if (mainHeadlineText) {
      let headlineClasses = twMerge(`
        
        px-2 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6
        ${mainHeadlineClassName ?? ""}
      `);

      if (subHeadlineText) {
        headlineClasses += twMerge(`
          mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6
        `);
      }

      if (mainHeadlineType === "Headline2") {
        return (
          <Headline2 className={headlineClasses}>{mainHeadlineText}</Headline2>
        );
      } else if (mainHeadlineType === "Headline3") {
        return (
          <Headline3 className={headlineClasses}>{mainHeadlineText}</Headline3>
        );
      }
    }
    return null;
  };
  const renderSubHeadline = () => {
    if (subHeadlineText) {
      return (
        <Headline3 className={subHeadlineClassName}>
          {subHeadlineText}
        </Headline3>
      );
    }
    return null;
  };

  const renderParagraph = () => {
    if (paragraphText) {
      return <Paragraph text={paragraphText} className={paragraphClassName} />;
    }
    return null;
  };

  const renderCards = () => {
    if (cardOneProps) {
      return (
        <CardThree
          cardOneIcon={cardOneProps?.cardOneIcon}
          cardOneHeadline={cardOneProps?.cardOneHeadline}
          cardOneText={cardOneProps?.cardOneText}
          cardTwoIcon={cardTwoProps?.cardTwoIcon}
          cardTwoHeadline={cardTwoProps?.cardTwoHeadline}
          cardTwoText={cardTwoProps?.cardTwoText}
          cardThreeIcon={cardThreeProps?.cardThreeIcon}
          cardThreeHeadline={cardThreeProps?.cardThreeHeadline}
          cardThreeText={cardThreeProps?.cardThreeText}
        />
      );
    }
    return null;
  };

  const renderPriceChart = () => {
    if (priceChartProps) {
      return (
        <PriceChart
          fetchUrl={priceChartProps.fetchUrl}
          priceLabel={priceChartProps.priceLabel}
        />
      );
    }
    return null;
  };

  /*     const renderBullets = () => {
      if (bullets.length > 0) {
        const bulletClasses = twMerge(`
          rounded-sm 
          mb-4 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12
          ${bulletClassName}
        `);

        return <BulletPoints bullets={bullets} className={bulletClasses} />;
      }
      return null;
    }; */

  const renderBullets = () => {
    if (bulletPoints && bulletPoints.length > 0) {
      const bulletClasses = twMerge(`
          rounded-sm 
          mb-4 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12
          ${bulletClassName}
        `);

      return <BulletPoints bullets={bulletPoints} className={bulletClasses} />;
    }
    return null;
  };

  const renderTextPicture = () => {
    if (provider) {
      return (
        <div className="relative w-100">
          <div className="bg-grayLight float-right w-1/3 h-24 md:h-48 lg:h-64 flex justify-center items-center m-4 mt-0 mr-1">
            <ProviderLogo provider={provider} />
          </div>
          <Paragraph
            className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
            text={provider.descriptionOne}
          />
        </div>
      );
    } else if (textPicture) {
      return (
        <div className="relative w-100">
          <div className="bg-grayLight float-right w-1/3 h-24 md:h-48 lg:h-64 flex justify-center items-center m-4 mt-0 mr-1">
            <Image
              src={textPicture.pictureSrc}
              alt={textPicture.pictureAlt}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Paragraph
            className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
            text={textPicture.text}
          />
        </div>
      );
    }
    return null;
  };

  const renderButtons = () => {
    if (firstButtonText && firstButtonLink && firstButtonStyle) {
      if (secondButtonText && secondButtonLink && secondButtonStyle) {
        return (
          <DoubleButton
            firstButtonText={firstButtonText}
            firstButtonLink={firstButtonLink}
            firstButtonStyle={firstButtonStyle}
            secondButtonText={secondButtonText}
            secondButtonLink={secondButtonLink}
            secondButtonStyle={secondButtonStyle}
            firstButtonClassName={firstButtonClassName}
            secondButtonClassName={secondButtonClassName}
          />
        );
      }
      return (
        <SingleButton
          buttonText={firstButtonText}
          buttonLink={firstButtonLink}
          buttonStyle={firstButtonStyle}
          className={firstButtonClassName}
        />
      );
    }
    return null;
  };

  /* const sectionClasses = twMerge(`
    w-100 md:w-3/4
    px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10
    rounded-sm
    flex flex-col justify-center items-center
    mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
    ${sectionClassName ?? ""}
    ${
      background
        ? `bg-${background} pt-2 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 mb-8 sm:mb-8 md:mb-12 lg:mb-20 xl:mb-28 2xl:mb-32`
        : ""
    }
  `); */

  const sectionClasses = twMerge(`
  w-100 md:w-3/4
  px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10
  rounded-sm
  flex flex-col items-center
  mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
  ${sectionClassName ?? ""}
  ${
    background
      ? `bg-${background} pt-2 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 mb-8 sm:mb-8 md:mb-12 lg:mb-20 xl:mb-28 2xl:mb-32`
      : ""
  }
`);

  return (
    <section className={sectionClasses}>
      {/*   <section className={sectionClasses} style={sectionStyle}> */}
      {renderMainHeadline()}
      {renderSubHeadline()}
      {renderParagraph()}
      {renderCards()}
      {renderPriceChart()}
      {renderBullets()}
      {renderTextPicture()}
      {renderButtons()}
    </section>
  );
};

export default SectionContent;
