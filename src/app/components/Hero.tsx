"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [headingText, setHeadingText] = useState("");
  const [scrollIndicator, setScrollIndicator] = useState(false);
  const [arrowState, setArrowState] = useState(false);

  useEffect(() => {
    const welcomeText = "   Hejsan! Mitt namn är Rasmus Eliasson";
    let index = 0;

    const interval = setInterval(() => {
      setHeadingText((text) => text + welcomeText[index]);
      index++;

      if (index === welcomeText.length - 1) {
        clearInterval(interval);
        setScrollIndicator(true);
      }
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 1) {
        setArrowState(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="mt-[1px] h-screen w-full flex justify-center items-center bg-colors-white dark:bg-colors-black">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-96">
          <h2 className="text-xl text-center">Systemutvecklare</h2>
          <h3 className="text-2xl font-semibold text-center">{headingText}</h3>
        </div>

        <div className="scale-75 md:scale-100">
          <Image
            className="mt-16 shadow-3xl rounded-xl"
            src={"/profile-picture.jpg"}
            width={300}
            height={300}
            alt="En bild på mig"
          />
        </div>
        {scrollIndicator && (
          <Link to="aboutMe" smooth={true} duration={1100}>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <Image
                className={`animate-arrowAppear cursor-pointer ${
                  arrowState && "animate-arrowDisapear"
                }`}
                src={"/icons/arrow.svg"}
                alt={"arrow"}
                width={30}
                height={30}
              />
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
