import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button";

const UNSTOP_REGISTRATION_URL = "https://unstop.com/o/wA7Zij8";

const Popup = ({ onClose }) => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-lg bg-black/20 backdrop-blur-lg rounded-2xl border border-brand-glow/20 shadow-2xl shadow-brand-orange/20 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors z-10"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center p-8 sm:p-12 text-center pt-10">
          <p className="text-lg text-gray-200 mb-8 font-nav">
            Stop debugging your career path alone. Register for IGNISIA '25 and
            start building it with the experts.
          </p>
          <Button
            href={UNSTOP_REGISTRATION_URL}
            target="_blank"
            size="large"
            font="pixel"
          >
            Register Now
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
