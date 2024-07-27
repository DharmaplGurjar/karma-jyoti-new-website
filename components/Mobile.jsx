"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/sections";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathName = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <ul className="header-nav_elements mt-8 space-y-12">
              {navLinks.map((item, index) => {
                const isActive = item.route === pathName;

                if (item.label === "Team") {
                  return (
                    <li key={index} className="relative w-full" ref={dropdownRef}>
                      <button
                        onClick={toggleDropdown}
                        className={`header-nav_element group flex items-center justify-between w-full px-4 py-2 rounded-md ${
                          isActive ? "bg-white text-black" : "text-white"
                        } hover:bg-white hover:rounded-xl hover:text-black transition-all duration-300 border rounded-3xl `}
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={item.icon}
                            alt={item.route}
                            width={24}
                            height={24}
                          />
                          {item.label}
                        </div>
                        <span>{isDropdownOpen ? "▲" : "▼"}</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="mt-2 bg-white  shadow-lg rounded-xl ">
                          {item.subLinks.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="header-nav_element group text-black transition-all duration-300"
                            >
                              <Link
                                className="header-link flex items-center p-2 pl-8 gap-4"
                                href={subItem.route}
                                onClick={() => {
                                  setIsDropdownOpen(false);
                                  setIsSheetOpen(false);
                                }}
                              >
                                <Image
                                  src={subItem.icon}
                                  alt={subItem.route}
                                  width={20}
                                  height={20}
                                />
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    className={`header-nav_element group flex items-center w-full px-4 py-2 rounded-md ${
                      isActive ? "bg-white rounded-3xl text-black" : "text-white"
                    } hover:bg-white hover:rounded-3xl hover:text-black transition-all duration-300`}
                  >
                    <Link
                      className="header-link flex items-center gap-4 w-full"
                      href={item.route}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Image
                        src={item.icon}
                        alt={item.route}
                        width={24}
                        height={24}
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