import React from "react";
import Image from "next/image";
import centropolLogo from "../../../public/centropol-dodavatel-logo.png";
import cezLogo from "../../../public/cez-dodavatel-logo.png";
import eonLogo from "../../../public/eon-dodavatel-logo.png";
import mndLogo from "../../../public/mnd-dodavatel-logo.png";
import preLogo from "../../../public/pre-dodavatel-logo.png";
import yelloLogo from "../../../public/yello-dodavatel-logo.png";
import lamaEnergyLogo from "../../../public/lama-energy-dodavatel-logo.png";

export default function Logos() {
  const logos = [
    { src: centropolLogo, alt: "Centropol logo" },
    { src: cezLogo, alt: "CEZ dodavatel logo" },
    { src: eonLogo, alt: "EON dodavatel logo" },
    { src: mndLogo, alt: "MND dodavatel logo" },
    { src: preLogo, alt: "PRE dodavatel logo" },
    { src: yelloLogo, alt: "Yello dodavatel logo" },
    { src: lamaEnergyLogo, alt: "Lama Energy dodavatel logo" },
  ];

  return (
    <div
      className="
      flex w-full flex-wrap justify-center sm:justify-between 
      gap-x-5
      mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
      "
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative h-[22px] sm:h-[25px] md:h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px]
          mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
          "
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            style={{ height: "100%", width: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
