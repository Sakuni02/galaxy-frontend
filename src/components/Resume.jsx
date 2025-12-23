import { motion } from "framer-motion";
import { Circle, Code, DockIcon, Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

function Resume() {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-10 mt-24 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-full"
      >
        <FileText className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex px-4 sm:px-7 text-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)]"
      >
        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Download My Resume
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex w-full max-w-3xl justify-center items-center text-center px-2"
      >
        <h1 className="text-base sm:text-lg md:text-xl text-muted">
          Get a comprehensive overview of my experience, skills, and
          achievements in a beautifully crafted document
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-xl"
      >
        <Button
          className="font-orbitron text-black !px-15 !py-8 text-lg bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 border-none hover:cursor-pointer"
          variant="outline"
          size="lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-muted-foreground text-center px-2">
          <Circle className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          PDF Format • 2 Pages • Last Updated: 2024
        </p>
        <p className="text-muted-foreground text-center mt-5 text-sm">
          Includes detailed work experience, education, certifications, and
          project portfolio
        </p>
      </motion.div>
    </div>
  );
}

export default Resume;
