import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;

  description: string;
  techniques: string[];
  githubLink: string;
  deployedLink?: string;
}

export default function projectRender({
  title,
  description,
  techniques,
  githubLink,
  deployedLink,
}: Project) {
  return (
    <section className="container-purple container-scroll h-auto flex flex-col items-center justify-center w-full m-0 p-7 ">
      <p className="text-3xl">{title}</p>
      <div>
        <div className="w-full flex items-center flex-col justify-center relative group py-6">
          <div className="font-semibold content-scroll lg:h-80 text-sm md:text-xs lg:text-sm">
            <article>{description}</article>
          </div>
          <div className="absolute content-scroll inset-0 opacity-0 bg-colors-black text-colors-white group-hover:opacity-90 duration-200 flex flex-col py-2 rounded-lg">
            <div className="mx-6">
              <div></div>
              <div className="flex-flex-col items-start mt-5">
                <p className="overflow-hidden font-semibold">Tekniker:</p>
                <ul className="flex flex-col items-start justify-start mt-1">
                  {techniques.map((technique, index) => (
                    <li key={index}> ● {technique}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-3 justify-center items-start md:items-center">
          <div>
            <p className="text-lg">Mer info finns nedan</p>
            <div className="dark:bg-colors-white bg-colors-purlpe w-full h-0.5"></div>
          </div>
          <div className="flex items-center gap-3">
            <Link href={githubLink}>
              <Image
                className="hover-contact-icon"
                src="/icons/github.svg"
                alt="github"
                width={40}
                height={40}
              />
            </Link>
            {deployedLink && (
              <Link href={deployedLink}>
                <Image
                  className="hover-contact-icon"
                  src="/icons/internet.svg"
                  alt="deployed icon"
                  width={30}
                  height={30}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
