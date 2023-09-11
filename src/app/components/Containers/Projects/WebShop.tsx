import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WebShop() {
  return (
    <section className="container container-scroll h-auto flex items-center justify-center w-full m-0 ">
      <div className="w-full flex items-center flex-col justify-center relative group py-6">
        <p className="text-3xl mb-6">Web Shop</p>
        <div>
          <Image
            src={"/web-shop-image.png"}
            alt="project of a cinema booking site"
            width={700}
            height={700}
            className="hover:opacity-75"
          />

          <Link href="https://webshopclothes.netlify.app">
            <div className="absolute content-scroll inset-0 opacity-0 bg-colors-inputField group-hover:opacity-90 duration-200 flex flex-col py-2 text-colors-black rounded-lg">
              <div className="mx-6">
                <div>
                  <article className="font-semibold">
                    Detta är en webshop som låter användaren handla kläder.
                    Datan som visas med kläderna kommer från ett api av HM. Som
                    användare kan man även skapa ett konto med hjläp av Firebase
                    med antingen egna uppgifter eller med ett google konto. Som
                    sparar uppgiftera vid senare tillfälle vid betalningen som
                    skapades med hjälp utav Stripe.
                  </article>
                </div>
                <div className="flex-flex-col items-start mt-5">
                  <p className="overflow-hidden font-semibold">Tekniker:</p>
                  <ul className="flex flex-col items-start justify-start">
                    <li> ● Next (app router)</li>
                    <li> ● Firebase</li>
                    <li> ● Tailwind</li>
                    <li> ● TypeScript</li>
                    <li> ● Stripe</li>
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
