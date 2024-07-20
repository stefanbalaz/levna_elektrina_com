"use client";

import React from "react";
import { notFound } from "next/navigation";
import SectionContent from "../../components/SectionContent";
import { TbWorldSearch } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { Provider, ProviderDetailPageProps } from "./types"; // Import interfaces

const ProviderDetailPage: React.FC<any> = ({
  provider,
}: ProviderDetailPageProps) => {
  if (!provider) {
    notFound();
  }

  console.log("provider", provider);

  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <main
        className="
      font-alteHaasGrotesk font-normal text-black
      w-full box-border 
      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
      "
      >
        <div className="flex-grow flex flex-col justify-center items-center">
          <SectionContent
            mainHeadlineText={provider.name}
            mainHeadlineType="Headline2"
            firstButtonText={`Srovnej nabídky od ${provider.nameShort}`}
            firstButtonLink="/first-button-link"
            firstButtonStyle="primary"
            provider={provider}
            background=""
          />

          <SectionContent
            mainHeadlineText="Výhody změny dodavatele"
            mainHeadlineType="Headline2"
            subHeadlineText="Sub Headline"
            cardOneProps={{
              cardOneIcon: TbWorldSearch,
              cardOneHeadline: "Objektivní a rychlé",
              cardOneText:
                "Okamžité online srovnání aktuálních nabídek dodavatelů",
            }}
            cardTwoProps={{
              cardTwoIcon: GiReceiveMoney,
              cardTwoHeadline: "Garance nejnižší ceny",
              cardTwoText: "Mnohé online portály garantují nejlepší ceny",
            }}
            cardThreeProps={{
              cardThreeIcon: RiCustomerService2Line,
              cardThreeHeadline: "Zákaznický servis",
              cardThreeText:
                "Standardem internetových portálů je odborná podpora uživatelů",
            }}
            firstButtonText={`Srovnej nabídky od ${provider.nameShort}`}
            firstButtonLink="/your-link"
            firstButtonStyle="primary"
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
          />

          {/*    <SectionHeadlinesParagraphBulletsButtons
            mainHeadlineText="Main Headline"
            mainHeadlineType="Headline2"
            subHeadlineText="Sub Headline"
            bulletPoints={[
              { headline: "First Headline", text: "First text content" },
              { headline: "Second Headline", text: "Second text content" },
              { headline: "Third Headline", text: "Third text content" },
              { headline: "First Headline", text: "First text content" },
              { headline: "Second Headline", text: "Second text content" },
              { headline: "Third Headline", text: "Third text content" },
            ]}
            paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            firstButtonText="Button 1"
            firstButtonLink="#"
            firstButtonStyle="primary"
            secondButtonText="Button 2"
            secondButtonLink="#"
            secondButtonStyle="secondary"
            sectionClassName="custom-section-class"
            mainHeadlineClassName="custom-main-headline-class"
            subHeadlineClassName="custom-sub-headline-class"
            paragraphClassName="custom-paragraph-class"
            firstButtonClassName="custom-first-button-class"
            secondButtonClassName="custom-second-button-class"
          /> */}

          <SectionContent
            mainHeadlineText={`Jak funguje změna dodavatele ku ${provider.name}`}
            mainHeadlineType="Headline2"
            subHeadlineText="Sub Headline"
            paragraphText={provider.descriptionTwo}
            firstButtonText="First Button"
            firstButtonLink="#"
            firstButtonStyle="primary"
            secondButtonText="Second Button"
            secondButtonStyle="secondary"
            sectionClassName="my-section"
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
            background="grayLight"
          />
        </div>
      </main>
    </div>
  );
};

export default ProviderDetailPage;
