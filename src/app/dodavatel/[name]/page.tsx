"use client";

import React from "react";
import { notFound } from "next/navigation";
import SectionContent from "../../components/SectionContent";
import { TbPigMoney } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { SiQuicklook } from "react-icons/si";
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
            firstButtonText={`Spočítej cenu elektřiny od ${provider.nameShort}`}
            firstButtonLink={provider.link}
            firstButtonStyle="primary"
            provider={provider}
            background=""
          />

          <SectionContent
            mainHeadlineText="Výhody změny dodavatele elektřiny"
            mainHeadlineType="Headline2"
            subHeadlineText=""
            cardOneProps={{
              cardOneIcon: TbPigMoney,
              cardOneHeadline: "Úspora peněz",
              cardOneText:
                "Porovnání cen online často odhalí levnější nabídky a umožní ušetřit na nákladech za elektřinu.",
            }}
            cardTwoProps={{
              cardTwoIcon: RxLapTimer,
              cardTwoHeadline: "Jednoduchost",
              cardTwoText:
                "Proces změny dodavatele je rychlý a snadný, často lze vše vyřídit online bez nutnosti osobní návštěvy.",
            }}
            cardThreeProps={{
              cardThreeIcon: SiQuicklook,
              cardThreeHeadline: "Transparentnost",
              cardThreeText:
                "Online nástroje poskytují jasné srovnání nabídek a podmínek tarifů, což usnadňuje výběr.",
            }}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
          />

          <SectionContent
            mainHeadlineText={provider.headline1}
            mainHeadlineType="Headline2"
            subHeadlineText=""
            bulletPoints={provider.bulletPoints}
            firstButtonText={`Více o ${provider.nameShort}`}
            firstButtonLink="/your-link"
            firstButtonStyle="primary"
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
          />

          <SectionContent
            mainHeadlineText={`Jak funguje změna dodavatele ku ${provider.name}`}
            mainHeadlineType="Headline2"
            subHeadlineText=""
            paragraphText={`Změna smlouvy na dodávku elektřiny k novému dodavateli, jako je ${provider.name}, je jednoduchý proces. Nejprve si vyberte pro Vás nejvýhodnejší tarif od ${provider.nameShort}. Vyplňte žádost o změnu a další potřebné formuláře. Po podpisu smlouvy a udělení plné moci se ${provider.nameShort} postará o veškeré administrativní kroky, včetně výpovědi stávající smlouvy. Proces obvykle trvá několik týdnů. Jakmile je změna dokončena, ${provider.nameShort} vás informuje o zahájení nové dodávky elektřiny.`}
            firstButtonText={`Spočítej cenu elektřiny od ${provider.nameShort}`}
            firstButtonLink={provider.link}
            firstButtonStyle="primary"
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
