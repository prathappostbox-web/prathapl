import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with modern web technologies featuring smooth animations and responsive design.",
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

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 gradient-bg mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <FolderGit2 size={40} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0">
                  View Project <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
