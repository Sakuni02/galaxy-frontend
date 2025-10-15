import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { certifications } from "@/data";

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
        {certifications.map((certi, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden duration-500 ease-out hover:bg-black/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(147,51,234,0.7),0_0_40px_rgba(59,130,246,0.6)]"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent"></div>
            <div
              className={`p-8 rounded-3xl bg-gradient-to-br ${certi.color} bg-black/60 bg-blend-overlay`}
            >
              <div className="flex justify-between mb-4">
                <div
                  className={`bg-gradient-to-br ${certi.iconColor} p-3 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.6)]`}
                >
                  <Award className="w-5 h-5 text-black" />
                </div>

                <CheckCircle className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="flex">
                <h1 className="text-xl font-orbitron font-heading font-bold">
                  {certi.title}
                </h1>
              </div>

              <div className="flex mt-4">
                <p className="text-s font-sans">{certi.issuer}</p>
              </div>
              <div className="flex mt-1">
                <p className="text-s text-cyan-500 font-sans">{certi.date}</p>
              </div>
            </div>
          </div>
        ))}
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
