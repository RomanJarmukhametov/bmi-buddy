/**
 * Header component for the BMI Buddy application.
 * Features a sticky navigation bar with branding and navigation links
 * that remains visible as the user scrolls through the application.
 *
 * Features:
 * - App branding with animated icon
 * - Navigation links to key sections
 * - Smooth scroll functionality to the calculator section
 * - Responsive design for different screen sizes
 * - Accessibility attributes for navigation elements
 *
 * @returns {JSX.Element} Rendered header with navigation
 */
"use client";

import { Activity } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { content } from "@/data/content";

export default function Header() {
  const { common } = content;

  const handleScrollToCalculator = () => {
    document.getElementById("calculator-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm"
      role="banner">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link
            href="/"
            aria-label={`${common.appName} Home`}>
            <motion.div
              className="flex items-center gap-1 md:gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Activity
                size={24}
                className="text-blue-600"
                aria-hidden="true"
              />
              <span className="text-lg md:text-xl font-bold text-gray-900">
                {common.appName}
              </span>
            </motion.div>
          </Link>

          <nav aria-label="Primary navigation">
            <ul
              className="flex items-center gap-3 md:gap-6"
              role="menubar">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                role="none">
                <Link
                  href="/"
                  className="text-sm md:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
                  role="menuitem">
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                role="none">
                <button
                  className="text-sm md:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
                  onClick={handleScrollToCalculator}
                  role="menuitem"
                  aria-label="Go to BMI calculator">
                  Calculator
                </button>
              </motion.li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
