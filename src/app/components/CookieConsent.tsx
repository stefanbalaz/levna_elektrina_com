"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import ReactGA from "react-ga4";

export const showConsentModal = () => {
  CookieConsent.show(true);
};

export default function Cookie() {
  useEffect(() => {
    CookieConsent.run({
      disablePageInteraction: true,
      autoClearCookies: true,
      root: "#app",
      cookie: {
        name: "levna_elektrina_com",
      },
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "middle center",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      onFirstConsent: ({ cookie }) => {
        console.log("onFirstConsent fired", cookie);
      },
      onConsent: ({ cookie }) => {
        console.log("onConsent fired!", cookie);
      },
      onChange: ({ changedCategories, changedServices }) => {
        console.log("onChange fired!", changedCategories, changedServices);
      },
      onModalReady: ({ modalName }) => {
        console.log("ready:", modalName);
      },
      onModalShow: ({ modalName }) => {
        console.log("visible:", modalName);
      },
      onModalHide: ({ modalName }) => {
        console.log("hidden:", modalName);
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
            ],
            reloadPage: true,
          },
          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {
                ReactGA.initialize("G-4Q5XE3FSQ2");
              },
              onReject: () => {
                ReactGA.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
              },
            },
          },
        },
      },
      language: {
        default: "cz",
        translations: {
          cz: {
            consentModal: {
              title: "Preference ochrany osobních údajů",
              description: `
              Než budete moci pokračovat na naši webovou stránku, potřebujeme váš souhlas.<br/>
              Pokud je vám méně než 16 let a chcete poskytnout souhlas s nepovinnými službami, musíte požádat své zákonné zástupce o povolení.<br/>
              Na naší webové stránce používáme soubory cookies a jiné technologie. Některé z nich jsou nezbytné, zatímco jiné nám pomáhají zlepšovat tuto webovou stránku a vaše uživatelské zkušenosti. Osobní údaje mohou být zpracovány (například IP adresy) za účelem personalizovaných reklam a obsahu nebo měření reklam a obsahu. Další informace o používání vašich údajů naleznete v našich <a href="/ochrana-osobnich-udaju" target="_blank">zásadách ochrany osobních údajů</a>. Není povinné souhlasit se zpracováním vašich údajů pro použití tohoto nabízeného produktu. Vaši volbu můžete kdykoli změnit nebo upravit v nastaveních. Je však možné, že kvůli individuálním nastavením nejsou k dispozici všechny funkce webové stránky.<br/>
              <hr style="border-top: 1px solid #ccc; margin: 10px 0;"/>
              <span style="font-size: 0.9em;">
                Některé služby zpracovávají osobní údaje v USA. S vaším souhlasem s používáním těchto služeb souhlasíte také se zpracováním vašich údajů v USA podle čl. 49 (1) písm. a GDPR. Soudní dvůr EU považuje USA za zemi s nedostatečnou úrovní ochrany osobních údajů podle standardů EU. Existuje například riziko, že americké úřady zpracují osobní údaje v rámci dohledových programů bez možnosti stěžování se pro občany EU.<br/>
              </span>
              `,
              acceptAllBtn: "Souhlasím se všemi cookies",
              acceptNecessaryBtn: "Přijmout pouze nezbytné cookies",
              showPreferencesBtn:
                "Individuální nastavení ochrany osobních údajů",
              closeIconLabel: "Zavřít a odmítnout vše",
              footer: `
                <a href="/impresum" target="_blank">Impresum</a>
                <a href="/ochrana-osobnich-udaju" target="_blank">Zásady ochrany osobních údajů</a>
              `,
            },
            preferencesModal: {
              title: "Preference ochrany osobních údajů",
              acceptAllBtn: "Souhlasím se všemi cookies",
              acceptNecessaryBtn: "Přijmout pouze nezbytné cookies",
              savePreferencesBtn: "Uložit aktuální nastavení",
              closeIconLabel: "Zavřít modální okno",
              serviceCounterLabel: "Služba|Služby",
              sections: [
                {
                  title: "Vaše preference ochrany osobních údajů",
                  description: `Zde naleznete přehled všech používaných cookies. Můžete udělit souhlas nebo zobrazit další informace a vybrat konkrétní cookies.`,
                },
                {
                  title: "Nezbytné",
                  description:
                    "Tyto cookies jsou nezbytné pro správné fungování webové stránky a nemohou být deaktivovány.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    caption: "Tabulka cookies",
                    headers: {
                      name: "Cookie",
                      domain: "Doména",
                      desc: "Popis",
                    },
                    body: [
                      {
                        name: "Levna_elektrina",
                        domain: location.hostname,
                        desc: "Tento cookie uchovává preference souhlasu uživatele s cookies na této webové stránce. Ukládá, zda uživatel přijal nebo odmítl určité kategorie cookies.",
                      },
                    ],
                  },
                },
                {
                  title: "Funkční",
                  description:
                    "Tyto cookies sbírají informace o tom, jak používáte naši webovou stránku. Všechny údaje jsou anonymizovány a nelze je použít k vaší identifikaci.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "Tabulka cookies",
                    headers: {
                      name: "Cookie",
                      domain: "Doména",
                      desc: "Popis",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: location.hostname,
                        desc: "Tento cookie používá Google Analytics k rozlišení uživatelů a omezení počtu požadavků. Pomáhá sledovat používání webové stránky a výkonnostní metriky.",
                      },
                      {
                        name: "_gid",
                        domain: location.hostname,
                        desc: "Tento cookie používá Google Analytics k rozlišení uživatelů. Ukládá a aktualizuje jedinečnou hodnotu pro každou navštívenou stránku.",
                      },
                    ],
                  },
                },
                {
                  title: "Další informace",
                  description:
                    'Pokud máte otázky týkající se naší politiky cookies a vašich možností, kontaktujte nás prosím na adrese <a href="mailto:info@levna-elektrina.com">info@levna-elektrina.com</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
