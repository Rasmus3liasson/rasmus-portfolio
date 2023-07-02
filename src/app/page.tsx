import Image from "next/image";
import Header from "./components/Header/page";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
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
