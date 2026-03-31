// eslint-disable-next-line no-unused-vars
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({
  children,
  delay = 0.2,
  direction = "up",
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate={isInView || shouldReduceMotion ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
