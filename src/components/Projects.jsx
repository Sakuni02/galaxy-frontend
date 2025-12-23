import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { projects } from "@/data";
function Projects() {
  return (
    <div className="flex flex-col items-center gap-5 mt-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex w-full max-w-5xl justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white text-center"
      >
        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center w-full max-w-4xl text-center"
      >
        <h1 className="text-base sm:text-lg md:text-xl text-white">
          Stellar creations across the development universe
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-10 text-white"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-5 sm:p-8 rounded-3xl bg-gradient-to-br ${project.color} bg-black/60 bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-black/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(147,51,234,0.7),0_0_40px_rgba(59,130,246,0.6)]`}
          >
            <div className="flex mb-4">
              <div
                className={`bg-gradient-to-br ${project.iconColor} p-3 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]`}
              >
                <Code className="w-5 h-5 text-black" />
              </div>
            </div>
            <div className="flex">
              <h1 className="text-lg sm:text-xl md:text-2xl font-orbitron font-heading font-bold">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <p>{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              {/* <a href={project.frontGithubUrl} className="flex-1">
                <Button
                  className="w-full rounded-xl  shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]"
                  size="sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Frontend Code
                </Button>
              </a>

              <a href={project.backGithubUrl} className="flex-1">
                <Button
                  className="w-full rounded-xl  shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]"
                  size="sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Backend Code
                </Button>
              </a> */}

              <a href={project.demoUrl} className="flex-1">
                <Button
                  className="w-full rounded-xl  text-black font-semibold shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] bg-fuchsia-600"
                  size="sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-black" />
                  Demo
                </Button>
              </a>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex mt-10 w-full justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-xl">
        <Button
          className="font-orbitron px-6 py-4 text-base sm:text-lg bg-transparent border-none text-white"
          variant="outline"
        >
          <Github className="w-5 h-5 mr-2" />
          View All Projects on GitHub
        </Button>
      </div>
    </div>
  );
}

export default Projects;
