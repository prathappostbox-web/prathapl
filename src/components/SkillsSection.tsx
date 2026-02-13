import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technicalSkills = ["Java", "Python", "C++", "JavaScript"];


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

        <div className="flex flex-wrap justify-center gap-4">
          {technicalSkills.map((skill, i) => (
            <span
              key={skill}
              className={`px-5 py-2.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-secondary transition-all duration-500 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
