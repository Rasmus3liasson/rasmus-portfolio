import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");
  const [themeIcon, setThemeIcon] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      setThemeIcon(true);
    }
  }, []);

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
    <>
      <div className="flex items-center border-2 border-colors-darkPurple rounded-2xl p-1 shadow-md cursor-pointer">
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
    </>
  );
}
