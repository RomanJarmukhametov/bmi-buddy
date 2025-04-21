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
