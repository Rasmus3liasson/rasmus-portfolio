import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Wordle() {
  return (
    <section className="container container-scroll h-auto flex items-center justify-center w-full py-6">
      <div className="w-full flex items-center flex-col justify-center relative group">
        <p className="text-3xl mb-6">Worlde</p>
        <div>
          <Image
            src={"/wordle-image.png"}
            alt="project of a wordle clone I created"
            width={700}
            height={700}
            className="hover:opacity-75"
          />

          <Link href="https://github.com/Rasmus3liasson/Wordle/tree/main/wordle-game">
            <div className="absolute content-scroll inset-0 opacity-0 bg-colors-inputField group-hover:opacity-90 duration-200 flex flex-col py-2 text-colors-black rounded-lg">
              <div className="mx-6">
                <div>
                  <article className="font-semibold">
                    Detta är en klon utav spelat Worlde. Efter man har gissat
                    det rätta ordet så får man möjlighet att skicka in sitt
                    resultat till en highscore lista.
                  </article>
                </div>
                <div className="flex-flex-col items-start mt-5">
                  <p className="overflow-hidden font-semibold">Tekniker:</p>
                  <ul className="flex flex-col items-start justify-start">
                    <li> ● React</li>
                    <li> ● MongoDb</li>
                    <li> ● Tailwind</li>
                    <li> ● TypeScript</li>
                    <li> ● Jest</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
