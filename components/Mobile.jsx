"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/sections";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathName = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="header flex justify-between p-4 bg-[#9b242d] gap-0">
      <Link href="/" className="flex items-center gap-2 md:py-2 ">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={70}
          height={40}
          className="rounded-full"
        />
      </Link>

      <nav className="flex gap-2">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="text-white" onClick={() => setIsSheetOpen(true)}>
            <Image
              src="/icons/menu.svg"
              alt="menuIcon"
              width={50}
              height={28}
              
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64 bg-[#9b242d] border-none">
            <ul className="header-nav_elements mt-8 space-y-8">
              {navLinks.map((item) => {
                const isActive = item.route === pathName;

                return (
                  <li
                    key={item.route}
                    className={`header-nav_element group ${
                      isActive ? "text-black font-bold" : ""
                    } p-4 flex items-center whitespace-nowrap text-white hover:text-white`}
                  >
                    <Link
                      className="header-link flex items-center gap-4 py-2"
                      href={item.route}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Image
                        src={item.icon}
                        alt={item.route}
                        width={28}
                        height={28}
                       
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default MobileNav;
