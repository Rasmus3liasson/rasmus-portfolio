import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <section className="container mt-12">
      <h3 className="text-4xl text-center">Kontakt</h3>
      <div>
        <p className="mt-5 mb-5">Är ute efter en väg in i branchen vare sig</p>
      </div>

      <nav>
        <ul className="flex justify-center scale-105 gap-5">
          <a
            className="hover-contact-icon"
            href="https://www.instagram.com/rasmuseeliasson/"
          >
            <Image
              src={"/icons/instagram.svg"}
              alt="instagram"
              width={50}
              height={50}
            />
          </a>
          <a
            className="hover-contact-icon"
            href="https://www.linkedin.com/in/rasmus-eliasson-290789247/"
          >
            <Image
              src={"/icons/linkedin.svg"}
              alt="linkedIn"
              width={50}
              height={50}
            />
          </a>
          <a
            className="hover-contact-icon"
            href="https://github.com/Rasmus3liasson?tab=repositories"
          >
            <Image
              src={"/icons/github.svg"}
              alt="github"
              width={50}
              height={50}
            />
          </a>
          <a className="hover-contact-icon" href="mailto:ras.muse@hotmail.com">
            <Image src={"/icons/mail.svg"} alt="mail" width={50} height={50} />
          </a>
        </ul>
      </nav>
    </section>
  );
}
