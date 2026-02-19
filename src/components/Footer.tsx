import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-6 px-4 mt-4">
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg" />
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Prathap L · Bangalore, Karnataka
          <span className="mx-1">·</span>
          Built with <Heart size={13} className="text-primary mx-1" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
