"use client";

import React from "react";
import SectionContent from "../components/SectionContent";

const DataPrivacyPage = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <main className="font-alteHaasGrotesk font-normal text-black w-full box-border px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex-grow flex flex-col justify-center items-center">
          <SectionContent
            mainHeadlineText="Ochrana osobních údajů"
            mainHeadlineType="Headline1"
            subHeadlineText="1. Úvod"
            paragraphText={`Tento dokument (dále jen „Dokument“) popisuje způsob, jakým sbíráme, používáme a chráníme osobní údaje, které nám poskytnete při používání této webové stránky (dále jen „Stránka“). Tento Dokument je závazný pro každého, kdo navštěvuje nebo používá Stránku.`}
          />
          <SectionContent
            subHeadlineText="2. Zodpovědnost za zpracování osobních údajů"
            paragraphText={`Provozovatelem Stránky a zodpovědným za zpracování osobních údajů je Štefan Baláž s adresou Pflügerstrasse 79, 12047 Berlin (dále jen „Provozovatel“).`}
          />
          <SectionContent
            subHeadlineText="3. Kategorie zpracovávaných osobních údajů"
            paragraphText={`Při používání Stránky můžeme sbírat následující kategorie osobních údajů:\n- Technické údaje: IP adresa, typ prohlížeče, jazyková nastavení, typ operačního systému, čas přístupu k Stránce.\n- Cookies: Soubory cookies slouží k sledování preferencí uživatele, zlepšení navigace na Stránce a zasílání relevantních informací. Používání cookies je detailně popsáno v části 5 tohoto Dokumentu.`}
          />
          <SectionContent
            subHeadlineText="4. Účely zpracování osobních údajů"
            paragraphText={`Osobní údaje sbíráme a zpracováváme za účelem:\n- Zajištění provozu Stránky: Na základě našich oprávněných zájmů zajistit funkčnost a bezpečnost Stránky.\n- Analytické účely: Používání Google Analytics k analýze návštěvnosti a chování uživatelů, což nám pomáhá zlepšit obsah a služby poskytované na Stránce.\n- Komunikace: Na základě vašeho souhlasu, pokud si zvolíte přihlášení k odběru novinek nebo jiných forem komunikace.`}
          />
          <SectionContent
            subHeadlineText="5. Soubory cookies a Google Analytics"
            paragraphText={`Při používání Stránky můžeme využívat soubory cookies a Google Analytics k zaznamenávání informací o vaší návštěvě a interakci se Stránkou. Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče a umožňují nám identifikovat vás při opětovné návštěvě Stránky a přizpůsobit obsah vašim zájmům.\nGoogle Analytics je služba poskytovaná společností Google, která nám poskytuje statistiky o návštěvnosti Stránky a umožňuje nám lépe porozumět vašim preferencím a chování na Stránce.`}
          />
          <SectionContent
            subHeadlineText="6. Právní základ zpracování osobních údajů"
            paragraphText={`Zpracování osobních údajů je založeno na:\nVašem souhlasu: Při používání cookies, pokud to vyžaduje platná legislativa.\nNašich oprávněných zájmech: Na zajištění provozu a zlepšení Stránky.`}
          />
          <SectionContent
            subHeadlineText="7. Vaše práva"
            paragraphText={`Podle platných právních předpisů máte právo:\n- Požadovat přístup k vašim osobním údajům a informace o jejich zpracování.\n- Požádat o opravu nesprávných nebo neúplných údajů.\n- Vymazat vaše osobní údaje, pokud neexistuje žádný oprávněný důvod k jejich dalšímu zpracování.\n- Omezit zpracování vašich osobních údajů v určitých situacích.\n- Namitnout proti zpracování vašich osobních údajů.`}
          />
          <SectionContent
            subHeadlineText="8. Kontaktní údaje"
            paragraphText={`Pokud máte otázky nebo požadavky týkající se ochrany osobních údajů nebo tohoto Dokumentu, prosím, kontaktujte nás na:\nŠtefan Baláž, Pflügerstrasse 79, 12047 Berlin\nE-Mail: info@levna-elektrina.com`}
          />
          <SectionContent
            subHeadlineText="9. Změny v ochraně osobních údajů"
            paragraphText={`Tento Dokument může být čas od času aktualizován. Aktuální verze Dokumentu je vždy k dispozici na Stránce.\nDatum poslední aktualizace: 20.7.2024`}
          />
        </div>
      </main>
    </div>
  );
};

export default DataPrivacyPage;
