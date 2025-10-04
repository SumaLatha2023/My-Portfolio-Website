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
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
    techStack: ["JavaScript", "API Integration", "Chart.js"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that helps developers create beautiful portfolios with customizable templates and themes.",
    techStack: ["React", "TypeScript", "CSS Modules"],
    github: "https://github.com",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with group chats, file sharing, and end-to-end encryption.",
    techStack: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, comments, and social sharing features.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
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
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
