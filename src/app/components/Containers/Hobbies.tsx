import Image from "next/image";
import React from "react";

export default function Hobbies() {
  return (
    <section className="container -mt-32">
      <h3 className="text-4xl text-center">Mina Intressen</h3>

      <div>
        <div className="flex justify-center mt-4 space-x-16">
          <Image
            src={"/icons/coffee.svg"}
            alt="coffe icon"
            width={50}
            height={50}
            className="svg-icon fill-colors-white"
          />
          <Image
            src={"/icons/gym.svg"}
            alt="gym training"
            width={50}
            height={50}
            className="svg-icon"
          />
          <Image
            src={"/icons/chating.svg"}
            alt="people chating"
            width={50}
            height={50}
            className="svg-icon"
          />
        </div>
      </div>
    </section>
  );
}
