import React from "react";
import Wordle from "./Wordle";
import Cinema from "./Cinema";

export default function Projects() {
  return (
    <div id="projects" className="flex items-center justify-center bg-red">
      <div className="container flex flex-col items-center justify-center gap-9">
        <h3 className="text-4xl">Mina Projekt</h3>
        <Wordle />
        <Cinema />
      </div>
    </div>
  );
}
