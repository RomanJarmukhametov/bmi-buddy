/**
 * Reusable button component with different style variants.
 * Supports primary and secondary styles, hover and focus states,
 * and accessibility attributes.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler function
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - HTML button type
 * @param {string} [props.className] - Additional CSS classes
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Button style variant
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.aria-label] - Accessibility label
 * @returns {JSX.Element} Styled button component
 */
"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  "aria-label"?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer hover:shadow-md hover:scale-[1.02]";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled
          ? "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none"
          : ""
      }`}>
      {children}
    </button>
  );
}
