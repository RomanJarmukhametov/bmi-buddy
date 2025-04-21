/**
 * Reusable input component with support for validation, measurement units, and accessibility.
 * Handles different input types, validation states, and provides clear error feedback.
 *
 * Features:
 * - Required field indication
 * - Validation error display
 * - Measurement units display
 * - Hover and focus states
 * - Comprehensive accessibility attributes
 * - Min/max value constraints
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Input label text
 * @param {string} props.id - Unique identifier for the input
 * @param {string} [props.type="text"] - Input type (text, number, etc.)
 * @param {string|number} props.value - Current input value
 * @param {Function} props.onChange - Handler for input changes
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.required=false] - Whether the field is required
 * @param {number} [props.min] - Minimum allowed value (for number inputs)
 * @param {number} [props.max] - Maximum allowed value (for number inputs)
 * @param {string} [props.unit] - Measurement unit to display
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.error] - Error message text
 * @param {boolean} [props.aria-invalid] - ARIA invalid state
 * @param {string} [props.aria-describedby] - ID of element that describes this input
 * @returns {JSX.Element} Styled input component with label and error handling
 */
"use client";

import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  unit?: string;
  className?: string;
  error?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

export default function Input({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  min,
  max,
  unit,
  className = "",
  error,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedby,
}: InputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm sm:text-base font-medium mb-1 sm:mb-2">
        {label}{" "}
        {required && (
          <span
            className="text-red-500"
            aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only">(required)</span>}
      </label>

      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          aria-invalid={ariaInvalid || (error ? true : false)}
          aria-describedby={ariaDescribedby || errorId}
          className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            hover:border-blue-300 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
        />
        {unit && (
          <span
            className="absolute right-3 top-2 text-gray-500 text-sm sm:text-base"
            aria-hidden="true">
            {unit}
          </span>
        )}
      </div>

      {error && (
        <p
          id={errorId}
          className="text-red-500 text-xs sm:text-sm mt-1"
          role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
