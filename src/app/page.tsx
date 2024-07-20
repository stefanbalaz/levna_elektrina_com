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
  /*   const bulletPoints: BulletPoint[] = [
    { headline: "First Headline", text: "First text content" },
    { headline: "Second Headline", text: "Second text content" },
    { headline: "Third Headline", text: "Third text content" },
    { headline: "Long Headline", text: "Long text content" },
  ]; */

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
            subHeadline="Srovnej nabídky dodavatelů"
            bullet1="Srovnej aktuální ceny pohodlně a rychle"
            bullet2="Změň dodavatele online zdarma"
            bullet3="Užívej úspor s levnějším tarifem"
            buttonLink="/conversion"
            buttonStyle="primary"
            buttonText="Srovnej ceny elektřiny"
            buttonClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
            imageSrc={pictureHero}
            imageAlt="Levná elektřina"
          />
          <Logos />

          <SectionContent
            mainHeadlineText="Jak funguje změna dodavatele"
            mainHeadlineType="Headline2"
            subHeadlineText="Sub Headline"
            paragraphText={`Výběr vhodného dodavatele energie je klíčový pro tvoji spokojenost a úspory. Zaměř se nejen na cenu elektřiny, ale také na kvalitu zákaznické péče a obchodní podmínky.\nProces změny dodavatele energie může být snadný, pokud novému dodavateli udělíš plnou moc k zastupování, což urychlí celý proces. Po výběru nového dodavatele je nezbytné důkladně prostudovat smlouvu kterou uzavíráte.\nPo dokončení všech úkonů začne tvůj nový dodavatel dodávat energii, a ty si můžeš užívat výhod levnějších tarifů a lepší služby.`}
            firstButtonText="Srovnej ceny dodavatelů"
            firstButtonLink="/your-link"
            firstButtonStyle="primary"
            secondButtonText="Více o důvodech změny"
            secondButtonLink="/your-link"
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
            firstButtonText="Srovnej ceny dodavatelů"
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
            mainHeadlineText="Vývoj ceny elektřiny"
            mainHeadlineType="Headline2"
            subHeadlineText="Sub Headline"
            paragraphText={`  Elektřina na komoditní burze Power Exchange Central Europe, a. s. (burza nabízí aukce elektrické energie a zemního plynu). Zobrazená je cena ročních dlouhodobých kontraktů.\nPodrobný graf ukazuje vývoj ceny elektřiny za 1 MWh v CZK za poslední rok.`}
            firstButtonText="Srovnej ceny dodavatelů"
            firstButtonLink="/your-link"
            firstButtonStyle="primary"
            secondButtonText="Více o důvodech změny"
            secondButtonLink="/your-link"
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

          <SectionContent
            mainHeadlineText="Proč změnit dodavatele"
            mainHeadlineType="Headline2"
            subHeadlineText="Sub Headline"
            paragraphText={`Změna dodavatele energie může výrazně snížit tvé náklady a zvýšit spokojenost. Pokud ti končí fixace nebo jsi nespokojen se stávajícím dodavatelem, srovnej nabídky od nejlepších poskytovatelů a vyber si tu nejvýhodnější.\nOnline srovnání cen elektřiny je rychlé a snadné, a můžeš tak získat výhodnou smlouvu bez zbytečně vysokých záloh. Můžeš se také vyhnout sankcím při předčasné výpovědi smlouvy, pokud dodavatel jednostranně zvýší ceny. Najdi vhodného a ověřeného dodavatele, který ti nabídne nejlepší cenu a podmínky.`}
            firstButtonText="Srovnej ceny dodavatelů"
            firstButtonLink="/your-link"
            firstButtonStyle="primary"
            secondButtonText="Více o důvodech změny"
            secondButtonLink="/your-link"
            secondButtonStyle="secondary"
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
            priceChartProps={{
              fetchUrl:
                "https://data.kurzy.cz/json/komodity/id[cena-elektriny]den[365]mena[czk].json",
              priceLabel: "Cena elektřiny",
            }}
            bulletPoints={[
              { headline: "First Headline", text: "First text content" },
              { headline: "Second Headline", text: "Second text content" },
              { headline: "Third Headline", text: "Third text content" },
              { headline: "Long Headline", text: "Long text content" },
            ]}
            bulletClassName="custom-bullet-class"
            textPicture={{
              pictureSrc: "/path/to/picture.png",
              pictureAlt: "Picture Description",
              text: "This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.This is the description text for the picture.",
            }}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
            background=""
          />
        </div>
      </main>
    </div>
  );
}
