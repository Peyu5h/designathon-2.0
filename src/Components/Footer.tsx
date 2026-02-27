import React, { memo } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiGlobeSimple } from "react-icons/pi";

const socialLinks = [
  { Icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
  { Icon: PiGlobeSimple, url: "https://www.gdgcace.in/", label: "Website" },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/company/google-developer-student-club-ace",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/gdgc_ace",
    label: "Instagram",
  },
];

const Footer = memo(function Footer() {
  return (
    <footer className="bg-background w-full overflow-hidden relative">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground) / 0.15) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dunayy41e/image/upload/v1769463249/gdg-logo_lwjmhh.png"
              alt="GDG Logo"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h3 className="text-foreground text-lg uppercase">
                Google Developer Groups
              </h3>
              <p className="text-muted-foreground font-inter text-[12px] tracking-wider">
                On Campus • Atharva College of Engineering
              </p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mt-4 max-w-lg font-inter text-[13px] leading-relaxed">
          A community of student developers passionate about Google
          technologies. We organize events, workshops, and hackathons to help
          students learn and grow together.
        </p>

        <div className="border-border/50 flex flex-col items-center justify-between gap-2 border-t pt-4 mt-5 md:flex-row">
          <p className="text-muted-foreground font-inter text-[11px] tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground font-semibold">GDGC ACE</span> •
            All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, url, label }) => {
              const I = Icon as React.ComponentType<{ className?: string }>;
              return (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={label}
                >
                  <I className="text-xl" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
