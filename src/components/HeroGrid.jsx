import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function HeroGride() {
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    // "Java Sprinboot Developer",
    // "Future F1 Engineer 🚀",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((index + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <div className="relative w-screen h-screen">
        <img
          src="/assets/images/background2.png"
          alt="HeroImage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex flex-col items-center justify-center h-full bg-black/60 px-6 md:px-12">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 max-w-7xl w-full"
          >
            {/* TEXT COLUMN */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 sm:gap-8 max-w-2xl">
              <div
                className="inline-flex px-6 sm:px-8 justify-center items-center
        shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)]"
              >
                <h1 className="font-orbitron whitespace-nowrap text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Sakuni Sandakalmi
                </h1>
              </div>

              <div
                className="flex px-4 sm:px-6 w-full justify-center md:justify-start items-center
        shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)]"
              >
                <h1 className="font-orbitron whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-light text-cyan-300">
                  {text}
                  <span className="animate-pulse">|</span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-xl px-4 sm:px-0 text-muted max-w-lg">
                Crafting digital experiences across the full stack with a
                passion for elegant code and innovative solutions in the cosmic
                realm of technology
              </p>

              <div className="flex shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_60px_rgba(59,130,246,0.4)] rounded-xl">
                <a
                  href="/resume/Sakuni_Sandakalmi_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="font-orbitron px-8 py-5 text-sm sm:text-base bg-transparent border-none text-white hover:cursor-pointer"
                    variant="outline"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>

            {/* IMAGE COLUMN */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-purple-500/40 to-cyan-400/40"></div>

              <img
                src="/assets/images/profileImage.jpeg"
                alt="Sakuni Sandakalmi"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border border-white/20 shadow-[0_0_60px_rgba(147,51,234,0.7)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroGride;
