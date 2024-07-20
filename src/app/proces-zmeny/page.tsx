"use client";

import React from "react";
import SectionContent from "../components/SectionContent";
import { TbWorldSearch } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const ChangeProcessPage = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <main className="font-alteHaasGrotesk font-normal text-black w-full box-border px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex-grow flex flex-col justify-center items-center">
          <SectionContent
            mainHeadlineText="Proces změny"
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
};

export default ChangeProcessPage;
