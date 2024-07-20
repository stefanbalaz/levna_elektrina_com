import Image from "next/legacy/image";
import React from "react";

interface LogoProps {
  provider: {
    id: number;
    name: string;
    logo: string;
    slug: string;
    descriptionOne: string;
  };
}

export default function ProviderLogo({ provider }: LogoProps) {
  const providerLogo = `/${provider.logo}`;

  return (
    <div className="bg-grayLight rounded-lg relative w-full h-full overflow-hidden m-6">
      <Image
        className="p-0 sm:p-2 md:p-6 lg:p-10"
        src={providerLogo}
        alt={`${provider.name} Logo`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
