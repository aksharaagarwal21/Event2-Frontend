import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "./Button";

// Import logos
import GfgLogo from "../assets/gfg-logo.webp";
import GfgTextLogo from "../assets/geeksforgeeks.webp";

const UNSTOP_REGISTRATION_URL = "https://unstop.com/o/wA7Zij8";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#speaker", label: "Guest" },
    { href: "#timeline", label: "Timeline" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#faqs", label: "FAQs" },
  ];

  const contentAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      width: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center items-center py-4 px-4">
      <motion.div
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-between rounded-full 
                   bg-black/80 backdrop-blur-lg border border-brand-glow/50 
                   shadow-inner-glow px-4 py-3"
      >
        {/* Left Side: GFG Logo and Name */}
        <div className="flex items-center gap-3">
          <a href="#home" aria-label="Homepage">
            <motion.div layout="position">
              <img
                src={GfgLogo}
                alt="GeeksForGeeks SRMIST Logo"
                className="w-9 h-9 object-contain"
              />
            </motion.div>
          </a>
          {/* Text Logo is now hidden on tablet (md) screens to save space */}
          <motion.div
            variants={contentAnimation}
            animate={isScrolled ? "hidden" : "visible"}
            className="overflow-hidden whitespace-nowrap hidden md:hidden lg:inline-block"
          >
            <img
              src={GfgTextLogo}
              alt="GeeksforGeeks Logo"
              className="h-[1.2rem]"
            />
          </motion.div>
        </div>

        {/* Center: Desktop-Only Nav Links */}
        <motion.div
          variants={contentAnimation}
          animate={isScrolled ? "hidden" : "visible"}
          className="hidden md:flex items-center gap-1 lg:gap-2 overflow-hidden" // Reduced gap on md
        >
          <div className="w-px h-6 bg-white/10" />
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2 lg:px-3 py-2 text-xs lg:text-sm font-nav font-bold tracking-wider uppercase text-brand-gold hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Right Side: Register Button */}
        <div className="flex items-center ml-2 lg:ml-4">
          <Button
            href={UNSTOP_REGISTRATION_URL}
            target="_blank"
            size="small"
            font="nav"
          >
            Register Now
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
