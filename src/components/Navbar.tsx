import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          Prathap L
        </a>
        <span className="hidden md:block text-sm text-muted-foreground">
          BCA Student · Charan's Degree College · Bangalore
        </span>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile info */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border px-4 py-3">
          <p className="text-sm text-muted-foreground">BCA Student · Charan's Degree College · Bangalore</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
