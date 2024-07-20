import React from "react";
import Headline2 from "./Headline2";
import Paragraph from "./Paragraph";
import ProviderLogo from "./ProviderLogo";
import SingleButton from "./SingleButton";

interface TextLogoSectionProps {
  provider: {
    id: number;
    name: string;
    logo: string;
    slug: string;
    descriptionOne: string;
    nameShort: string;
  };
}

export default function TextLogoSection({ provider }: TextLogoSectionProps) {
  return (
    <div className="flex items-center justify-center">
      <section
        className="
          w-full
          flex flex-col justify-center items-center
          mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
        "
      >
        <Headline2>{provider.name}</Headline2>
        <div className="relative w-3/4">
          <div className="bg-grayLight float-right w-1/3 h-24 md:h-48 lg:h-64 flex justify-center items-center m-4 mt-0 mr-1">
            <ProviderLogo provider={provider} />
          </div>
          <Paragraph
            className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
            text={provider.descriptionOne}
          />

          <div
            className="
              flex items-center flex-wrap justify-center
            "
          >
            <SingleButton
              buttonText={`Srovnej nabídky od ${provider.nameShort}`}
              buttonLink="/conversion"
              buttonStyle="primary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
