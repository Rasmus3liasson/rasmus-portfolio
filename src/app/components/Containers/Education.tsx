"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Education() {
  const [toggleSlider, setToggleSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
  };

  const toggleSliderFunc = (index: SetStateAction<number>) => {
    setSelectedImageIndex(index);
    setToggleSlider(!toggleSlider);
  };

  const images = ["/ExamenBild1-downgraded.png", "/ExamenBild2-downgraded.png"];

  return (
    <>
      <section className="container mt-12">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl">Utbildning</h3>
          <p className="mt-5 text-xl">
            Systemutvecklare i Java och JavaScript <br />
            Höst 2022 - Vår 2024
          </p>
        </div>

        <div className="flex items-center justify-center w-full">
          <Slider
            className="hover:scale-101 transition-all ease-in-out duration-200 shadow-container rounded-lg my-6 lg:w-72 w-52 mx-auto"
            {...sliderSettings}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full"
                onClick={() => toggleSliderFunc(index)}
              >
                <Image
                  className="rounded-lg cursor-pointer"
                  src={image}
                  alt="education-images"
                  width={700}
                  height={700}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal */}
        {toggleSlider && (
          <div
            onClick={() => setToggleSlider(false)}
            className="fixed top-0 right-0 left-0 w-full h-full flex justify-center items-center z-10"
          >
            <div className="shadow-lg flex justify-center items-center relative rounded-lg mx-4 lg:scale-100 md:scale-75 scale-50">
              <Image
                className="rounded-lg max-w-lg"
                src={selectedImageIndex === 0 ? images[0] : images[1]}
                alt="education-images"
                width={700}
                height={700}
              />
              <Image
                className="absolute top-2 right-2 m-4 cursor-pointer"
                onClick={() => setToggleSlider(false)}
                src={"/icons/close.svg"}
                alt="close icon"
                width={30}
                height={30}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
