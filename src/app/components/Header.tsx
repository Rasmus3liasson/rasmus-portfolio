"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [themeIcon, setThemeIcon] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleThemeIcon = () => {
    setThemeIcon(!themeIcon);
  };

  return (
    <header className="flex justify-between items-center text-colors-darkPurple">
      <div className="h1-name ml-6 text-xl">
        <Link href={"#"}>
          <h1>Rasmus Eliasson</h1>
        </Link>
      </div>

      <nav className="flex p-4 items-center">
        <div className="flex items-center space-x-2 text-colors-darkPurple border-2 border-r-colors-purlpe rounded-2xl p-1 shadow-md">
          <div
            className="flex"
            onClick={() => {
              handleThemeIcon();
              handleTheme();
            }}
          >
            <Image
              src={"/icons/light-mode.svg"}
              alt="button for lightmode"
              width={20}
              height={20}
            />

            <span
              className={`w-5 h-5 rounded-full bg-colors-darker relative duration-200 ${
                !themeIcon ? "-right-5" : "right-5"
              }`}
            ></span>
            <Image
              src={"/icons/dark-mode.svg"}
              alt="button for darkmode"
              width={20}
              height={20}
            />
          </div>
        </div>

        <ul className="hidden sm:flex justify-center items-center">
          <li>
            <Link href=""></Link>Om mig
          </li>
          <li>
            <Link href=""></Link>Mina project
          </li>
          <li>
            <Link href=""></Link>Kontakta mig
          </li>
        </ul>
        <div id="menu-icon">
          <div className="line1 w-9 h-1 rounded-lg bg-colors-darkPurple mx-2 duration-300 translate-y-4"></div>
          <div className="line2 w-9 h-1 rounded-lg bg-colors-darkPurple mx-2 duration-300"></div>
          <div className="line3 w-9 h-1 rounded-lg bg-colors-darkPurple mx-2 duration-300 -translate-y-4"></div>
        </div>
        <div className="">
          <div>
            <ul
              id="mobile-nav"
              className="p-4 md:p-0 mt-4 md:hidden w-full border border-colors-darkPurple rounded-lg"
            >
              <li className="my-4">
                <Link href="#" aria-current="page">
                  Om Mig
                </Link>
              </li>
              <li className="my-4">
                <Link href="#">Mina Projekt</Link>
              </li>
              <li className="my-4">
                <Link href="#">Kontakta Mig</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
