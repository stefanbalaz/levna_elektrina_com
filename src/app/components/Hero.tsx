// Hero.tsx
import React from "react";
import Image from "next/legacy/image";
import { StaticImageData } from "next/image";
import Conversion from "./Conversion";

interface HeroProps {
  mainHeadline: string;
  subHeadline: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  buttonLink: string;
  buttonStyle: "primary" | "secondary";
  buttonText: string;
  buttonClassName?: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function Hero({
  mainHeadline,
  subHeadline,
  bullet1,
  bullet2,
  bullet3,
  buttonLink,
  buttonStyle,
  buttonText,
  buttonClassName = "",
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <div className="relative w-full h-[70vh] mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16">
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="w-full h-full"
      />
      <div className="absolute left-[7%] top-1/2 transform -translate-y-1/2">
        <Conversion
          mainHeadline={mainHeadline}
          subHeadline={subHeadline}
          bullet1={bullet1}
          bullet2={bullet2}
          bullet3={bullet3}
          buttonLink={buttonLink}
          buttonStyle={buttonStyle}
          buttonText={buttonText}
          buttonClassName={buttonClassName}
          mainHeadlineClassName="mx-0"
          subHeadlineClassName="mx-0"
        />
      </div>
    </div>
  );
}
