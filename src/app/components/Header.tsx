import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-colors-darkPurple">
      <div className="h1-name ml-6 text-xl">
        <a href="#">
          <h1>Rasmus Eliasson</h1>
        </a>
      </div>

      <nav className="flex p-4 items-center">
        <div className="flex items-center space-x-2 text-colors-darkPurple">
          <input type="checkbox" id="toggle" className="hidden" />
          <label
            htmlFor="toggle"
            className="relative flex items-center cursor-pointer"
          >
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="toggle-dot absolute w-6 h-6 bg-white inset-y-0 left-0"></div>
            <i className="toggle-icon moon fas fa-moon absolute w-4 h-4 fill-current mt-1 ml-1"></i>
            <i className="toggle-icon sun fas fa-sun hidden absolute w-4 h-4 fill-current mt-1 ml-1 translate-x-4"></i>
          </label>
        </div>

        <ul className="hidden sm:flex justify-center items-center">
          <li>
            <a href=""></a>Om mig
          </li>
          <li>
            <a href=""></a>Mina project
          </li>
          <li>
            <a href=""></a>Kontakta mig
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
                <a href="#" aria-current="page">
                  Om Mig
                </a>
              </li>
              <li className="my-4">
                <a href="#">Mina Projekt</a>
              </li>
              <li className="my-4">
                <a href="#">Kontakta Mig</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
