import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import FadeIn from "./FadeIn";
import CountdownTimer from "./CountdownTimer";
import IgnisiaImage from "../assets/Ignisia.webp";
import AnimatedTagline from "./AnimatedTagline";
import Button from "./Button";

const Hero = () => {
  const eventDetails = [
    { icon: Calendar, label: "Date", value: "13th Oct 2025" },
    { icon: Clock, label: "Time", value: "9:00 AM – 5:00 PM" },
    { icon: MapPin, label: "Venue", value: "GN Ramachandran Hall, SRMIST" },
    {
      icon: Users,
      label: "Organized by",
      value: "GeeksforGeeks Campus Body SRMIST",
    },
  ];

  // Text for the new animated tagline
  const tagline =
    "The flagship Technical Workshop & Competitive Rounds event, strengthening your skills for ultimate placement readiness.";

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 min-h-[90vh] flex items-center justify-center text-center bg-black overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-10 md:grid-cols-20 gap-1 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-brand-orange w-px h-px"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{
                duration: 5,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-20 max-w-5xl flex flex-col items-center">
        <FadeIn delay={0.1}>
          <motion.img
            src={IgnisiaImage}
            alt="IGNISIA"
            className="w-full max-w-xl md:max-w-3xl lg:max-w-[850px] h-auto mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </FadeIn>

        <FadeIn delay={0.4}>
          <CountdownTimer />
        </FadeIn>

        <FadeIn delay={0.6} direction="down" className="w-full max-w-4xl">
          <div className="mt-8 mb-10">
            <AnimatedTagline text={tagline} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-10 max-w-4xl mx-auto">
            {eventDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-brand-gold/30 hover:border-brand-gold transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-brand-orange mb-2" />
                  <span className="text-xs font-nav uppercase tracking-wider text-gray-400">
                    {detail.label}
                  </span>
                  <p className="text-sm md:text-base font-semibold text-white mt-1">
                    {detail.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              href="https://unstop.com/o/wA7Zij8"
              target="_blank"
              variant="primary"
              font="pixel"
            >
              Register Now!
            </Button>
            <Button href="#about" variant="secondary">
              Learn More
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
