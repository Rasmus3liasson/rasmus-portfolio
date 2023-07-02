"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [headingText, setHeadingText] = useState("");

  useEffect(() => {
    const welcomeText = "  Hejsan! Mitt namn är Rasmus Eliasson";
    let index = 0;

    const interval = setInterval(() => {
      setHeadingText((text) => text + welcomeText[index]);
      index++;

      if (index === welcomeText.length - 1) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-colors-darker h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center md:flex-row text-colors-darkPurple">
        <div className="w-96">
          <h2 className="text-xl text-center">Systemutvecklare</h2>
          <h3 className="text-2xl font-semibold text-center">{headingText}</h3>

          <button></button>
        </div>

        <div>
          <Image
            className="rounded-full w-36 mt-16 shadow-3xl"
            src={"/profile-picture.JPG"}
            width={200}
            height={200}
            alt="En
               bild på mig"
          />
        </div>
      </div>
    </section>
  );
}
