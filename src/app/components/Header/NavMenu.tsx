import { useState } from "react";
import { Link } from "react-scroll";

export default function NavMenu() {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const linkStyle = "w-9 h-1 rounded-lg mx-2 duration-300 bg-colors-purlpe";

  return (
    <>
      {/* backdrop */}
      {!showMenu && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-colors-greyLight opacity-20"
          onClick={handleMenu}
        ></div>
      )}
      <div className="md:mr-1">
        <ul
          className={`${
            showMenu && "hidden md:flex"
          } absolute md:relative right-0 top-0 rounded-l-xl px-12 py-9 md:py-0 md:pr-3 md:h-auto flex flex-col md:flex-row gap-16 md:gap-4 items-center justify-evenly text-2xl md:text-xl bg-colors-white dark:bg-colors-black animate-navMenu`}
        >
          <li className="nav-links">
            <span className="underline-hover">
              <Link
                to="aboutMe"
                smooth={true}
                duration={900}
                onClick={handleMenu}
              >
                Om Mig
              </Link>
            </span>
          </li>
          <li className="nav-links">
            <span className="underline-hover ">
              <Link
                to="projects"
                smooth={true}
                duration={1100}
                onClick={handleMenu}
              >
                Mina projekt
              </Link>
            </span>
          </li>
          <li className="nav-links">
            <span className="underline-hover ">
              <Link
                to="contact"
                smooth={true}
                duration={1300}
                onClick={handleMenu}
              >
                Kontakta mig
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div onClick={handleMenu} className="md:hidden flex flex-col gap-2 z-10">
        <div
          className={`${linkStyle} ${!showMenu && "rotate-45 translate-y-1"}`}
        ></div>
        <div className={`${linkStyle} ${!showMenu && "hidden"}`}></div>
        <div
          className={`${linkStyle} ${!showMenu && "-rotate-45 -translate-y-2"}`}
        ></div>
      </div>
    </>
  );
}
