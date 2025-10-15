import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { projects } from "@/data";
function Projects() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-50">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex lg:w-7xl w-2xl justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white text-lg text-center"
      >
        <h1 className="font-orbitron lg:text-6xl text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
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
        className="flex w-7xl justify-center"
      >
        <h1 className="text-xl text-white">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl text-white mt-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl bg-gradient-to-br ${project.color} bg-black/60 bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-black/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(147,51,234,0.7),0_0_40px_rgba(59,130,246,0.6)]`}
          >
            <div className="flex mb-4">
              <div
                className={`bg-gradient-to-br ${project.iconColor} p-3 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]`}
              >
                <Code className="w-5 h-5 text-black" />
              </div>
            </div>
            <div className="flex">
              <h1 className="text-2xl font-orbitron font-heading font-bold">
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

            <div className="flex justify-center items-center gap-3 mt-5">
              <a href={project.githubUrl} className="flex-1">
                <Button
                  className="w-full rounded-xl  shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]"
                  size="sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </a>

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

      <div className="flex mt-10 shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-xl">
        <Button
          className="font-orbitron !px-8 py-6 text-lg bg-transparent border-none text-white"
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
