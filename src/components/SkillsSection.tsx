import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Zap, Headphones, RefreshCw, Users } from "lucide-react";

const technicalSkills = [
  { name: "Java", level: 80 },
  { name: "Python", level: 70 },
  { name: "C++", level: 65 },
  { name: "JavaScript", level: 60 },
];

const softSkills = [
  { name: "Quick Learner", icon: Zap },
  { name: "Good Listener", icon: Headphones },
  { name: "Easily Adaptable", icon: RefreshCw },
  { name: "Team Player", icon: Users },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`group p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:bg-secondary transition-all duration-300 cursor-default ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 400}ms` }}
                  >
                    <Icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
