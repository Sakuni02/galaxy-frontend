import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:mx-40 pt-10">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] w-6xl justify-center"
      >
        <h1 className="font-orbitron text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
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
        className="flex justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white text-lg p-8 text-center rounded-3xl"
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

      <div className="grid grid-cols-2 gap-5">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="lg:col-span-1 grid-cols-1 flex items-start gap-4 shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-3xl p-8"
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
        className="flex gap-4 w-6xl justify-center text-center items-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white rounded-3xl p-8"
      >
        <div className="rounded-full p-3  bg-gradient-to-r from-purple-500 to-blue-500">
          <Sparkles className="w-7 h-7 text-white" />
        </div>

        <h1 className="text-xl italic font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          "Code is poetry, and every project is a canvas for innovation"
        </h1>
      </motion.div>
    </div>
  );
}

export default AboutMe;
