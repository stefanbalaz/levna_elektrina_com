import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Headline3 = ({ children, className }: Props) => {
  const classes = twMerge(`
    w-100  mx-auto text-center
    text-blue  font-lora font-bold
    text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl
    leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed
    mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16,
    ${className ?? ""}
  `);
  return <h3 className={classes}>{children}</h3>;
};

export default Headline3;
