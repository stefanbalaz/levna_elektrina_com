"use client";

import React from "react";
import SectionContent from "../components/SectionContent";
import { TbWorldSearch } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const ImpresumPage = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <main className="font-alteHaasGrotesk font-normal text-black w-full box-border px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex-grow flex flex-col justify-center items-center">
          <SectionContent
            mainHeadlineText="Impresum"
            mainHeadlineType="Headline2"
            subHeadlineText="Provozovatel webové stránky:"
            paragraphText={`Štefan Baláž\nPflügerstrasse 79\n12047 Berlin\nSpolková republika Německo`}
          />
          <SectionContent
            subHeadlineText="Kontakt:"
            paragraphText={`E-Mail: info@levna-elektrina.com\nTelefon: +49 176 7831 3456`}
          />
          <SectionContent
            subHeadlineText="Odpovědná osoba za obsah:"
            paragraphText={`Štefan Baláž`}
          />
          <SectionContent
            subHeadlineText="Prohlášení o odpovědnosti:"
            paragraphText={`Informace na této webové stránce jsou poskytovány pouze pro obecné informační účely. Přestože se snažíme poskytovat aktuální a přesné informace, nemůžeme zaručit, že všechny informace jsou vždy aktuální, úplné a správné.`}
          />
          <SectionContent
            subHeadlineText="Odkazy na externí stránky:"
            paragraphText={`Naše webová stránka může obsahovat odkazy na externí webové stránky třetích stran, nad nimiž nemáme kontrolu. Proto neneseme žádnou odpovědnost za obsah těchto webových stránek.`}
          />
          <SectionContent
            subHeadlineText="Autorská práva:"
            paragraphText={`Obsah a struktura této webové stránky jsou chráněny autorským právem. Jakékoli kopírování, distribuce nebo jiné použití obsahu, mimo rámec autorského práva, vyžaduje předchozí písemný souhlas provozovatele webové stránky.`}
          />
          <SectionContent
            subHeadlineText="Řešení sporů online:"
            paragraphText={`Spotřebitelé mají možnost využít platformu pro řešení sporů online (ODR) Evropské komise: https://ec.europa.eu/consumers/odr. Není-li dohodnuto jinak, nejsme povinni a ochotni účastnit se řešení sporů před spotřebitelským rozhodčím orgánem.`}
          />
          <SectionContent
            subHeadlineText="Platnost:"
            paragraphText={`Tento impresum platí od 20.7.2024.`}
          />
        </div>
      </main>
    </div>
  );
};

export default ImpresumPage;
