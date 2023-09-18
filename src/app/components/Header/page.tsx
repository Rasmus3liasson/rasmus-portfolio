"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavMenu from "./NavMenu";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  // show header when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1) {
        setShowHeader(!showHeader);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`flex justify-between items-center fixed w-full top-0 animate-headerAnimation bg-colors-white dark:bg-colors-black dark:text-colors-white z-10 ${
        !showHeader && "hidden"
      }`}
    >
      <div
        onClick={(event) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="ml-6 text-xl"
      >
        <h1 className="cursor-pointer">Rasmus Eliasson</h1>
      </div>

      <nav className="flex p-4 items-center md:flex-row-reverse">
        <ThemeSwitch />
        <NavMenu />
      </nav>
    </header>
  );
}
