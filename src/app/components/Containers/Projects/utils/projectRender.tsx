
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
  techniques: string[];
}

export default function projectRender({
  title,
  imageSrc,
  altText,
  description,
  techniques,
}: Project) {
  return (
    <section className="container container-scroll h-auto flex items-center justify-center w-full m-0 ">
      <div className="w-full flex items-center flex-col justify-center relative group py-6">
        <p className="text-3xl mb-6">{title}</p>
        <div>
          <Image
            src={imageSrc}
            alt={altText}
            width={700}
            height={700}
            className="hover:opacity-75"
          />

          <Link href="https://github.com/Rasmus3liasson/webshop">
            <div className="absolute content-scroll inset-0 opacity-0 bg-colors-inputField group-hover:opacity-90 duration-200 flex flex-col py-2 text-colors-black rounded-lg">
              <div className="mx-6">
                <div>
                  <article className="font-semibold">{description}</article>
                </div>
                <div className="flex-flex-col items-start mt-5">
                  <p className="overflow-hidden font-semibold">Tekniker:</p>
                  <ul className="flex flex-col items-start justify-start">
                    {techniques.map((technique, index) => (
                      <li key={index}> ● {technique}</li>
                    ))}
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
