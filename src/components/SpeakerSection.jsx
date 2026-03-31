import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  Briefcase,
  Award,
  Linkedin,
  Instagram,
  Code,
  Star,
  BookOpen,
} from "lucide-react";

import ParasAtalImage from "../assets/Paras.webp";
import KanupriyaJohariImage from "../assets/Kanupriya.webp";

const speakers = [
  {
    name: "Paras Atal",
    title: "SDE @ BNY | Content Creator",
    image: ParasAtalImage,
    bio: "A Software Engineer and active creator helping thousands of students break into tech via content on placements, resumes, and career growth.",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/i.amparas/",
        icon: Instagram,
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/paras-atal-627918197/",
        icon: Linkedin,
      },
    ],
    highlights: [
      {
        title: "Samsung AI Research",
        description:
          "Conducted AI/ML research under the Samsung PRISM program.",
        icon: Code,
      },
      {
        title: "150K+ Community",
        description:
          "Grown a massive following by sharing actionable career advice.",
        icon: Star,
      },
    ],
    animationDirection: "right",
  },
  {
    name: "Kanupriya Johari",
    title: "SDE @ BNY | Google WE Scholar",
    image: KanupriyaJohariImage,
    bio: "A Software Developer and a Google WE Scholar, passionate about technology and with extensive experience from top internships.",
    socials: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/kanupriya-johari",
        icon: Linkedin,
      },
    ],
    highlights: [
      {
        title: "Google WE Scholar '22",
        description:
          "Selected as one of 250 scholars from over 30,000 applicants.",
        icon: Award,
      },
      {
        title: "SPARK Intern @ IIT Roorkee",
        description: "Contributed to cutting-edge summer research projects.",
        icon: BookOpen,
      },
    ],
    animationDirection: "left",
  },
];

// eslint-disable-next-line no-unused-vars
const HighlightCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-black/40 rounded-xl border border-brand-gold/20">
    <div className="p-3 rounded-lg bg-brand-orange/20 text-brand-orange flex-shrink-0 mt-1">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const SpeakerCard = ({ speaker }) => (
  <FadeIn direction={speaker.animationDirection} delay={0.3}>
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Image & Socials Column */}
      <div
        className={`flex flex-col items-center lg:col-span-4 ${
          speaker.animationDirection === "left" ? "lg:order-last" : ""
        }`}
      >
        <div className="relative w-64 h-64 lg:w-72 lg:h-72 mb-6 border-4 border-brand-gold/50 rounded-full overflow-hidden shadow-2xl shadow-brand-orange/40">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="flex justify-center space-x-4">
          {speaker.socials.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${speaker.name} ${link.platform}`}
                className="p-3 rounded-full bg-brand-dark hover:bg-brand-orange/20 text-brand-gold hover:text-brand-orange transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-8 text-center lg:text-left">
        <h3 className="text-4xl font-nav font-bold text-white">
          {speaker.name}
        </h3>
        <p className="text-lg text-brand-orange mt-1">{speaker.title}</p>
        <p className="text-gray-300 my-6 max-w-xl mx-auto lg:mx-0">
          {speaker.bio}
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {speaker.highlights.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </FadeIn>
);

const SpeakerSection = () => {
  return (
    <section id="speaker" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold font-pixel text-brand-gold mb-6 break-words">
            Meet Our Guests
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
