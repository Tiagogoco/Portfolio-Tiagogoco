import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import AISection from "./components/AISection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <AISection />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
