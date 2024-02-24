import Image from "next/image";

export default function Knowledge() {
  const renderProgrammingIcons = (
    srcOfImage: string,
    applyWhiteColor: boolean
  ) => {
    const style = applyWhiteColor
      ? "dark:filter dark:brightness-0 dark:invert"
      : "";
    return (
      <Image
        src={srcOfImage}
        alt={"proggraming icon"}
        width={60}
        height={60}
        className={`${style} w-12 sm:w-20 h-auto`}
      />
    );
  };

  return (
    <section className="container -mt-24">
      <div className="my-3 w-full flex flex-col items-center">
        <h3 className="text-4xl">Kunskaper</h3>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 sm:gap-9 md:gap-20">
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            false
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            false
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            false
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            false
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
            true
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
            false
            )}
            {renderProgrammingIcons(
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
              false
            )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
            false
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            true
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
            false
          )}
        </div>

        <h3 className="text-4xl mt-12">Extras</h3>

        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-9 md:gap-20">
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
            false
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            false
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            false
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            true
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            false
          )}
        </div>
      </div>
    </section>
  );
}
