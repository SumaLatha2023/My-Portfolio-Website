import { useEffect, useRef, useState } from "react";
import { Code2, Database, Palette, Laptop, Braces, FileJson, Globe, GitBranch, Terminal, PaletteIcon } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { SiMysql, SiMongodb, SiNodedotjs, SiExpress, SiReact, SiBootstrap, SiJavascript, SiC, SiTailwindcss, SiFigma, SiCanva, SiClickup, SiGithub, SiPostman, SiCplusplus, SiHtml5, SiCss3 } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
  icon: any;
}

const skillCategories = {
  Languages: [
    { name: "Python", level: 85, icon: FaPython },
    { name: "C", level: 80, icon: SiC },
    { name: "C++", level: 80, icon: SiCplusplus },
    { name: "JavaScript", level: 90, icon: SiJavascript },
    { name: "HTML", level: 95, icon: SiHtml5 },
    { name: "CSS", level: 95, icon: SiCss3 },
  ],
  Databases: [
    { name: "MySQL", level: 85, icon: SiMysql },
    { name: "MongoDB", level: 75, icon: SiMongodb },
  ],
  Technologies: [
    { name: "Node.js", level: 80, icon: SiNodedotjs },
    { name: "Express.js", level: 75, icon: SiExpress },
    { name: "React", level: 85, icon: SiReact },
  ],
  Libraries: [
    { name: "Bootstrap", level: 75, icon: SiBootstrap },
    { name: "Material UI", level: 80, icon: PaletteIcon },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
  ],
  Tools: [
    { name: "Figma", level: 80, icon: SiFigma },
    { name: "Canva", level: 70, icon: SiCanva },
    { name: "Visual Studio Code", level: 90, icon: Code2 },
    { name: "ClickUp", level: 65, icon: SiClickup },
    { name: "Git & GitHub", level: 85, icon: GitBranch },
    { name: "Postman", level: 85, icon: SiPostman },
  ],
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  // map known skill percentage values to static Tailwind arbitrary width classes
  const widthClassMap: Record<number, string> = {
    65: "w-[65%]",
    70: "w-[70%]",
    75: "w-[75%]",
    80: "w-[80%]",
    85: "w-[85%]",
    90: "w-[90%]",
    95: "w-[95%]",
  };
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean[] }>({
    Languages: new Array(skillCategories.Languages.length).fill(false),
    Databases: new Array(skillCategories.Databases.length).fill(false),
    Technologies: new Array(skillCategories.Technologies.length).fill(false),
    Libraries: new Array(skillCategories.Libraries.length).fill(false),
    Tools: new Array(skillCategories.Tools.length).fill(false),
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skill bar animations with stagger for each category
          Object.keys(skillCategories).forEach((category) => {
            const categorySkills = skillCategories[category as keyof typeof skillCategories];
            categorySkills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [category]: prev[category].map((val, i) => i === index ? true : val)
                }));
              }, index * 100);
            });
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

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="Languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 glass">
              <TabsTrigger value="Languages" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Languages
              </TabsTrigger>
              <TabsTrigger value="Databases" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Databases
              </TabsTrigger>
              <TabsTrigger value="Technologies" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Technologies
              </TabsTrigger>
              <TabsTrigger value="Libraries" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Libraries
              </TabsTrigger>
              <TabsTrigger value="Tools" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Tools
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid gap-6">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={index}
                        className={`glass p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 ${
                          isVisible ? "animate-fadeInUp" : "opacity-0"
                        }`}
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
                            className={`h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out ${
                              animatedSkills[category][index]
                                ? widthClassMap[skill.level] ?? `w-[${skill.level}%]`
                                : "w-0"
                            }`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
