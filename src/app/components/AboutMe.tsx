import React from "react";

export default function AboutMe() {
  return (
    <article
      id="aboutMe"
      className="flex gap-20 my-9 bg-gradient-to-r from-colors-purlpe to-colors-darkPurple"
    >
      <div className="text-colors-white p-9 text-center">
        <h3 className="text-3xl">Hejsan, mitt namn är Rasmus Eliasson</h3>

        <p className="mt-6 leading-7 mb-32">
          Har under det senaste året viljat ta en vändnig i min yrkesbana till
          att jobba inom IT. <br />
          Jag har sedan studenten jobbat på postkontoret här i staden med paket
          och brev. Efter dessa fem åren så känner jag en strävan efter att byta
          branch för min yrkeskarriär. <br />
          Jag läser en 2 årig utbildning på yrkeshögskola som bedrivs på distans
          av Lernia. Utbildningen innefattar koncent för att ha kunskaper för
          att kunna vara en fullstackutvecklare <br />
          Fokus i utbildnignen ligger i Javascript samt Java.
        </p>
      </div>
    </article>
  );
}
