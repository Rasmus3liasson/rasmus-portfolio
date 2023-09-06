"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  // send to preferred mail client
  const handleMailInput = () => {
    const email = "ras.muse@hotmail.com";
    const subject = `Från: ${firstName} ${lastName} ${organisation}`;

    const mailTo = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    setButtonClicked(true);

    if (firstName && lastName && message !== "") {
      window.location.href = mailTo;
    }
  };

  function errorBorder(inputValue: string) {
    if (buttonClicked && inputValue === "") {
      return "border-2 border-colors-red";
    }
  }
  return (
    <section id="contact" className="container mt-12">
      <h3 className="text-4xl text-center">Kontakt</h3>

      <form
        className="flex justify-center items-center my-8 flex-col"
        action=""
      >
        <div className="md:flex items-center gap-6 md:gap-12">
          <div className="flex flex-col gap-9 md:gap-12">
            <div>
              <input
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                className={`${errorBorder(firstName)} input`}
                autoComplete="on"
                type="text"
                required
                placeholder="Förnamn:"
              />
            </div>
            <div>
              <input
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                className={`${errorBorder(lastName)} input`}
                autoComplete="on"
                placeholder="Efternamn:"
                required
              />
            </div>
            <div>
              <input
                onChange={(event) => {
                  setOrganisation(event.target.value);
                }}
                className="input"
                autoComplete="on"
                placeholder="Organisation *"
              />
              <p className="text-sm italic text-colors-greyLight justify-start flex ml-6 md:ml-0 mt-2">
                * inte nödvändligt
              </p>
            </div>
          </div>
          <div className="mt-8 mb-6 ">
            <textarea
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className={`py-1 px-2 rounded-xl text-colors-black bg-colors-inputField shadow-lg ${errorBorder(
                message
              )}`}
              cols={30}
              rows={8}
              placeholder="Ditt Meddelande:"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handleMailInput();
          }}
          className="text-colors-white bg-gradient-to-r from-colors-purlpe dark:from-colors-black to-colors-darkPurple dark:to-colors-darkPurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple dark:focus:ring-purple shadow-lg shadow-purple/50 dark:shadow-lg dark:shadow-purple/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all ease-in-out duration-200 hover:scale-103 md:w-52 md:text-lg"
        >
          Skicka
        </button>
      </form>

      <nav>
        <p className="mb-2 text-lg">Andra kontaktvägar</p>

        <ul className="flex justify-center scale-105 gap-5">
          <li>
            <Link href="https://www.instagram.com/rasmuseeliasson/">
              <Image
                className="hover-contact-icon"
                src={"/icons/instagram.svg"}
                alt="instagram"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rasmus-eliasson-290789247/">
              <Image
                className="hover-contact-icon"
                src={"/icons/linkedin.svg"}
                alt="linkedIn"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Rasmus3liasson">
              <Image
                className="hover-contact-icon"
                src={"/icons/github.svg"}
                alt="github"
                width={50}
                height={50}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
