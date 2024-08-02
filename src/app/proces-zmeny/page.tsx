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
            mainHeadlineText="Změna dodavatele energie: krok za krokem"
            mainHeadlineType="Headline1"
            paragraphText={`Změna dodavatele energie může znamenat významné úspory na vašich účtech za elektřinu. Tento proces není složitý, pokud víte, jak postupovat. Následujte tento návod krok za krokem a zjistěte, jak snadno a rychle přejít k novému dodavateli.`}
            sectionClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
            mainHeadlineClassName=""
            paragraphClassName=""
            background=""
          />

          <SectionContent
            mainHeadlineText="Kroky ke změně dodavatele"
            mainHeadlineType="Headline2"
            paragraphText={`Většina odběratelů se rozhoduje pro změnu dodavatele, když chtějí ušetřit nebo nejsou spokojeni se službami stávajícího poskytovatele. Přechod k novému dodavateli je dnes již běžný a může vám přinést lepší ceny i služby.`}
            bulletPoints={[
              {
                headline: "Prostudování stávající smlouvy",
                text: "Než začnete hledat nového dodavatele, věnujte čas důkladnému prostudování smlouvy se stávajícím poskytovatelem. Zjistěte, jaké jsou podmínky ukončení smlouvy a výpovědní lhůty.",
              },
              {
                headline: "Hledání nového dodavatele",
                text: "Hledání nového dodavatele by nemělo být zaměřeno jen na cenu. Důležité jsou i podmínky smlouvy a služby poskytované novým dodavatelem. Použijte online srovnávače k porovnání nabídek.",
              },
              {
                headline: "Podání výpovědi stávajícímu dodavateli",
                text: "Výpověď můžete podat sami, nebo tento úkol přenechat novému dodavateli, který se o vše postará na základě plné moci.",
              },
              {
                headline: "Uzavření smlouvy s novým dodavatelem",
                text: "Před podpisem nové smlouvy si pečlivě prostudujte všechny podmínky a ujistěte se, že souhlasí s vašimi očekáváními a předchozími domluvami.",
              },
              {
                headline: "Informování provozovatele distribuční sítě",
                text: "Po dokončení administrativních úkonů vás nový dodavatel informuje o datu zahájení nové dodávky. K tomuto datu musíte nahlásit samoodečet spotřeby.",
              },
            ]}
            bulletClassName="custom-bullet-class"
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            background="grayLight"
          />

          <SectionContent
            firstButtonText="Změnit dodavatele elektřiny"
            firstButtonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            firstButtonStyle="primary"
            firstButtonClassName=""
            background=""
          />
        </div>
      </main>
    </div>
  );
};

export default ChangeProcessPage;
