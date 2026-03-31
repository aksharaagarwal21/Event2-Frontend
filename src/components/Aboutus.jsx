import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  Briefcase,
  Code,
  UserCheck,
  Key,
  Award,
  Gift,
  CheckCircle,
  Coffee,
  ChevronRight,
} from "lucide-react";

const Aboutus = () => {
  const placementHighlights = [
    {
      title: "Master Resume & Interviews",
      description: "Build a standout resume and ace interviews.",
      icon: Briefcase,
    },
    {
      title: "Crack DSA Easily",
      description: "Simplify DSA with concepts made easy and practical.",
      icon: Code,
    },
    {
      title: "Personalized Mentorship",
      description: "Receive one-to-one guidance from experts.",
      icon: UserCheck,
    },
    {
      title: "Unlock Insider Secrets",
      description:
        "Discover proven strategies to crack top tech company interviews.",
      icon: Key,
    },
  ];

  // Requested event benefits/goodies
  const eventBenefits = [
    {
      title: "E-Certificates",
      description: "Official, shareable certification for all participants.",
      icon: Award,
    },
    {
      title: "Exclusive Merchandise",
      description: "Premium goodies and swag bags for attendees.",
      icon: Gift,
    },
    {
      title: "ODs (On-Duty Permissions)",
      description:
        "Secure necessary college permissions for full event attendance.",
      icon: CheckCircle,
    },
    {
      title: "Gourmet Refreshments",
      description: "Complimentary food and beverages (breakfast & lunch).",
      icon: Coffee,
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const StructuredCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-start p-6 bg-black/40 border border-brand-gold/20 rounded-xl transition-all duration-300 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-orange/10">
      <div className="p-3 rounded-xl bg-brand-orange/20 mb-3 flex-shrink-0">
        <Icon className="w-6 h-6 text-brand-orange" />
      </div>
      <h5 className="text-lg font-semibold text-white mb-1">{title}</h5>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  return (
    <section
      id="about"
      className="relative pt-36 pb-24 bg-black overflow-hidden"
    >
      <FadeIn className="relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold font-pixel text-brand-gold mb-6 break-words">
              About IGNISIA
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>

            {/* BOLD FIX: Replaced **flagship annual workshop series** with <strong> tags */}
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to IGNISIA, the{" "}
              <strong>flagship annual workshop series</strong> of GeeksforGeeks
              SRMIST, launching in 2025. As one of SRM’s largest and most
              dynamic workshops, it is the ultimate meeting point for{" "}
              <strong>innovation, learning, and collaboration</strong>.
            </p>
          </div>

          {/* IGNISIA '25 VALUE PROPOSITION (Top Section) */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-brand-orange mb-10">
              IGNISIA ‘25: Ultimate Placement Training & DSA
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {placementHighlights.map((item, index) => (
                <StructuredCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* EVENT INCLUSIONS & GOODIES (Bottom Section) */}
          <div className="p-10 bg-black/50 backdrop-blur-lg border border-brand-glow/30 rounded-2xl">
            <h3 className="text-3xl font-bold font-nav text-center text-white mb-8">
              What You Get 🎁
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {eventBenefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-black/30 rounded-xl border border-brand-gold/10"
                  >
                    <Icon className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-white font-semibold">{item.title}</h5>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FINAL CALL TO ACTION */}
          <div className="text-center mt-16">
            <div className="bg-black/50 backdrop-blur-lg border border-brand-glow/30 p-8 rounded-lg hover:shadow-inner-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">
                Join the Revolution
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Be part of the most exciting tech workshop at SRM University.
                Don't miss this opportunity to learn, network, and grow with the
                best in the industry.
              </p>
              <div className="text-brand-gold font-bold text-xl">
                IGNISIA 2025 - Where Innovation Meets Excellence
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Aboutus;
