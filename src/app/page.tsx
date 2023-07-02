import Hero from "./components/Hero";

import Containers from "./components/Containers/page";
import Contact from "./components/Containers/Contact";
import Projects from "./components/Containers/Projects/page";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <AboutMe />

      <Containers />

      <Projects />

      <Contact />
    </main>
  );
}
