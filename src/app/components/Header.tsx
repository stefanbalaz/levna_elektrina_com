"use client";

import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="
        w-full mx-auto
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
        flex items-center justify-between flex-wrap lg:flex-nowrap
        pt-2 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 
        mb-3 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10
        "
      >
        <h1 className="flex row font-alteHaasGrotesk font-extraStrong text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <Link href="/">
            <Logo />
          </Link>
        </h1>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border-2 rounded text-blue border-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              stroke="blue"
              strokeWidth="2"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {isOpen ? (
          <nav
            className="
          font-yantramanav
          w-full block flex-grow lg:flex lg:items-center lg:w-auto
          "
          >
            <div className="text-sm lg:flex-grow text-right lg:ml-auto">
              <ul
                className="
                  lg:flex flex-wrap lg:flex-row lg:justify-end 
                  font-alteHaasGrotesk font-medium 
                  gap-x-9 
                  text-base sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl
                  "
              >
                <Navigation type="header" color="green" />
              </ul>
            </div>
          </nav>
        ) : (
          <nav className="font-yantramanav font-medium hidden lg:block justify-end">
            <ul className="flex flex-wrap lg:row justify-end gap-x-9 text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl">
              <Navigation type="header" color="green" />
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
