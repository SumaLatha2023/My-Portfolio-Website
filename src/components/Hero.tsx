import { useEffect, useState } from "react";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "I'm a Web Developer passionate about crafting interactive and beautiful web experiences.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 glass p-3 rounded-lg animate-float opacity-50">
          <code className="text-xs text-accent">{"<div>"}</code>
        </div>
        <div className="absolute top-48 right-20 glass p-3 rounded-lg animate-float opacity-50" style={{ animationDelay: "1s" }}>
          <code className="text-xs text-primary">{"const dev = () => {}"}</code>
        </div>
        <div className="absolute bottom-32 left-32 glass p-3 rounded-lg animate-float opacity-50" style={{ animationDelay: "2s" }}>
          <code className="text-xs text-accent">{"print('Hello')"}</code>
        </div>
        <div className="absolute bottom-48 right-32 glass p-3 rounded-lg animate-float opacity-50" style={{ animationDelay: "0.5s" }}>
          <code className="text-xs text-primary">{"</>"}</code>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fadeInUp">
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-4">
              Hi, I'm <span className="gradient-text font-bold">Sumalatha</span> 👋
            </h2>
          </div>

          <div className="mb-8 h-32 flex items-center justify-center">
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
