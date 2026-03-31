import React from "react";
import FadeIn from "./FadeIn";
import { Youtube, Instagram, Linkedin, Globe } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import gfgLogo from "../assets/gfglogo.webp";

const Footer = () => {
  const footerNavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About IGNISIA" },
    { href: "#speaker", label: "Our Guests" },
    { href: "#timeline", label: "Timeline" },
    { href: "#faqs", label: "FAQs" },
  ];

  const partnersList = [
    { href: "https://www.geeksforgeeks.org/", name: "GeeksforGeeks" },
    { href: "https://unstop.com/", name: "Unstop" },
    { href: "https://www.coca-colacompany.com/", name: "CocaCola" },
    {
      href: "https://www.bk.com/",
      name: "Burger King",
    },
  ];

  const speakers = [
    {
      name: "Paras Atal",
      title: "SDE @ BNY | Content Creator",
    },
    {
      name: "Kanupriya Johari",
      title: "SDE @ BNY | Google WE Scholar",
    },
  ];

  return (
    <footer className="w-full flex justify-center p-4 sm:p-6 md:p-8 mt-12">
      <FadeIn direction="up" delay={0.2} className="w-full max-w-7xl">
        <div
          className="w-full bg-black/50 backdrop-blur-lg border border-brand-glow/50 rounded-3xl p-8 md:p-12
                     shadow-inner-glow"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 text-left">
            {/* Column 1: Branding */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
              <h3 className="text-3xl font-bold font-pixel text-brand-orange mb-3">
                IGNISIA
              </h3>
              <p className="font-nav text-sm text-gray-400">
                The flagship tech workshop at SRMIST.
              </p>
              <div className="flex space-x-3 mt-4">
                {[
                  {
                    href: "https://www.instagram.com/gfgsrmist/",
                    icon: Instagram,
                    label: "GfG Instagram",
                  },
                  {
                    href: "https://www.linkedin.com/company/gfgsrmist/",
                    icon: Linkedin,
                    label: "GfG LinkedIn",
                  },
                  {
                    href: "https://gfgsrm-website.vercel.app",
                    icon: Globe,
                    label: "GfG SRMIST Website",
                  },
                ].map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-brand-dark hover:bg-brand-gold/20 text-brand-gold hover:text-brand-orange transition-all duration-200 group"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm font-nav"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Speakers (Updated) */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">
                Our Speakers
              </h4>
              <div className="space-y-4">
                {speakers.map((speaker) => (
                  <div key={speaker.name}>
                    <h5 className="font-bold text-white text-lg mb-1">
                      {speaker.name}
                    </h5>
                    <p className="text-sm text-brand-orange">{speaker.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Our Partners */}
            <div className="flex flex-col items-start lg:items-end">
              <h4 className="font-bold font-pixel uppercase tracking-wider text-brand-gold mb-4">
                Our Partners
              </h4>
              <ul className="space-y-2 lg:text-right">
                {partnersList.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center lg:justify-end"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-nav text-sm text-white hover:text-brand-orange transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-6 border-t border-white/10 w-full flex justify-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} GeeksForGeeks SRMIST. All rights
              reserved.
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
