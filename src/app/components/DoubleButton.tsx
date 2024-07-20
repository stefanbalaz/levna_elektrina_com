import React from "react";
import SingleButton from "./SingleButton";
import { twMerge } from "tailwind-merge";

interface DoubleButtonProps {
  firstButtonText: string;
  firstButtonLink?: string;
  firstButtonStyle: "primary" | "secondary";
  secondButtonText: string;
  secondButtonLink?: string;
  secondButtonStyle: "primary" | "secondary";
  className?: string;
  firstButtonClassName?: string;
  secondButtonClassName?: string;
}

const DoubleButton: React.FC<DoubleButtonProps> = ({
  firstButtonText,
  firstButtonLink,
  firstButtonStyle,
  secondButtonText,
  secondButtonLink,
  secondButtonStyle,
  className,
  firstButtonClassName,
  secondButtonClassName,
}) => {
  return (
    <div
      className={twMerge(`
        flex items-center flex-wrap justify-center
        gap-x-3 lg:gap-5 xl:gap-7 2xl:gap-9
        ${className ?? ""}
      `)}
    >
      {firstButtonLink && (
        <SingleButton
          buttonText={firstButtonText}
          buttonLink={firstButtonLink}
          buttonStyle={firstButtonStyle}
          className={firstButtonClassName}
        />
      )}
      {secondButtonLink && (
        <SingleButton
          buttonText={secondButtonText}
          buttonLink={secondButtonLink}
          buttonStyle={secondButtonStyle}
          className={secondButtonClassName}
        />
      )}
    </div>
  );
};

export default DoubleButton;
