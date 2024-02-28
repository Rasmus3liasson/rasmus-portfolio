"use client";

import Image from "next/image";
import { useState } from "react";

export default function Education() {
  const [showPdf, setShowPDF] = useState(false);

  return (
    <>
      <section className="container mt-12">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl">Utbilding</h3>
          <p className="mt-5 text-xl">
            Systemutvecklare i Java och JavaScript <br />
            Höst 2022 - Vår 2024
          </p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Image
            onClick={() => setShowPDF(!showPdf)}
            className="hover-contact-icon"
            src={"/icons/pdf.png"}
            alt="pdf"
            width={40}
            height={40}
          />
        </div>
      </section>

      {/* pdf modal */}
      {showPdf && (
        <div className="fixed top-0 left-0 w-full h-full bg-colors-black bg-opacity-50 flex justify-center items-center z-10 animate-pdfAppear">
          <div className="shadow-lg flex justify-center items-center relative px-2">
            <Image
              className="rounded-lg"
              src={"/education-certificate.jpg"}
              alt="pdf"
              width={500}
              height={500}
            />

            <Image
              className="absolute top-0 right-0 m-4"
              onClick={() => setShowPDF(!showPdf)}
              src={"/icons/close.svg"}
              alt="close icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      )}
    </>
  );
}
