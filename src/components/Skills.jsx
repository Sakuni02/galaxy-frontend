import {
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data";

function Skills() {
  return (
    <div className="flex flex-col items-center gap-5 mt-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex w-full max-w-5xl justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white text-lg text-center"
      >
        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
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
        className="flex justify-center w-full max-w-4xl text-center"
      >
        <h1 className="text-base sm:text-lg md:text-xl text-white">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-10 text-white"
      >
        {skillCategories.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 20px rgba(147,51,234,0.7), 0 0 40px rgba(59,130,246,0.6)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="border border-blue-950 p-5 sm:p-8 rounded-3xl bg-black/60 bg-blend-overlay"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`bg-gradient-to-br ${skill.iconColor} p-3 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]`}
                >
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-orbitron font-heading font-bold">
                  {skill.title}
                </h1>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                {skill.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-900 bg-blue-950"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skills;
