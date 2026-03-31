import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import FadeIn from "./FadeIn";

// Custom hook to get window dimensions for the confetti
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { width: size[0], height: size[1] };
};
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path
      fill="#25D366"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <defs>
      <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path
      fill="url(#ig-gradient)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-[#0A66C2]"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const communityLinks = [
  {
    name: "WhatsApp",
    description:
      "Join our WhatsApp community for instant updates, reminders, and exclusive content.",
    href: "https://chat.whatsapp.com/BEDZpDVqDkO8t1AbtjFQ6k?mode=ems_copy_t",
    icon: WhatsAppIcon,
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-700",
    hoverFrom: "from-green-400",
    hoverTo: "to-emerald-500",
  },
  {
    name: "Instagram",
    description:
      "Follow us on Instagram for behind-the-scenes content, event highlights, and more.",
    href: "https://www.instagram.com/gfgsrmist/",
    icon: InstagramIcon,
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-500",
    gradientFrom2: "from-orange-400",
    gradientTo2: "to-red-500",
    hoverFrom: "from-purple-400",
    hoverTo: "to-pink-500",
  },
  {
    name: "LinkedIn",
    description:
      "Connect with us on LinkedIn for professional insights, networking, and career tips.",
    href: "https://www.linkedin.com/company/gfgsrmist/",
    icon: LinkedInIcon,
    gradientFrom: "from-blue-400",
    gradientTo: "to-cyan-500",
    hoverFrom: "from-blue-400",
    hoverTo: "to-cyan-500",
  },
];
const FollowUs = () => {
  // --- NEW LOGIC ADDED HERE ---
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLinkClick = (href) => {
    // 1. Trigger the confetti immediately
    setShowConfetti(true);

    // 2. After a 3.5 second delay, open the link in a new tab
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 3500);

    // 3. Turn off the confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section
      id="community"
      className="relative bg-black text-white py-24 px-4 overflow-hidden"
    >
      {/* Conditionally render confetti within this component */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <FadeIn>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold font-pixel text-brand-gold mb-6 break-words">
              Join Our Community
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Don't miss a beat! Follow us for exclusive updates,
              behind-the-scenes content, and direct access to future
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communityLinks.map((link) => {
              const Icon = link.icon;
              return (
                // --- CHANGED from motion.a to motion.div ---
                <motion.div
                  key={link.name}
                  className="block p-8 bg-black/40 backdrop-blur-md border border-brand-glow/20 rounded-2xl text-center group relative overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 2000 },
                  }}
                  onClick={() => handleLinkClick(link.href)} // Use the new handler
                >
                  <div
                    className={`absolute -inset-px bg-gradient-to-r ${link.gradientFrom} ${link.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10`}
                  />

                  <div className="flex justify-center mb-4">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold font-nav text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400">
                    {link.name}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400">
                    {link.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default FollowUs;
