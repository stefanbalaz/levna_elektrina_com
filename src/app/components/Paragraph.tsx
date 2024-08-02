import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  text: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  const classes = twMerge(`text-center w-100 mx-auto
    text-lg leading-relaxed sm:text-xl sm:leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed 
    mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16",
    ${className ?? ""}
    `);

  return (
    <p className={classes}>
      {text?.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default Paragraph;
