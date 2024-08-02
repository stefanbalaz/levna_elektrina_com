import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SingleButtonProps {
  buttonText: string;
  buttonLink?: string;
  buttonStyle: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const buttonStyles = {
  primary: {
    bg: "bg-green",
    text: "text-white",
  },
  secondary: {
    bg: "bg-greenLight",
    text: "text-green",
  },
};

const SingleButton: React.FC<SingleButtonProps> = ({
  buttonText,
  buttonLink,
  buttonStyle,
  className,
  onClick,
}) => {
  const styles = buttonStyles[buttonStyle] || buttonStyles.primary;

  const containerClasses = twMerge(`
    flex flex-col items-center justify-center
    inline-block
    shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
    mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
    ${className}
  `);

  const buttonClasses = twMerge(`
    rounded-sm
px-1.5 md:px-2.5 xl:px-3 2xl:px-4.5 py-1.5 md:py-2 xl:py-2 2xl:py-2.5
    text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl
    font-normal
    ${styles.bg} ${styles.text}
  `);

  const isExternal =
    buttonLink &&
    (buttonLink.startsWith("http://") || buttonLink.startsWith("https://"));

  return (
    <div className={containerClasses}>
      {onClick ? (
        <button type="button" onClick={onClick} className={buttonClasses}>
          {buttonText}
        </button>
      ) : (
        buttonLink && (
          <Link
            href={buttonLink}
            className={buttonClasses}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {buttonText}
          </Link>
        )
      )}
    </div>
  );
};

export default SingleButton;
