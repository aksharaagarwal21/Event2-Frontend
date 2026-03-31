import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Laptop, Pizza, Award, MapPin } from "lucide-react";

const timelineEvents = [
  {
    time: "8:00 AM",
    title: "Physical Registrations & Check-in",
    description:
      "Welcome! Grab your event kit and get set for an exciting day.",
    location: "Main Entrance",
    icon: ClipboardList,
  },
  {
    time: "9:00 AM",
    title: "Workshop: Session I",
    description: "Deep dive into core DSA concepts and placement strategies.",
    location: "GN Ramachandran Hall",
    icon: Laptop,
  },
  {
    time: "1:00 PM",
    title: "Networking Lunch",
    description: "Recharge with complimentary lunch and connect with peers.",
    location: "Cafeteria",
    icon: Pizza,
  },
  {
    time: "2:00 PM",
    title: "Workshop: Session II",
    description: "Advanced problem-solving sessions and competitive rounds.",
    location: "GN Ramachandran Hall",
    icon: Laptop,
  },
  {
    time: "5:00 PM",
    title: "Closing Ceremony",
    description: "Vote of thanks, and final wrap-up.",
    location: "Main Stage",
    icon: Award,
  },
];

// --- SOLUTION: Extracted repeating logic into its own component ---
const TimelineEvent = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isLeft = index % 2 !== 0;

  return (
    <motion.div
      key={index}
      ref={ref}
      className="mb-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center lg:justify-center relative">
        <motion.div
          className={`absolute w-8 h-8 rounded-full border-4 border-orange-500 bg-black flex items-center justify-center z-10
            ${
              isLeft
                ? "left-4 lg:left-[calc(50%-2.2rem)]"
                : "left-4 lg:left-[calc(50%+0.165rem)]"
            }`}
          variants={{
            hidden: { scale: 0 },
            visible: {
              scale: 1,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
        >
          <div
            className={`w-4 h-4 rounded-full bg-yellow-500 transition-all duration-300 ${
              isInView ? "animate-pulse" : ""
            }`}
          ></div>
        </motion.div>

        {/* Timeline Card */}
        <motion.div
          className={`w-full pl-12 lg:pl-0 lg:w-5/12 ${
            isLeft ? "lg:mr-[46%] lg:pr-8" : "lg:ml-[46%] lg:pl-8"
          }`}
          variants={{
            hidden: { opacity: 0, x: isLeft ? -50 : 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
        >
          <div className="p-6 bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl shadow-lg relative group overflow-hidden">
            <div className="absolute -inset-px bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 blur-md -z-10" />

            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full opacity-200"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-yellow-500/10 to-transparent rounded-tl-full opacity-200"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 bg-orange-500/20 rounded-lg text-orange-500 mt-1">
                <event.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-orange-500">
                  {event.time}
                </p>
                <h3 className="text-lg font-bold text-white mt-1">
                  {event.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 mt-3 text-orange-500">
                  <MapPin size={14} />
                  <span className="text-xs font-medium">{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="bg-black text-white py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold font-pixel text-brand-gold mb-6 tracking-wider break-words">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
            Journey through IGNISIA'25 Schedule
          </p>
        </div>

        <div className="relative max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
          {/* The main timeline bar - visible on all screens */}
          <div className="absolute top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-yellow-500 left-4 lg:left-1/2 lg:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
