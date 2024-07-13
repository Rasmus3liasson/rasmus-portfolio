export default function AboutMe() {
  const text = `Har under de senaste åren utvecklat ett stort intresse för utveckling. Jag har ägnat mycket tid åt att lära mig nya teknologier och förbättra mina färdigheter inom programmering och mjukvaruutveckling. Det har varit en spännande resa som har gett mig både teoretisk kunskap och praktisk erfarenhet genom utbildningar/praktiker och projekt som jag skapat.<br /><br />
  Jag söker nu nya möjligheter inom detta område och är mycket intresserad av att hitta en roll där jag kan bidra med mina kunskaper och fortsätta växa professionellt. Om du eller ditt företag söker någon med passion för utveckling och en stark vilja att lära och växa, skulle jag vara mycket glad att diskutera möjliga samarbeten eller jobbalternativ.`;

  return (
    <>
      <div id="aboutMe"></div>
      <article className="flex justify-center gap-20 my-9 bg-gradient-to-r from-colors-purlpe to-colors-darkPurple curved-background w-full">
        <div className="text-colors-white p-9 text-center">
          <h3 className="text-3xl">Hejsan, mitt namn är Rasmus Eliasson</h3>
          <div>
            <p className="mt-6 leading-7 mb-20 lg:text-xl max-w-3xl" dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
        </div>
      </article>
    </>
  );
}
