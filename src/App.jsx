import "./App.css";
import { FlyingIcons } from "./components/FlyingIcons";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { Typewriter } from "./components/Typewriter";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main
        className="relative z-[1] w-full flex flex-col items-center scroll-smooth
  bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <FlyingIcons></FlyingIcons>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
