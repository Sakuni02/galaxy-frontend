import { Github, Heart, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-10 mt-20 pb-10 pt-10 px-4 sm:px-6 bg-indigo-950/70 border-t-2 border-indigo-950">
      <div className="flex">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-orbitron bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold mb-2">
            Sakuni Sandakalmi
          </h3>
          <p className="text-muted-foreground font-semibold text-sm sm:text-base">
            Software Engineer • Full-Stack Developer
          </p>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6">
        <div className="p-4 sm:p-3 border-2 border-indigo-950 rounded-full duration-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.7),0_0_40px_rgba(59,130,246,0.6)]">
          <a href="">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>

        <div className="p-4 sm:p-3 border-2 border-indigo-950 rounded-full duration-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.7),0_0_40px_rgba(59,130,246,0.6)]">
          <a href="">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>

        <div className="p-4 sm:p-3 border-2 border-indigo-950 rounded-full duration-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.7),0_0_40px_rgba(59,130,246,0.6)]">
          <a href="">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>
      </div>

      <div className="text-center text-muted-foreground text-sm font-semibold">
        <p className="flex flex-wrap gap-2 justify-center items-center mb-2 text-xs sm:text-sm">
          Made with{" "}
          <Heart
            className="w-4 h-4 text-pink-400 animate-pulse"
            fill="currentColor"
          />{" "}
          and cosmic energy
        </p>

        <p className="text-xs sm:text-sm">
          © 2025 Sakuni Sandakalmi. All rights reserved.
        </p>
      </div>

      <div className="flex gap-3 opacity-60">
        <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  );
}

export default Footer;
