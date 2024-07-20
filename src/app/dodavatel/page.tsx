"use client";

import React from "react";
import { providers } from "../data/providers";
import Link from "next/link";
import styled from "styled-components";
import SectionContent from "../components/SectionContent";

const GreenLink = styled.a`
  color: green;
  &:hover {
    color: darkgreen;
  }
`;

export default function ProviderPage() {
  const providersList = providers.map((provider) => {
    return (
      <ul key={provider.slug}>
        <li className="hover:opacity-75 font-bold text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-loose ">
          <Link href={`/dodavatel/${provider.slug}`} passHref legacyBehavior>
            <GreenLink>{provider.name}</GreenLink>
          </Link>
        </li>
      </ul>
    );
  });

  return (
    <div
      className="
    w-full overflow-x-hidden min-h-screen flex-grow flex flex-col items-center
    "
    >
      <div
        className="
        w-full
        flex flex-col justify-center items-center
        mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16
      "
      >
        <SectionContent
          mainHeadlineText="Dotavatelé elektřiny"
          mainHeadlineType="Headline2"
          paragraphText={`Výběr vhodného dodavatele energie je klíčový pro tvoji spokojenost a úspory:`}
          sectionClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
        />
        <div
          className="
      text-center w-100  mx-auto
      mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16"
        >
          {providersList}
        </div>
      </div>
    </div>
  );
}
