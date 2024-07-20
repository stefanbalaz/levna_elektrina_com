import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Headline2 = ({ children, className }: Props) => {
  const classes = twMerge(`
    w-100 mx-auto text-center
    text-blue font-lora font-bold
    text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl
    leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed
    mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16,
    ${className ?? ""}
  `);
  return <h2 className={classes}>{children}</h2>;
};

export default Headline2;
