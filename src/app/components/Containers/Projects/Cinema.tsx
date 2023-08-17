import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cinema() {
  return (
    <section className="container container-scroll h-auto flex items-center justify-center w-full ">
      <div className="w-full flex items-center flex-col justify-center relative group py-6">
        <p className="text-3xl mb-6">Biograf</p>
        <div>
          <Image
            src={"/cinema-image.png"}
            alt="project of a cinema booking site"
            width={700}
            height={700}
            className="hover:opacity-75"
          />

          <Link href="#">
            <div className="absolute content-scroll inset-0 opacity-0 bg-colors-inputField group-hover:opacity-90 duration-200 flex flex-col py-2 text-colors-black rounded-lg">
              <div className="mx-6">
                <div>
                  <article className="font-semibold">
                    Detta är en biograf sida som jag bidragit till i ett
                    gruppprojekt under min utbildning har byggt där man kan boka
                    en film samt göra en platsbokning utav stolar som man vill
                    boka för enskilt film tillfälle
                  </article>
                </div>
                <div className="flex-flex-col items-start mt-5">
                  <p className="overflow-hidden font-semibold">Tekniker:</p>
                  <ul className="flex flex-col items-start justify-start">
                    <li> ● Next (pages router)</li>
                    <li> ● MongoDb Atlas</li>
                    <li> ● Sass</li>
                    <li> ● TypeScript</li>
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
