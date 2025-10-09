import { motion } from "framer-motion";
import {
  Code,
  Code2,
  Database,
  ExternalLink,
  Github,
  MonitorSmartphone,
  Server,
  Smartphone,
} from "lucide-react";
import { Button } from "./ui/button";
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
        <div
          className="border border-blue-950 p-8 rounded-3xl"

          // bg-gradient-to-br from-[#1d0b42] via-[#2e1065] to-[#3b0764]
          // hover:shadow-[0_0_40px_rgba(168,85,247,0.5),0_0_60px_rgba(59,130,246,0.4)] transition-all duration-300
        >
          <div className="flex mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Code className="w-8 h-8" />
            </div>
          </div>
          <div className="flex">
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <p>
              Full-stack e-commerce solution with real-time inventory
              management, secure payment integration, and responsive design.
              Built for scalability and performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              React
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
          </div>

          <div className="flex justify-center items-center gap-3 mt-5">
            <Button className="flex-1 rounded-xl" size="sm">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button className="flex-1 rounded-xl" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>

        <div
          className="border border-blue-950 p-8 rounded-3xl"
          // bg-gradient-to-br from-[#1e3a8a] via-[#312e81] to-[#581c87]
          // shadow-[0_0_25px_rgba(59,130,246,0.3),0_0_45px_rgba(147,51,234,0.2)]
          // hover:shadow-[0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(147,51,234,0.4)] transition-all duration-300
        >
          <div className="flex mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Code className="w-8 h-8" />
            </div>
          </div>
          <div className="flex">
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <p>
              Full-stack e-commerce solution with real-time inventory
              management, secure payment integration, and responsive design.
              Built for scalability and performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              React
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
          </div>

          <div className="flex justify-center items-center gap-3 mt-5">
            <Button className="flex-1 rounded-xl" size="sm">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button className="flex-1 rounded-xl" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl">
          {/* bg-gradient-to-br from-[#1e3a8a] via-[#312e81] to-[#581c87]
          shadow-[0_0_25px_rgba(59,130,246,0.3),0_0_45px_rgba(147,51,234,0.2)] 
          hover:shadow-[0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(147,51,234,0.4)] transition-all duration-300 */}

          <div className="flex mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              {/* bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.5)] */}
              <Code className="w-8 h-8" />
            </div>
          </div>
          <div className="flex">
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <p>
              Full-stack e-commerce solution with real-time inventory
              management, secure payment integration, and responsive design.
              Built for scalability and performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              React
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
          </div>

          <div className="flex justify-center items-center gap-3 mt-5">
            <Button className="flex-1 rounded-xl" size="sm">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button className="flex-1 rounded-xl" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>
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
