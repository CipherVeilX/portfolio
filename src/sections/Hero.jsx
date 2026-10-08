import { MatrixRain } from "@/components/MatrixRain";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { ChevronDown } from "lucide-react";
import { Download } from "lucide-react";

const skills = [
  "Splunk",
  "SIEM Fundamentals",
  "Log Analysis",
  "Threat Detection",
  "Incident Response",
  "Linux",
  "Network Security",
  "MITRE ATT&CK"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Gradient overlay on top */}
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono font-semibold text-primary border border-primary/40 shadow-[0_0_15px_rgba(47,129,247,0.3)] animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#2f81f7]" />
                &lt;Aspiring_SOC_Analyst /&gt;
              </span>

              {/* Headline */}
              <div className="mt-6 space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight animate-fade-in animation-delay-100">
                  Learning to defend
                  <br />
                  <span className="font-serif italic font-semibold text-primary glow-text">
                    systems
                  </span>{" "}
                  before the
                  <br />
                  threats find them
                  <span className="text-primary animate-pulse"> </span>
                </h1>
              </div>

              <p className="mt-6 text-lg text-muted-foreground max-w-lg font-mono animate-fade-in animation-delay-200">
                <span className="text-primary">$</span> Aspiring SOC Analyst
                building hands-on skills in threat monitoring, log analysis,
                and incident response - currently sharpening my craft through
                labs, CTFs, and real-world practice.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground font-mono">Follow me:</span>
              {[
                { icon: SiGithub, href: "https://github.com/CipherVeilX" },
                { icon: SiInstagram, href: "https://www.instagram.com/cipherveilx" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
              {/* Profile Image */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0
                rounded-3xl bg-gradient-to-br
                from-pimary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
                
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/profile-photo.png"
                  alt="CypherVeilX"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-3 py-2 animated-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500% rounded-full animate-pulse" />
                    <div className="text-center">
                    <span className="text-xs font-medium text-white">Available for work</span>
                  </div>
                </div>
              </div>
                {/*Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-2xl px-3 py-2 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years of Exp.</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Current Learning Focus</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => ( 
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
         <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
         >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
         </a>
      </div>
    </section>
  );
};