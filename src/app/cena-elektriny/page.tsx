"use client";

import React from "react";
import SectionContent from "../components/SectionContent";
import { TbWorldSearch } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const ElectricityPricePage = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <main className="font-alteHaasGrotesk font-normal text-black w-full box-border px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex-grow flex flex-col justify-center items-center">
          <SectionContent
            mainHeadlineText="Cena elektřiny"
            mainHeadlineType="Headline2"
            subHeadlineText="Aktuální Ceny a Tržní Dynamika"
            paragraphText={`Aktuální cena elektřiny na burze je klíčovým ukazatelem, který ovlivňuje náklady pro konečné spotřebitele. Cena elektřiny na spotovém trhu, kde se obchoduje elektřina s dodávkou do 24 hodin, může výrazně kolísat, často o stovky EUR/MWh. Pro lepší představu o budoucích cenách se často používají futures kontrakty. Například kontrakt s dodávkou v roce 2025 má aktuální cenu 91,02 EUR/MWh, což je přibližně 2 299 Kč/MWh.\nCena, kterou platí spotřebitelé na fakturách, se odvíjí od toho, jak efektivně dodavatel nakoupil elektřinu na burze. Tato cena zahrnuje nejen samotnou komoditu, ale i další poplatky a náklady. Každý dodavatel proto může účtovat jinou cenu za kWh elektřiny, což znamená, že výběr dodavatele může výrazně ovlivnit celkové náklady domácnosti na energie.`}
            sectionClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            background=""
          />
          <SectionContent
            mainHeadlineText="Faktory ovlivňující cenu"
            mainHeadlineType="Headline3"
            paragraphText={`Cenu elektřiny na burze určuje aktuální nabídka a poptávka, stejně jako náklady na výrobu elektřiny. Náklady se liší podle zdroje energie - například výroba elektřiny z plynu nebo uhlí je obecně dražší. Cena elektřiny je tak často určována nejdražším potřebným zdrojem, což v praxi znamená elektrárny na zemní plyn nebo černé uhlí.\nVývoj ceny elektřiny na nadcházející roky lze predikovat pomocí termínovaných kontraktů. Aktuální predikce ukazují, že cena elektřiny v roce 2026 by mohla být nižší než současné hodnoty, s očekávanou cenou 84,25 EUR/MWh, což je přibližně 2 128 Kč/MWh. Tyto predikce pomáhají spotřebitelům a dodavatelům lépe plánovat své náklady a ceny.`}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            background=""
          />

          <SectionContent
            mainHeadlineText="Vývoj ceny elektrické energie"
            mainHeadlineType="Headline2"
            paragraphText={`Ceny elektřiny na burze Power Exchange Central Europe (PXE) ukazují, jak se vyvíjí trh s energií. Graf znázorňuje vývoj ceny za 1 MWh v CZK za poslední rok, což vám může pomoci lépe se rozhodnout při výběru dodavatele energie.`}
            firstButtonText="Srovnejte ceny elektřiny"
            firstButtonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            firstButtonStyle="primary"
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
            mainHeadlineText="Prognózy vývoje ceny elektřiny"
            mainHeadlineType="Headline2"
            subHeadlineText="Predikce Cen na Roky 2025 a 2026"
            paragraphText={`Cena elektřiny v roce 2025 se podle současných tržních odhadů očekává na úrovni 91,02 EUR/MWh, což odpovídá přibližně 2 299 Kč/MWh. Tato cena je určena termínovanými kontrakty, které reflektují současné tržní podmínky a očekávání ohledně budoucí poptávky a nabídky.\nPro rok 2026 je očekávaná cena elektřiny o něco nižší, konkrétně 84,25 EUR/MWh, tedy přibližně 2 128 Kč/MWh. Tato snížená cena může být výsledkem očekávaného poklesu nákladů na výrobu nebo zvýšení podílu obnovitelných zdrojů energie, které mají nižší provozní náklady.`}
            sectionClassName="mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            background=""
          />
          <SectionContent
            mainHeadlineText="Dopady na konečné spotřebitele"
            mainHeadlineType="Headline3"
            paragraphText={`Cena silové elektřiny, kterou nakupují dodavatelé na burze, přímo ovlivňuje cenu, kterou spotřebitelé platí za dodávky elektřiny. Pokud dodavatel nakoupí elektřinu levně, může nabídnout nižší cenu než jeho konkurenti, což se promítne do nižších nákladů pro konečné spotřebitele.\nSpotřebitelé by měli sledovat tržní ceny elektřiny a výhodně vybírat své dodavatele. Rozdíly v cenách mezi dodavateli mohou být značné a výběr správného dodavatele může znamenat významné úspory. Využití srovnávačů cen a sledování tržních trendů je klíčové pro optimalizaci nákladů na energie.`}
            sectionClassName=""
            mainHeadlineClassName=""
            subHeadlineClassName=""
            paragraphClassName=""
            background=""
          />

          <SectionContent
            firstButtonText="Srovnejte ceny elektřiny"
            firstButtonLink="https://www.kurzy.cz/elektrina/kalkulacka-cen"
            firstButtonStyle="primary"
            firstButtonClassName=""
          />
        </div>
      </main>
    </div>
  );
};

export default ElectricityPricePage;
