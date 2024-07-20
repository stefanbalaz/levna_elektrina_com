"use client";

import React from "react";
import Link from "next/link";
import { showConsentModal } from "./CookieConsent";

interface CookieConsentLinkProps {}

const CookieConsentLink: React.FC<CookieConsentLinkProps> = () => {
  return (
    <Link
      className="hover:opacity-75 font-yantramanav text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl"
      href="#"
      /* style={{ whiteSpace: "nowrap" }} */
      onClick={() => {
        showConsentModal();
      }}
    >
      Nastavení cookies
    </Link>
  );
};

export default CookieConsentLink;
