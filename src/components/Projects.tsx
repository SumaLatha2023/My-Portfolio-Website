import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "PetNook",
    description: "A basic e-commerce platform showcasing pet products with a clean and user-friendly UI design.",
    techStack: ["HTML", "CSS", "Canva"],
    github: "https://github.com/SumaLatha2023/Petnook",
  },
  {
    title: "AI Text Summarizer",
    description: "A web app that uses the Facebook BART CNN model to generate concise summaries from long texts.",
    techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com/SumaLatha2023/AI-Text-Summarizer",
    demo: "https://replit.com/@sweetycodes/AI-Text-Summarizer-App",
  },
  {
    title: "Riddle Rush",
    description: "A fun web app that generates random riddles using an external API for an engaging experience.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/SumaLatha2023/Riddle-Rush",
  },
  {
    title: "Rock Paper Scissors",
    description: "An interactive web-based game implementing the classic Rock-Paper-Scissors logic with clean visuals.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SumaLatha2023/Rock-Paper-Scissors",
  },
  {
    title: "Email Spam Detection",
    description: "A machine learning app that detects and classifies spam messages using NLP and Streamlit.",
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas", "Streamlit"],
    github: "https://github.com/SumaLatha2023/Spam-Detection-App-python",
    demo: "https://spam-mail-detection-app.streamlit.app/",
  },
  {
    title: "Amazon Clone",
    description: "A front-end clone of Amazon’s homepage built to practice layout design and web styling techniques.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SumaLatha2023/Amazon-UI",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-32 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-2xl group hover:bg-primary/5 transition-all duration-300 hover:scale-105 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              } ${"delay-" + Math.min(6, index)}`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 gradient-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/50 hover:bg-primary/10 group"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                {project.demo && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
