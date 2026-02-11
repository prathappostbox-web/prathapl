import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-10 pb-6 px-6">
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg" />
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Prathap L. Built with <Heart size={14} className="text-primary" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
