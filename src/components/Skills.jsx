import {
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

function Skills() {
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
          Skills & Technologies
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
          Exploring the cosmic expanse of modern development technologies
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
        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Code2 className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-950">
              React
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-950">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-950">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-950">
              HTML5
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-950">
              CSS3
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-950">
              JavaScript
            </span>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Server className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-800">
              React
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              HTML5
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              CSS3
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              JavaScript
            </span>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Database className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-800">
              React
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              HTML5
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              CSS3
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              JavaScript
            </span>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Smartphone className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-800">
              React
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              HTML5
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              CSS3
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              JavaScript
            </span>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <MonitorSmartphone className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-orbitron font-heading font-bold">
              Frontend Development
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-purple-900 bg-blue-800">
              React
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              HTML5
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              CSS3
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium border">
              JavaScript
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
