// import * as React from "react"
// import Link from "next/link"

// import { NavItem } from "@/types/nav"
// import { siteConfig } from "@/config/site"
// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
// import onlyLogo from "../public/onlyLogo.svg"
// import Image from "next/image"


// interface MainNavProps {
//   items?: NavItem[]
// }

// export function MainNav({ items }: MainNavProps) {
//   return (
//     <div className="flex h-fit gap-6 md:gap-10">
//       <Link href="/" className="flex items-center space-x-2">
//         <Image src={onlyLogo} priority height={100} width={100} alt="logo" />
//         <span className="inline-block text-2xl font-bold md:text-4xl">{siteConfig.name}</span>
//       </Link>
//       {/* nav items */}
//       {items?.length ? (
//         <nav className="flex gap-6">
//           {items?.map(
//             (item, index) =>
//               item.href && (
//                 <Link
//                   key={index}
//                   href={item.href}
//                   className={cn(
//                     "flex items-center text-lg font-medium text-muted-foreground",
//                     item.disabled && "cursor-not-allowed opacity-80"
//                   )}
//                 >
//                   {item.title}
//                 </Link>
//               )
//           )}
//         </nav>
//       ) : null}
//     </div>
//   )
// }


"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import onlyLogo from "../public/onlyLogo.svg";
import { Icons } from "@/components/icons";
import { NavItem } from "@/types/nav";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mr-0 flex h-fit w-full flex-wrap items-center justify-between gap-6 md:mr-5 md:flex-nowrap md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={onlyLogo} priority height={100} width={100} alt="logo" />
        <span className="flex flex-col text-xl font-bold md:text-4xl">
          {siteConfig.name}
          <span className="hidden text-sm tracking-widest md:block">Sales & Marketing</span>
        </span>
      </Link>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="z-50 block focus:outline-none md:hidden"
        aria-label="Toggle Menu"
      >
        <CgMenuGridO size={25} />
      </button>
      {/* Nav items */}
      {(items?.length && !isMenuOpen) ? (
        <nav className="hidden gap-6 md:flex">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 h-screen overflow-hidden bg-black shadow-md md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <button
              onClick={toggleMenu}
              className="z-50 flex w-full justify-end focus:outline-none md:hidden"
              aria-label="Toggle Menu"
            >
              <AiOutlineClose size={50} className="text-red-500" />
            </button>
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-5 text-lg font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={toggleMenu}
                  >
                    {item.title} <FaLink className="text-primary" size={25}/>
                  </Link>
                )
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
