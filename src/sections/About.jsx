import { ShieldAlert, Search, Terminal, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: ShieldAlert,
    title: "Threat Awareness",
    description:
      "Studying real-world attack patterns and the MITRE ATT&CK framework to understand how threats operate.",
  },
  {
    icon: Search,
    title: "Log Analysis",
    description:
      "Practicing log correlation and anomaly detection through labs and simulated SOC environments.",
  },
  {
    icon: Terminal,
    title: "Hands-On Practice",
    description:
      "Regularly working through CTFs and platforms like TryHackMe to sharpen practical security skills.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Actively studying for certifications and staying current with the evolving threat landscape.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Watching systems closely,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one alert at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an aspiring SOC Analyst building a strong foundation in
                threat monitoring, log analysis, and incident response. My
                interest in cybersecurity started with wanting to understand
                how systems break, and it's grown into a genuine drive to
                learn how to defend them.
              </p>
              <p>
                I'm currently focused on core blue-team skills — reading
                logs, spotting anomalies, understanding attacker behavior
                through frameworks like MITRE ATT&CK, and getting comfortable
                with tools used in real SOC environments.
              </p>
              <p>
                When I'm not studying, you'll find me working through CTFs,
                practicing on platforms like TryHackMe, or reading about
                recent security incidents to learn from how they unfolded.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to become the kind of analyst who notices what others miss, someone systems can trust to catch a threat before it becomes a headline. I may not have the experience yet, but I have something just as valuable: relentless consistency. Every log, every lab, every late night practicing is building toward the analyst I'm determined to become."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};