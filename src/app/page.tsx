import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Containers from "./components/Containers/page";
import Contact from "./components/Containers/Contact";
import Projects from "./components/Containers/Projects/page";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <body className="m-0 p-0 box-border bg-colors-white font-montserrat">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <AboutMe />

        <Containers />

        <Projects />

        <Contact />
      </main>
      <Footer />
    </body>
  );
}
