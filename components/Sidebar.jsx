"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "/sections";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const dropdownRefs = useRef({});

  const toggleDropdown = (label) => {
    setIsDropdownOpen((prevState) => ({
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
        setIsDropdownOpen((prevState) => ({
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
    <aside className="sidebar bg-gray-100 p-4 rounded-md shadow-lg w-64">
      <div className="flex flex-col items-center gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/images/logo.jpg"
            alt="Namelogo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>

        <nav className="sidebar-nav w-full">
          <ul className="sidebar-nav_elements flex flex-col gap-2 w-full ">
            {navLinks.map((item, index) => {
              const isActive = item.route === pathName;

              if (item.subLinks) {
                return (
                  <li
                    key={index}
                    className="relative w-full"
                    ref={(el) => (dropdownRefs.current[item.label] = el)}
                  >
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`sidebar-nav_element group flex items-center justify-between w-full px-4 py-2 rounded-md ${
                        isActive ? "bg-white text-black" : "text-white border"
                      } hover:bg-white hover:text-black transition-all duration-300`}
                    >
                      <div className="flex items-center gap-2 lg:ml-2">
                        <Image
                          src={item.icon}
                          alt={item.route}
                          width={24}
                          height={24}
                          // className="bg-white"
                        />
                        {item.label}
                      </div>
                      <span>{isDropdownOpen[item.label] ? "▲" : "▼"}</span>
                    </button>
                    {isDropdownOpen[item.label] && (
                      <ul className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md">
                        {item.subLinks.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="sidebar-nav_element group text-gray-700 transition-all duration-300 "
                          >
                            <Link
                              className="sidebar-link flex items-center p-2 pl-8 "
                              href={subItem.route}
                              onClick={() =>
                                setIsDropdownOpen((prevState) => ({
                                  ...prevState,
                                  [item.label]: false,
                                }))
                              }
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
                  className={`sidebar-nav_element   group flex items-center w-full px-4 py-0 rounded-md ${
                    isActive ? "bg-white text-black" : "text-white"
                  } hover:bg-white hover:text-black transition-all duration-300 `}
                >
                  <Link
                    className="sidebar-link flex items-center gap-2 w-full "
                    href={item.route}
                  >
                    <Image
                      src={item.icon}
                      alt={item.route}
                      width={24}
                      height={24}
                      // className="bg-white"
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
