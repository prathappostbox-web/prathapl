import { useEffect, useState } from "react";
import { Download, ArrowDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["BCA Student", "Aspiring Software Developer", "Quick Learner"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, hsl(230 80% 65% / 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, hsl(270 70% 60% / 0.3) 0%, transparent 50%)",
          animation: "gradient-shift 8s ease infinite",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: "hsl(230 80% 65%)",
          top: "10%",
          left: "10%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "hsl(270 70% 60%)",
          bottom: "10%",
          right: "10%",
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Profile placeholder */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full gradient-bg p-[3px]">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <User size={48} className="text-muted-foreground" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Prathap L</span>
        </h1>

        <div className="h-10 mb-6">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            {displayed}
            <span
              className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
              style={{ animation: "typing-cursor 1s step-end infinite" }}
            />
          </p>
        </div>

        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          A passionate 2nd-year BCA student from Bangalore, eager to build impactful software and grow as a developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gradient-bg hover:opacity-90 transition-opacity text-primary-foreground glow-primary" size="lg">
            <Download size={18} />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary/60 hover:bg-primary/5"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown size={18} />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
