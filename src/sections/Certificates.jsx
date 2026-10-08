const certificates = [
  {
    title: "Cisco Certified Cyber Threat Management",
    issuer: "Cisco",
    description:
      "Covers threat detection, incident response, and security monitoring fundamentals.",
    link: "#", // Add your Credly/verification link here
  },
  {
    title: "Hack The Box Profile",
    issuer: "Hack The Box",
    description:
      "Hands-on penetration testing and machine pwning practice. Rank and progress on profile.",
    link: "#", // Add your HTB profile link here
  },
  {
    title: "TryHackMe — SOC Level 1 Path",
    issuer: "TryHackMe",
    description:
      "Completed rooms covering SIEM, log analysis, and incident response fundamentals.",
    link: "#", // Add your THM profile link here
  },
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proof of{" "}
            <span className="font-serif italic font-normal text-white">
              the work.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Certifications and hands-on platforms I've used to build
            practical security skills.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl hover:border-primary/40 transition-all animate-fade-in"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Issuer */}
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {item.issuer}
              </span>

              {/* Certificate Title */}
              <h3 className="text-lg font-semibold mt-1 mb-2 text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};