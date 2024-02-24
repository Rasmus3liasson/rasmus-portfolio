"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const webShopRef = useRef(null);

  const isWebShopVisible = useIntersectionObserver(webShopRef);

  return (
    <div id="projects" className="flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-9 px-6">
        <h3 className="text-4xl">Mina Projekt</h3>
        <div className="flex flex-col lg:flex-row justify-between gap-10 px-3">
          <div
            className={`animate-start ${isWebShopVisible && "show-project"}`}
            ref={webShopRef}
          >
            <WebShop />
          </div>
        </div>
      </div>
    </div>
  );
}
