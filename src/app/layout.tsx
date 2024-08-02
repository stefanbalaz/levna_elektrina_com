import type { Metadata } from "next";
import localFont from "next/font/local";
//import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
//import { GoogleAnalytics } from "@next/third-parties/google";
//import { GoogleTagManager } from "@next/third-parties/google";

//const inter = Inter({ subsets: ["latin"] });

const grotesk = localFont({
  src: [
    {
      path: "../pages/fonts/AlteHaasGroteskRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../pages/fonts/AlteHaasGroteskBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../pages/fonts/AlteHaasGroteskBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-alteHaasGrotesk",
});

const lora = localFont({
  src: [
    {
      path: "../pages/fonts/LoraRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../pages/fonts/LoraMedium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../pages/fonts/LoraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lora",
});

const yantramanav = localFont({
  src: [
    {
      path: "../pages/fonts/YantramanavRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yantramanav",
});

export const metadata: Metadata = {
  title: {
    default: "Levná Elektřina",
    template: "%s - Levná Elektřina",
  },
  description:
    "Srovnej ceny elektřiny pohodlně a rychle, změň dodavatele online zdarma a užívej úspor s levnějším tarifem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cz"
      //  className={`${grotesk.variable} ${lora.variable} ${yantramanav.variable} ${inter.className}`}
      className={`${grotesk.variable} ${lora.variable} ${yantramanav.variable}`}
    >
      <body>
        <Header />
        <div className="w-full mx-auto xl:w-11/12 ">
          <main className="font-yantramanav">{children}</main>
        </div>

        <CookieConsent />
        <Footer eMail="info@levna-elektrina.com" />
      </body>
      {/*  <GoogleTagManager gtmId="GTM-WLGCNM8K" />
      <GoogleAnalytics gaId="G-4Q5XE3FSQ2" /> */}
    </html>
  );
}
