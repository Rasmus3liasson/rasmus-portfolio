"use client";

import Link from "next/link";
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
      className={`flex justify-between items-center text-colors-darkPurple fixed w-full top-0 animate-headerAnimation ${
        !showHeader && "hidden"
      }`}
    >
      <div className="h1-name ml-6 text-xl">
        <Link href={"#header"}>
          <h1>Rasmus Eliasson</h1>
        </Link>
      </div>

      <nav className="flex p-4 items-center md:flex-row-reverse">
        <ThemeSwitch />
        <NavMenu />
      </nav>
    </header>
  );
}
