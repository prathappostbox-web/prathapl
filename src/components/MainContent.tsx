import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const technicalSkills = {
  Languages: ["Java", "Python", "C++", "JavaScript"],
  "Soft Skills": ["Quick Learner", "Good Listener", "Easily Adaptable", "Team Player"],
  Tools: ["Git & GitHub", "VS Code", "MySQL"],
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS featuring smooth animations and responsive design.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Student Management System",
    description: "A full-stack application for managing student records with CRUD operations and authentication.",
    tags: ["Java", "MySQL", "JDBC"],
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that fetches real-time data and displays forecasts with an intuitive interface.",
    tags: ["JavaScript", "API", "CSS"],
  },
];

const SectionCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ label }: { label: string }) => (
  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">{label}</p>
);

const MainContent = () => {
  return (
    <div className="space-y-5">
      {/* Intro */}
      <SectionCard>
        <SectionTitle label="Intro" />
        <p className="text-muted-foreground leading-relaxed text-sm">
          I'm <span className="text-foreground font-semibold">Prathap L</span>, a 2nd-year BCA student in my 4th semester at{" "}
          <span className="text-primary font-medium">Charan's Degree College, Bangalore</span>. I'm passionate about technology and software development, constantly seeking opportunities to learn and grow.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm mt-3">
          I enjoy solving problems with code and am particularly interested in building web applications and exploring new programming languages. I'm actively looking for{" "}
          <span className="text-foreground font-medium">internship opportunities</span> to apply my skills in a real-world environment.
        </p>
      </SectionCard>

      {/* Skills */}
      <SectionCard>
        <SectionTitle label="Skills & Technologies" />
        <div className="space-y-5">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg inline-block" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-secondary/60 border border-border text-xs font-medium text-foreground hover:border-primary/40 hover:bg-secondary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Projects */}
      <SectionCard>
        <SectionTitle label="Projects" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-background hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
            >
              <div className="h-28 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <FolderGit2 size={32} className="text-primary/40 group-hover:text-primary/70 transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto text-xs">
                  View Project <ExternalLink size={12} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Contact CTA */}
      <SectionCard>
        <SectionTitle label="Get In Touch" />
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          I'm always open to discussing new opportunities, internships, or just having a conversation about technology. Feel free to reach out at{" "}
          <a href="mailto:prathappostbox@gmail.com" className="text-primary hover:underline">
            prathappostbox@gmail.com
          </a>{" "}
          or call{" "}
          <a href="tel:+916363941186" className="text-primary hover:underline">
            +91 6363941186
          </a>
          .
        </p>
        <Button
          className="gradient-bg text-primary-foreground hover:opacity-90 glow-primary"
          onClick={() => window.open("mailto:prathappostbox@gmail.com")}
        >
          Send Email
        </Button>
      </SectionCard>
    </div>
  );
};

export default MainContent;
