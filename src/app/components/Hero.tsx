import Image from "next/image";
import Link from "next/link";
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
    </section>
  );
}
