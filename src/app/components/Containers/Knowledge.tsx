import React from "react";

export default function Knowledge() {
  return (
    <section className="container">
      <div>
        <h3 className="text-4xl text-center">Kunskaper</h3>
        <div className="coding-icon">
          <i className="devicon-html5-plain"></i>
          <i className="devicon-css3-plain"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
        </div>
        <h3 className="text-4xl mt-4">Kunskaper jag lär mig</h3>

        <div className="coding-icon">
          <i className="devicon-java-plain"></i>
          <i className="devicon-typescript-plain"></i>
          <i className="devicon-react-original"></i>
        </div>
        <h3 className="text-4xl mt-4">Extras</h3>

        <div className="coding-icon flex">
          <i className="devicon-sass-original"></i>
          <i className="devicon-tailwindcss-original-wordmark"></i>
          <i className="devicon-express-original"></i>
          <i className="devicon-git-plain"></i>
        </div>
      </div>
    </section>
  );
}
