/**
 * Hero component for the landing page.
 * Features an animated heading, description, and interactive icons with motion effects.
 * Includes a call-to-action button that smoothly scrolls to the BMI calculator section.
 *
 * @returns {JSX.Element} The rendered Hero component with animation effects
 */
"use client";

import { Scale, Activity, Heart } from "lucide-react";
import { motion } from "motion/react";
import Button from "../ui/Button";
import { content } from "@/data/content";

export default function Hero() {
  const { hero } = content;

  const handleScrollToCalculator = () => {
    document.getElementById("calculator-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100"
      aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                {hero.heading}
                <span className="text-blue-600 block sm:inline">
                  {" "}
                  {hero.headingHighlight}
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-lg text-center md:text-left">
                {hero.description}
              </p>

              <Button
                onClick={handleScrollToCalculator}
                className="text-base md:text-lg w-full sm:w-auto"
                aria-label={hero.buttonAriaLabel}>
                {hero.buttonText}
              </Button>
            </motion.div>
          </div>

          <div
            className="w-full md:w-1/2 flex justify-center px-4 md:px-0"
            aria-hidden="true">
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}>
              <motion.div
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}>
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}>
                  <Scale
                    size={32}
                    className="text-blue-500 md:size-24"
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}>
                  <Heart
                    size={32}
                    className="text-red-500 md:size-24"
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center col-span-2"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}>
                <motion.div
                  animate={{
                    y: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}>
                  <Activity
                    size={32}
                    className="text-green-500 md:size-24"
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
