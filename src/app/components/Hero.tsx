import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="mx-5 mt-16">
      <div className="flex flex-col md:flex-row-reverse items-center text-colors-darkPurple">
        <h2 className="text-4xl text-center my-5">Rasmus Eliasson</h2>
        <h3 className="text-2xl text-center">
          Strävan efter att jobba inom systemutveckling
        </h3>
        <Image
          className="rounded-full w-36 mt-16 shadow-3xl"
          src={"/profile-picture.JPG"}
          width={200}
          height={200}
          alt="En
               bild på mig"
        />
      </div>
      <div className="flex justify-center mt-28 mb-14">
        <a
          className="text-colors-white bg-gradient-to-r from-colors-purlpe to-colors-darkPurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple dark:focus:ring-purple shadow-lg shadow-purple/50 dark:shadow-lg dark:shadow-purple/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 duration-200 ease-in hover:scale-103"
          href="mailto:ras.muse@hotmail.com"
        >
          Kontakta mig
        </a>
      </div>
    </section>
  );
}
