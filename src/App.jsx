import AboutMe from "./components/AboutMe";
import HeroGride from "./components/HeroGrid";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="flex flex-col">
        <HeroGride />

        <div className="relative w-full">
          <video
            className="absolute md:fixed top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/video4.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 bg-black/60 px-4 sm:px-6 md:px-10">
            <AboutMe />
            <Skills />
            <Projects />
            <Certifications />
            <Resume />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
