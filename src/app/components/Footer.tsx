import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Link from "next/link";
import CookieConsentLink from "./CookieConsentLink";

interface footerProps {
  eMail: string;
}

export default function Footer({ eMail }: footerProps) {
  return (
    <footer
      className="
      bg-grayLight
      w-full mx-auto
      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
      flex justify-center items-center
     
      "
    >
      {/* Previous text styling
text-lg leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed lg:text-xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-loose
Previous text styling:
text-base sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl
*/}

      <div
        className="
        flex flex-row text-lg mb-6 justify-between w-100 sm:w-3/4 mx-auto
        gap-3 sm:gap-3 md:gap-3 lg:gap-5 xl:gap-7 2xl:gap-9
        text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl
        mt-3 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10
        mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
        "
      >
        <div className="flex row font-alteHaasGrotesk font-extraStrong text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          <Logo />
        </div>
        <ul
          className="
          flex flex-col
          font-yantramanav
          text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl
        "
        >
          <div className="font-semibold">Mapa stránek</div>
          <Navigation type="" />
          <Link
            className="hover:opacity-75 font-yantramanav text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl"
            href="/impresum"
          >
            Impresum
          </Link>
          <Link
            className="hover:opacity-75 font-yantramanav text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl"
            href="/ochrana-osobnich-udaju"
          >
            Ochrana osobních údajů
          </Link>
          <CookieConsentLink />
        </ul>
        <div className="font-yantramanav">
          <a href={`mailto: ${eMail}`}>{eMail}</a>
        </div>
      </div>
    </footer>
  );
}
