import { MapPin, Phone, Mail, Github, Linkedin, GraduationCap, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-5">
      {/* Profile Card */}
      <div className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center text-center space-y-3">
        {/* Profile Photo Placeholder */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full gradient-bg flex items-center justify-center ring-4 ring-primary/20 overflow-hidden">
            {/* Photo will be placed here — use id="profile-photo" */}
            <User size={52} className="text-primary-foreground/80" />
          </div>
          <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-card" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Prathap L</h1>
          <p className="text-sm text-muted-foreground mt-0.5">BCA Student · Aspiring Developer</p>
        </div>
      </div>

      {/* About */}
      <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">About</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I'm a passionate BCA student from Bangalore, eager to build impactful software and grow as a developer. I love solving problems with code and am always learning something new.
        </p>
      </div>

      {/* Contact */}
      <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Contact</p>
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-sm">
            <Phone size={15} className="text-primary shrink-0" />
            <span className="text-foreground">+91 6363941186</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={15} className="text-primary shrink-0" />
            <span className="text-foreground break-all">prathappostbox@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin size={15} className="text-primary shrink-0" />
            <span className="text-foreground">Bangalore, Karnataka, India</span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Education</p>
        <div className="space-y-3">
          <div className="flex gap-3">
            <GraduationCap size={15} className="text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Bachelor of Computer Applications</p>
              <p className="text-xs text-primary">2nd Year — 4th Semester</p>
              <p className="text-xs text-muted-foreground">Charan's Degree College, Bangalore</p>
            </div>
          </div>
          <div className="flex gap-3">
            <GraduationCap size={15} className="text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Pre-University (Science)</p>
              <p className="text-xs text-primary">Completed</p>
              <p className="text-xs text-muted-foreground">PU College, Bangalore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connect */}
      <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Connect</p>
        <div className="space-y-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="flex items-center gap-2"><Linkedin size={15} /> LinkedIn Profile</span>
            <span className="text-xs">↗</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="flex items-center gap-2"><Github size={15} /> GitHub</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
