/**
 * Card component for displaying content in a visually distinct container.
 * Provides consistent styling with rounded corners and shadow effects
 * for content blocks throughout the application.
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.role] - ARIA role attribute
 * @param {string} [props.aria-labelledby] - ID of element that labels this card
 * @returns {JSX.Element} Styled card container
 */
"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  role?: string;
  "aria-labelledby"?: string;
}

export default function Card({
  children,
  className = "",
  role,
  "aria-labelledby": ariaLabelledby,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
      role={role}
      aria-labelledby={ariaLabelledby}>
      {children}
    </div>
  );
}
