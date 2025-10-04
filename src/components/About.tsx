import { useEffect, useRef, useState } from "react";
import developerAvatar from "@/assets/developer-avatar.png";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="glass p-8 rounded-2xl">
              <img src={developerAvatar} alt="Sumalatha - Developer" className="w-full h-auto rounded-xl" />
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="glass p-8 rounded-2xl">           
              <p className="text-foreground/80 leading-relaxed mb-4">
                I'm a final-year Computer Science Engineering student with a deep passion for 
                web development and creating beautiful, interactive user experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                My journey in tech has been driven by curiosity and the desire to bring 
                ideas to life through code. I specialize in front-end development, crafting 
                responsive and engaging web applications that users love.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source 
                projects, and constantly learning to stay at the forefront of web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-foreground/70">Projects Worked</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">300+</div>
                <div className="text-sm text-foreground/70">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;