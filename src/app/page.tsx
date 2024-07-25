import React from "react";
import Logos from "./components/Logos";
import Hero from "./components/Hero";
import SectionContent from "./components/SectionContent";
import pictureHero from "../../public/levna-elektrina-hero.png";
import { TbWorldSearch } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BulletPoint } from "../../src/app/dodavatel/[name]/types";

export default function Home() {
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
          <Hero
            mainHeadline="Levná elektřina"
            subHeadline="Srovnejte nabídky dodavatelů"
            bullet1="Srovnejte aktuální ceny pohodlně a rychle"
            bullet2="Změňte dodavatele online zdarma"
            bullet3="Užívejte úspor s levnějším tarifem"
            buttonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            buttonStyle="primary"
            buttonText="Srovnejte ceny elektřiny"
            buttonClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
            imageSrc={pictureHero}
            imageAlt="Levná elektřina"
          />
          <Logos />

          <SectionContent
            mainHeadlineText="Jak funguje změna dodavatele"
            mainHeadlineType="Headline2"
            paragraphText={`Výběr vhodného dodavatele energie je klíčový pro Vaši spokojenost a úspory. Zaměřte se nejen na cenu elektřiny, ale také na kvalitu zákaznické péče a obchodní podmínky.\nProces změny dodavatele energie může být snadný, pokud novému dodavateli udělíte plnou moc k zastupování, což urychlí celý proces. Po výběru nového dodavatele je nezbytné důkladně prostudovat smlouvu kterou uzavíráte.\nPo dokončení všech úkonů začne Váš nový dodavatel dodávat energii, a Vy si můžete užívat výhod levnějších tarifů a lepší služby.`}
            firstButtonText="Srovnejte ceny dodavatelů"
            firstButtonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            firstButtonStyle="primary"
            secondButtonText="Více o důvodech změny"
            secondButtonLink="/duvody-zmeny"
            secondButtonStyle="secondary"
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
          />

          <SectionContent
            mainHeadlineText="Výhody změny dodavatele"
            mainHeadlineType="Headline2"
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
            firstButtonText="Srovnejte ceny dodavatelů"
            firstButtonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            firstButtonStyle="primary"
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
          />

          <SectionContent
            mainHeadlineText="Vývoj ceny elektrické energie"
            mainHeadlineType="Headline2"
            paragraphText={`Ceny elektřiny na burze Power Exchange Central Europe (PXE) ukazují, jak se vyvíjí trh s energií. Graf znázorňuje vývoj ceny za 1 MWh v CZK za poslední rok, což vám může pomoci lépe se rozhodnout při výběru dodavatele energie.`}
            firstButtonText="Srovnejte ceny dodavatelů"
            firstButtonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            firstButtonStyle="primary"
            secondButtonText="Více o ceně elektřiny"
            secondButtonLink="/cena-elektriny"
            secondButtonStyle="secondary"
            priceChartProps={{
              fetchUrl:
                "https://data.kurzy.cz/json/komodity/id[cena-elektriny]den[365]mena[czk].json",
              priceLabel: "Cena elektřiny",
            }}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
          />
        </div>
      </main>
    </div>
  );
}
