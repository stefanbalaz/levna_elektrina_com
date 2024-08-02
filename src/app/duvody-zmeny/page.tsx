"use client";

import React from "react";
import SectionContent from "../components/SectionContent";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { FaThumbsDown } from "react-icons/fa";

const ChangeReasonPage = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <main className="font-alteHaasGrotesk font-normal text-black w-full box-border px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex-grow flex flex-col justify-center items-center">
          <SectionContent
            mainHeadlineText="Proč změnit dodavatele elektřiny"
            mainHeadlineType="Headline1"
            subHeadlineText="Úspora nákladů"
            paragraphText={`Jedním z hlavních důvodů pro změnu dodavatele energie je snížení nákladů. Pokud váš současný dodavatel zvýší ceny, můžete smlouvu vypovědět bez sankcí a najít výhodnější nabídku. Mnoho spotřebitelů tak ušetří značné částky ročně, zvláště pokud využijí období, kdy jsou energetické tarify nižší.`}
            sectionClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
            background=""
          />

          <SectionContent
            subHeadlineText="Zlepšení služeb"
            paragraphText={`Dalším důvodem k přechodu na nového dodavatele je kvalita zákaznických služeb. Pokud nejste spokojeni s přístupem, komunikací nebo řešením problémů ze strany vašeho stávajícího dodavatele, může být změna správným krokem. Nový dodavatel může nabídnout lepší zákaznický servis, větší transparentnost a flexibilnější podmínky smlouvy.`}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            background=""
          />

          <SectionContent
            mainHeadlineText="Kdy změnit dodavatele elektřiny"
            mainHeadlineType="Headline1"
            cardOneProps={{
              cardOneIcon: MdOutlinePendingActions,
              cardOneHeadline: "Konec fixace",
              cardOneText:
                "Po skončení fixace často dochází k výraznému zvýšení cen za elektřinu. Srovnejte si nabídky od různých dodavatelů a zjistěte, kde můžete nejvíce ušetřit.",
            }}
            cardTwoProps={{
              cardTwoIcon: MdOutlineSentimentVeryDissatisfied,
              cardTwoHeadline: "Nespokojenost",
              cardTwoText:
                "Pokud váš dodavatel nesplnil své sliby, zvýšil ceny nebo vás obtěžuje přehnanými sankcemi, je čas poohlédnout se po serióznější alternativě.",
            }}
            cardThreeProps={{
              cardThreeIcon: FaThumbsDown,
              cardThreeHeadline: "Nevýhodná smlouva",
              cardThreeText:
                "Máte-li smlouvu s dlouhou fixací, která je nyní nevýhodná, zvažte přechod na nového dodavatele, i když fixace ještě neskončila.",
            }}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            firstButtonClassName=""
            secondButtonClassName=""
            background=""
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

export default ChangeReasonPage;
