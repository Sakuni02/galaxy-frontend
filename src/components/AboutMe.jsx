import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="flex flex-col items-center gap-5 pt-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] w-full max-w-4xl"
      >
        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center gap-2"
      >
        <Sparkles
          className="w-6 h-6 text-indigo-700 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="w-6 h-6 text-purple-500 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <Sparkles
          className="w-6 h-6 text-indigo-700 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white text-base sm:text-lg p-5 sm:p-8 text-center rounded-3xl max-w-4xl"
      >
        <p>
          Hello! I'm{" "}
          <span className="text-purple-500 font-semibold text-2xl">
            Sakuni Sandakalmi
          </span>
          , a passionate Software Engineer dedicated to building exceptional
          digital experiences that bridge creativity and functionality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-3xl flex items-start gap-4 p-5 sm:p-8"
        >
          <div className="flex items-center justify-center rounded-full p-3  bg-gradient-to-r from-purple-500 to-blue-500">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="text-white">
            <h3 className="font-orbitron text-cyan-300 text-xl font-heading font-semibold mb-3">
              My Journey
            </h3>
            <p>
              My journey in software development spans across the full spectrum
              of modern technologies—from crafting intuitive user interfaces to
              architecting robust backend systems and databases. I thrive on
              solving complex problems and turning innovative ideas into
              reality.
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="lg:col-span-1 grid-cols-1 flex items-start gap-4  shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-3xl p-8"
        >
          <div className="flex items-center justify-center rounded-full p-3  bg-gradient-to-r from-purple-500 to-blue-500">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <div className="text-white">
            <h3 className="font-orbitron text-cyan-300 text-xl font-heading font-semibold mb-3">
              Expertise
            </h3>
            <p>
              With expertise in{" "}
              <span className="text-cyan-300 font-semibold">
                full-stack development
              </span>
              <span>, </span>
              <span className="text-cyan-300 font-semibold">
                mobile applications
              </span>{" "}
              and cloud technologies, I bring a comprehensive approach to every
              project. I believe in writing clean, maintainable code that stands
              the test of time.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center text-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white rounded-3xl p-8"
      >
        <h1>
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, and continuously learning to
          stay at the forefront of the ever-evolving tech landscape.
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex gap-4 justify-center w-full max-w-4xl text-center items-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white rounded-3xl p-8"
      >
        <div className="rounded-full p-3  bg-gradient-to-r from-purple-500 to-blue-500">
          <Sparkles className="w-7 h-7 text-white" />
        </div>

        <h1 className="text-base sm:text-lg md:text-xl italic font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          "Code is poetry, and every project is a canvas for innovation"
        </h1>
      </motion.div>
    </div>
  );
}

export default AboutMe;
