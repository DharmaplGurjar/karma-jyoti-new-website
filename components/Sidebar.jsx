"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/sections";
import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathName = usePathname(); // current m kha hai
  return (
    
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/images/logo.jpg"
            alt="Namelogo"
            width={100}
            height={0}
            className="rounded-full ml-16"
          />
        </Link>

        <nav className="sidebar-nav">
          {/* // agar koi sign in hai toh yhi dikhega verna nbai dikhe */}

          
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((item) => {
                const isActive = item.route === pathName;

                return (
                  <li
                    key={item.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-white text-black" : "text-grey-700"
                    }`}
                  >
                    <Link
                      className="sidebar-link flex items-center"
                      href={item.route}
                    >
                      <Image
                        src={item.icon}
                        alt={item.route}
                        width={28}
                        height={28}
                        className="bg-white"
                      />

                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((item) => {
                const isActive = item.route === pathName;

                return (
                  <li
                    key={item.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-700 text-white" : "text-grey-700"
                    }`}
                  >
                    <Link
                      className="sidebar-link flex items-center"
                      href={item.route}
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
          

          
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
