"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header
      id="header"
      className="flex justify-between items-center text-colors-darkPurple"
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
