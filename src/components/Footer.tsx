import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-foreground/60 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" /> by{" "}
            <span className="gradient-text font-semibold">Sumalatha Salapu</span>
          </p>
          <p className="text-sm text-foreground/40 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
