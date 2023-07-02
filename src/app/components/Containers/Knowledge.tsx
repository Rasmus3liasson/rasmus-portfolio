import Image from "next/image";
import React from "react";

export default function Knowledge() {
  const renderProgrammingIcons = (srcOfImage: string) => {
    return (
      <Image src={srcOfImage} alt={"proggraming icon"} width={60} height={60} />
    );
  };

  return (
    <section className="container -mt-24">
      <div className="my-9">
        <h3 className="text-4xl text-center">Kunskaper</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-9 md:gap-20">
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          )}

          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          )}
        </div>

        <h3 className="text-4xl mt-12">Extras</h3>

        <div className="mt-8 flex flex-wrap justify-center gap-9 md:gap-20">
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          )}
          {renderProgrammingIcons("/icons/ejs.svg")}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          )}
          {renderProgrammingIcons(
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          )}
        </div>
      </div>
    </section>
  );
}
