import React, { useState, useEffect, memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TARGET_DATE = new Date("October 13, 2025 09:00:00 GMT+0530").getTime();

const TimeSegment = memo(({ value, label }) => {
  return (
    <div className="flex flex-col items-center p-2 sm:p-4 bg-black/50 backdrop-blur-md rounded-xl border border-brand-orange/50">
      <motion.div
        className="text-3xl sm:text-4xl md:text-6xl font-pixel text-brand-gold"
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.div>
      <span className="text-xs sm:text-sm font-nav uppercase tracking-widest mt-1 text-gray-400">
        {label}
      </span>
    </div>
  );
});

TimeSegment.displayName = "TimeSegment"; // Add display name for better debugging

const CountdownTimer = () => {
  const [time, setTime] = useState(TARGET_DATE - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(TARGET_DATE - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (time <= 0) {
    return (
      <div className="text-2xl font-nav text-brand-gold">
        IGNISIA 2025 is LIVE!
      </div>
    );
  }

  const totalSeconds = Math.floor(time / 1000);
  const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((totalSeconds % (3600 * 24)) / 3600)
  ).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, "0");

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 mt-10">
      <TimeSegment value={days} label="Days" />
      <TimeSegment value={hours} label="Hours" />
      <TimeSegment value={minutes} label="Mins" />
      <TimeSegment value={seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;
