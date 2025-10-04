import { useEffect, useRef, useState } from "react";
import { Code2, Database, Palette, Laptop } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express", level: 70, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "Responsive Design", level: 92, category: "Design" },
];

const categoryIcons: { [key: string]: any } = {
  Frontend: Code2,
  Backend: Laptop,
  Database: Database,
  Tools: Code2,
  Design: Palette,
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>(new Array(skills.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skill bar animations with stagger
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
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
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => {
              const Icon = categoryIcons[skill.category];
              return (
                <div
                  key={index}
                  className={`glass p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 ${
                    isVisible ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-accent font-medium">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animatedSkills[index] ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass p-6 rounded-xl text-center group hover:bg-primary/5 transition-all duration-300">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Frontend Dev</h3>
              <p className="text-sm text-foreground/70">Modern & Responsive UIs</p>
            </div>
            <div className="glass p-6 rounded-xl text-center group hover:bg-primary/5 transition-all duration-300">
              <Laptop className="h-12 w-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Full Stack</h3>
              <p className="text-sm text-foreground/70">End-to-End Solutions</p>
            </div>
            <div className="glass p-6 rounded-xl text-center group hover:bg-primary/5 transition-all duration-300">
              <Palette className="h-12 w-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">UI/UX Design</h3>
              <p className="text-sm text-foreground/70">Beautiful Interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
