import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "large",
  font = "pixel",
  as = "a",
  ...props
}) => {
  const Component = as === "a" ? motion.a : motion.button;

  const baseStyle = `
    rounded-full uppercase
    transform transition-all duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-offset-black focus-visible:ring-brand-glow
  `;

  const variantStyles = {
    primary: `
      bg-brand-orange text-white hover:bg-brand-gold
      shadow-lg shadow-brand-orange/50
    `,
    secondary: `
      bg-transparent border-2 border-brand-gold text-brand-gold
      hover:bg-brand-gold/10
    `,
  };

  const sizeStyles = {
    large: "px-8 py-3",
    small: "px-4 py-2",
  };

  // ▼▼▼ NEW: Styles for different font types ▼▼▼
  const fontStyles = {
    pixel: "font-pixel text-xs sm:text-sm",
    nav: "font-nav font-bold tracking-wider text-sm",
  };

  return (
    <Component
      // Apply the font style along with the other styles
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${fontStyles[font]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
