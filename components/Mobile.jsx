"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "/sections";
import { Sheet, SheetContent, SheetTrigger } from "/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathName = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const dropdownRefs = useRef({});

  const toggleDropdown = (label) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const handleClickOutside = (event) => {
    Object.keys(dropdownRefs.current).forEach((key) => {
      if (
        dropdownRefs.current[key] &&
        !dropdownRefs.current[key].contains(event.target)
      ) {
        setDropdowns((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    });
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
          <SheetContent className="sheet-content sm:w-64 bg-[#9b242d] border-none ">
            <ul className="header-nav_elements mt-16 space-y-12 ">
              {navLinks.map((item, index) => {
                const isActive = item.route === pathName;

                if (item.subLinks) {
                  return (
                    <li
                      key={index}
                      className="relative w-full "
                      ref={(el) => (dropdownRefs.current[item.label] = el)}
                    >
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`header-nav_element group flex items-center justify-between w-full px-4 py-2 rounded-full ${
                          isActive ? "bg-white text-black rounded-3xl" : "text-white"
                        } hover:bg-white hover:rounded-full hover:text-black transition-all duration-300 border rounded-3xl `}
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
                        <span>{dropdowns[item.label] ? "▲" : "▼"}</span>
                      </button>
                      {dropdowns[item.label] && (
                        <ul className="mt-2 bg-white shadow-lg rounded-xl">
                          {item.subLinks.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="header-nav_element group text-black transition-all duration-300"
                            >
                              <Link
                                className="header-link flex items-center p-2 pl-8 gap-4"
                                href={subItem.route}
                                onClick={() => {
                                  setDropdowns((prevState) => ({
                                    ...prevState,
                                    [item.label]: false,
                                  }));
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
                    className={`header-nav_element group flex items-center w-full px-4 py-2 rounded-full ${
                      isActive ? "bg-white rounded-full text-black" : "text-white"
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
