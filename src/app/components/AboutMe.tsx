
export default function AboutMe() {
  return (
    <>
      <div id="aboutMe"></div>
      <article className="flex justify-center gap-20 my-9 bg-gradient-to-r from-colors-purlpe to-colors-darkPurple curved-background w-full">
        <div className="text-colors-white p-9 text-center">
          <h3 className="text-3xl">Hejsan, mitt namn är Rasmus Eliasson</h3>
          <div>
            <p className="mt-6 leading-7 mb-20 lg:text-xl max-w-3xl">
              Har under det senaste året viljat ta en vändnig i min yrkesbana
              till att jobba inom IT. <br />
              Jag har sedan studenten jobbat på postkontoret i min hemstad med
              paket och brev. Men efter dessa fem åren så känner jag en strävan
              efter att byta branch i min yrkeskarriär. <br />
              Jag läser i dagsläget en 2 årig utbildning på yrkeshögskola som
              bedrivs på distans av Lernia. <br />
              Fokus i utbildnignen ligger i Javascript samt Java.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
