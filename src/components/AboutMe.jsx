import { Sparkles } from "lucide-react";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:mx-40">
      <div className="flex">
        <h1 className="font-orbitron text-6xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>
      </div>

      <div className="flex justify-center gap-2">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        <Sparkles
          className="w-6 h-6 text-purple-500 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <Sparkles
          className="w-6 h-6 text-primary animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="flex justify-center border-2 border-purple-500">
        <h1>
          Hello! I'm Sakuni Sandakalmi, a passionate Software Engineer dedicated
          to building exceptional digital experiences that bridge creativity and
          functionality.
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="lg:col-span-1 grid-cols-1 flex items-start gap-4 border-2">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="text-foreground/90 leading-relaxed">
            <h3 className="text-xl font-heading font-semibold text-accent mb-3">
              My Journey
            </h3>
            <p>
              My journey in software development spans across the full spectrum
              of modern technologies—from crafting intuitive user interfaces to
              architecting robust backend systems and databases. I thrive on
              solving complex problems and turning innovative ideas into
              reality.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 grid-cols-1 flex items-start gap-4 border-2">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <div className="text-foreground/90 leading-relaxed">
            <h3 className="text-xl font-heading font-semibold text-accent mb-3">
              My Journey
            </h3>
            <p>
              My journey in software development spans across the full spectrum
              of modern technologies—from crafting intuitive user interfaces to
              architecting robust backend systems and databases. I thrive on
              solving complex problems and turning innovative ideas into
              reality.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-2 text-center">
        <h1>
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, and continuously learning to
          stay at the forefront of the ever-evolving tech landscape.
        </h1>
      </div>

      <div className="flex justify-center border-2 text-center items-center">
        <Sparkles className="w-6 h-6 text-white" />

        <h1>"Code is poetry, and every project is a canvas for innovation"</h1>
      </div>
    </div>
  );
}

export default AboutMe;
