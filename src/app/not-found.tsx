import React from "react";
import SectionContent from "./components/SectionContent";
import { TbFileSad } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex items-center justify-center">
      <div
        className="
        flex flex-col justify-center items-center
        font-alteHaasGrotesk font-normal text-black
        w-full box-border 
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
        "
      >
        <TbFileSad
          className="
          text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
          text-green
          mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6
        "
        />
        <SectionContent
          mainHeadlineType="Headline2"
          mainHeadlineText="Stránka nenalezena"
          paragraphText="Stránka, kterou hledáte, neexistuje."
          firstButtonText="Zpět na hlavní stránku"
          firstButtonLink="/"
          firstButtonStyle="primary"
        />
      </div>
    </div>
  );
}
