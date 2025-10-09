import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function HeroGride() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <div className="relative w-screen h-screen">
        <img
          src="/assets/images/background2.png"
          alt="HeroImage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center h-full bg-black/60 gap-8"
        >
          <div
            className="flex px-7 w-7xl justify-center items-center
          shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)]"
          >
            <h1 className="font-orbitron text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Sakuni Sandakalmi
            </h1>
          </div>

          <div
            className="flex px-7 w-7xl justify-center items-center
          shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)]"
          >
            <h1 className="font-orbitron text-4xl font-light text-cyan-300">
              Software Engineer
            </h1>
          </div>

          <div className="flex w-3xl justify-center items-center text-center">
            <h1 className="text-xl text-muted">
              Crafting digital experiences across the full stack with a passion
              for elegant code and innovative solutions in the cosmic realm of
              technology
            </h1>
          </div>

          <div className="flex shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-xl">
            <Button
              className="font-orbitron px-8 py-6 text-lg bg-transparent border-none text-white"
              variant="outline"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroGride;
