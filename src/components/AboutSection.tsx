import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Prathap L</span>, a 2nd-year BCA student currently in my 4th term, based in Bangalore, Karnataka. I'm passionate about technology and software development, constantly seeking opportunities to learn and grow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy solving problems with code and am particularly interested in building web applications and exploring new programming languages. I'm looking for internship opportunities to apply my skills in a real-world environment.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>Bangalore, Karnataka</span>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>
            <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] w-4 h-4 rounded-full gradient-bg" />
                <h4 className="font-semibold text-foreground">Bachelor of Computer Applications</h4>
                <p className="text-sm text-primary">2nd Year — 4th Term</p>
                <p className="text-sm text-muted-foreground mt-1">Current Degree College, Bangalore</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-muted border-2 border-primary/40" />
                <h4 className="font-semibold text-foreground">Pre-University (PU)</h4>
                <p className="text-sm text-primary">Completed</p>
                <p className="text-sm text-muted-foreground mt-1">PU College, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
