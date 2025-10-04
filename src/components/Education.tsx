import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

interface TimelineItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

const educationData: TimelineItem[] = [
  {
    institution: "JNTUK University College of Engineering",
    degree: "B.Tech - Computer Science Engineering",
    duration: "2021 - 2025",
    description: "Focused on web development, data structures, algorithms, and software engineering principles. Active in coding clubs and tech events.",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate - MPC",
    duration: "2019 - 2021",
    description: "Completed with distinction. Developed strong foundation in mathematics and physics.",
  },
  {
    institution: "Narayana High School",
    degree: "Secondary School Education",
    duration: "2018 - 2019",
    description: "Achieved excellent grades. Developed early interest in computers and technology.",
  },
];

const Education = () => {
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
      id="education"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          Education
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-8">
                  {/* Timeline Node */}
                  <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-8">
                    {index % 2 === 0 && (
                      <div className="glass p-6 rounded-2xl w-full">
                        <h3 className="text-xl font-bold mb-2 gradient-text">
                          {item.institution}
                        </h3>
                        <div className="text-accent mb-1">{item.degree}</div>
                        <div className="text-sm text-foreground/60 mb-3">{item.duration}</div>
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="glass p-3 rounded-full glow">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Right Side Content (Mobile & Odd Items) */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-8">
                    {(index % 2 !== 0 || window.innerWidth < 768) && (
                      <div className="glass p-6 rounded-2xl">
                        <h3 className="text-xl font-bold mb-2 gradient-text">
                          {item.institution}
                        </h3>
                        <div className="text-accent mb-1">{item.degree}</div>
                        <div className="text-sm text-foreground/60 mb-3">{item.duration}</div>
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
