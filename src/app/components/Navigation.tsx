"use client";
import React from "react";
import { providers } from "../data/providers";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { IoReorderThreeSharp } from "react-icons/io5";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface NavigationProps {
  type: "header" | "";
  color?: string;
}

export default function Navigation({
  type,
  color,
}: NavigationProps): JSX.Element {
  const headerColorClass =
    type === "header" && color
      ? `text-${color} font-bold text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl`
      : "";
  const baseClasses =
    "hover:opacity-75 font-yantramanav text-base sm:text-base md:text-xl lg:text-base xl:text-xl 2xl:text-2xl";

  return (
    <>
      {type === "header" ? (
        <li className={twMerge(`${headerColorClass}`)}>
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="inline-flex items-center gap-1 rounded-sm focus:outline-none data-[hover]:opacity-75 data-[open]:opacity-75 data-[focus]:opacity-75">
                Dodavatelé
                <ChevronDownIcon className="size-4" />
              </MenuButton>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-20 mt-2 w-max origin-top-right rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {providers.map((provider) => (
                  <MenuItem key={provider.slug}>
                    {({ active }) => (
                      <Link
                        href={`/dodavatel/${provider.slug}`}
                        className={`block px-4 py-2 text-sm text-gray-700 font-yantramanav font-medium text-base sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl ${
                          active ? "bg-gray-100" : ""
                        } ${headerColorClass}`}
                      >
                        {provider.name}
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
        </li>
      ) : (
        <li className={twMerge(`${baseClasses} ${headerColorClass}`)}>
          <Link href="/dodavatel">Dodavatelé</Link>
        </li>
      )}

      <li className={twMerge(`${baseClasses} ${headerColorClass}`)}>
        <Link href="/proces-zmeny">Proces změny</Link>
      </li>
      <li className={twMerge(`${baseClasses} ${headerColorClass}`)}>
        <Link href="/duvody-zmeny">Důvody změny</Link>
      </li>
      <li className={twMerge(`${baseClasses} ${headerColorClass}`)}>
        <Link href="/cena-elektriny">Cena elektřiny</Link>
      </li>
    </>
  );
}
