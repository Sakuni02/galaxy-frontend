import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

function Certifications() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-50">
      <div className="flex lg:w-7xl w-xl justify-center shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] text-white text-lg text-center">
        <h1 className="font-orbitron lg:text-6xl text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Certifications
        </h1>
      </div>

      <div className="text-xl text-white">
        <h1>Professional credentials across the technology spectrum</h1>
      </div>

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
          <div className="flex justify-between mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Award className="w-8 h-8" />
            </div>

            <CheckCircle className="w-5 h-5 text-cyan-500" />
          </div>
          <div className="flex">
            <h1 className="text-xl font-orbitron font-heading font-bold">
              AWS Certified Solutions Architect
            </h1>
          </div>

          <div className="flex mt-1">
            <p>Amazon Web Services</p>
          </div>
          <div className="flex mt-1">
            <p>2024</p>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex justify-between mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Award className="w-8 h-8" />
            </div>

            <CheckCircle className="w-5 h-5 text-cyan-500" />
          </div>
          <div className="flex">
            <h1 className="text-xl font-orbitron font-heading font-bold">
              AWS Certified Solutions Architect
            </h1>
          </div>

          <div className="flex mt-1">
            <p>Amazon Web Services</p>
          </div>
          <div className="flex mt-1">
            <p>2024</p>
          </div>
        </div>

        <div className="border border-blue-950 p-8 rounded-3xl bg-black/50">
          <div className="flex justify-between mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl">
              <Award className="w-8 h-8" />
            </div>

            <CheckCircle className="w-5 h-5 text-cyan-500" />
          </div>
          <div className="flex">
            <h1 className="text-xl font-orbitron font-heading font-bold">
              AWS Certified Solutions Architect
            </h1>
          </div>

          <div className="flex mt-1">
            <p>Amazon Web Services</p>
          </div>
          <div className="flex mt-1">
            <p>2024</p>
          </div>
        </div>
      </motion.div>
      <div className="flex mt-10">
        <p className="text-white italic">
          Continuously expanding knowledge through ongoing learning and
          certification
        </p>
      </div>
    </div>
  );
}

export default Certifications;
