"use client";

import React, { useRef, useEffect, useState } from "react";
import Wordle from "./Wordle";
import Cinema from "./Cinema";
import WebShop from "./WebShop";

function useIntersectionObserver(ref: React.RefObject<Element>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const windowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (ref.current) {
      windowObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        windowObserver.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}

export default function Projects() {
  const wordleRef = useRef(null);
  const cinemaRef = useRef(null);
  const webShopRef = useRef(null);

  const isWordleVisible = useIntersectionObserver(wordleRef);
  const isCinemaVisible = useIntersectionObserver(cinemaRef);
  const isWebShopVisible = useIntersectionObserver(webShopRef);

  return (
    <div id="projects" className="flex items-center justify-center bg-red">
      <div className="container flex flex-col items-center justify-center gap-9">
        <h3 className="text-4xl">Mina Projekt</h3>
        <div
          className={`animate-start ${isWebShopVisible && "show-project"}`}
          ref={webShopRef}
        >
          <WebShop />
        </div>
        <div
          className={`animate-start ${isWordleVisible && "show-project"}`}
          ref={wordleRef}
        >
          <Wordle />
        </div>
        <div
          className={`animate-start ${isCinemaVisible && "show-project"}`}
          ref={cinemaRef}
        >
          <Cinema />
        </div>
      </div>
    </div>
  );
}
