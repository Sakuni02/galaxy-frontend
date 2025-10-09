import AboutMe from "./components/AboutMe";
import HeroGride from "./components/HeroGrid";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <>
      {/* <motion.main
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-10"
      >
        <HeroGride />
        <AboutMe />
      </motion.main> */}

      <main className="flex flex-col">
        <HeroGride />

        <div className="relative w-full">
          <video
            className="fixed top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/video6.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 bg-black/60">
            <AboutMe />
            <Skills />
            <Projects />
            <Certifications />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
