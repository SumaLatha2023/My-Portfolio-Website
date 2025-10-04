import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with a service like Formspree
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Let's Connect!
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm always excited to collaborate on interesting projects or discuss 
                new opportunities. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-primary/5 transition-all">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Email</div>
                  <div className="font-medium">sumalathasalapu123@email.com</div>
                </div>
              </div>

              <div className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-primary/5 transition-all">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Location</div>
                  <div className="font-medium">Andhra Pradesh, India</div>
                </div>
              </div>

              <div className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-primary/5 transition-all">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Phone</div>
                  <div className="font-medium">+91 74162 73611</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <a
                href="https://github.com/SumaLatha2023"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="www.linkedin.com/in/sumalatha-salapu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/sumalatha_salapu/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/Sumalatha_2004?"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="discordapp.com/users/sumalatha_salapu_30067"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Discord"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`glass p-8 rounded-2xl ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Abc Xyz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-primary/30 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-primary/30 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-primary/30 focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 glow"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
