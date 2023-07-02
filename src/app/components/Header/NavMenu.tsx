import { Link } from "react-scroll";
import React, { useState } from "react";

export default function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* backdrop */}
      {!showMenu && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-colors-darker opacity-40"
          onClick={handleMenu}
        ></div>
      )}
      <div>
        <ul
          className={`${
            showMenu && "hidden md:flex"
          } bg-colors-darker md:bg-colors-white absolute md:relative right-0 top-0 rounded-l-xl px-12 h-2/4 md:h-auto flex flex-col md:flex-row md:gap-4 items-center justify-evenly text-2xl md:text-xl `}
        >
          <li className="nav-links">
            <Link
              to="aboutMe"
              smooth={true}
              duration={900}
              onClick={handleMenu}
            >
              Om mig
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="projects"
              smooth={true}
              duration={1100}
              onClick={handleMenu}
            >
              Mina projekt
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="contact"
              smooth={true}
              duration={1300}
              onClick={handleMenu}
            >
              Kontakta mig
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleMenu} className="md:hidden flex flex-col gap-2 z-10">
        <div
          className={`w-9 h-1 rounded-lg bg-colors-darkPurple mx-2 duration-300 ${
            !showMenu && "rotate-45 translate-y-1"
          }`}
        ></div>
        <div
          className={`w-9 h-1 rounded-lg bg-colors-darkPurple mx-2 duration-300 ${
            !showMenu && "hidden"
          }`}
        ></div>
        <div
          className={`w-9 h-1 rounded-lg bg-colors-darkPurple mx-2 duration-300 ${
            !showMenu && "-rotate-45 -translate-y-2"
          }`}
        ></div>
      </div>
    </>
  );
}
