/**
 * BMI calculator form component.
 * Handles user input for height and weight, performs validation using Zod schemas,
 * calculates BMI results, and displays them with animation effects.
 * 
 * Features:
 * - Input validation with error messages
 * - Real-time BMI calculation
 * - Animated transitions for results
 * - Accessibility attributes for screen readers
 * 
 * @returns {JSX.Element} The rendered BMI calculator form with validation and results display
 */
"use client";
import { useState, FormEvent } from "react";
import { calculateBMI, BMIResult as BMIResultType } from "@/lib/calculateBMI";
import { BMISchema } from "@/lib/validationSchemas";
import Input from "./Input";
import Button from "./Button";
import BMIResult from "./BMIResult";
import { motion } from "motion/react";
import { z } from "zod";
import { content } from "@/data/content";

export default function BMIForm() {
  const { bmiForm } = content;
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [errors, setErrors] = useState<{ height?: string; weight?: string }>(
    {}
  );
  const [result, setResult] = useState<null | BMIResultType>(null);
  const [showResult, setShowResult] = useState(false);

  const validateForm = (): boolean => {
    try {
      BMISchema.parse({ height, weight });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const bmiResult = calculateBMI(Number(height), Number(weight));
      setResult(bmiResult);

      // Reset show result to trigger animation
      setShowResult(false);
      setTimeout(() => setShowResult(true), 100);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="mb-6 px-2 sm:px-0"
        aria-label="BMI Calculator"
        noValidate>
        <fieldset>
          <legend className="sr-only">{bmiForm.legend}</legend>

          <Input
            label={bmiForm.height.label}
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={bmiForm.height.placeholder}
            unit={bmiForm.height.unit}
            error={errors.height}
            min={50}
            max={300}
            required
            aria-invalid={!!errors.height}
            aria-describedby={errors.height ? "height-error" : undefined}
          />

          <Input
            label={bmiForm.weight.label}
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={bmiForm.weight.placeholder}
            unit={bmiForm.weight.unit}
            error={errors.weight}
            min={10}
            max={500}
            required
            aria-invalid={!!errors.weight}
            aria-describedby={errors.weight ? "weight-error" : undefined}
          />

          <Button
            type="submit"
            className="w-full mt-4"
            aria-label={bmiForm.submitAriaLabel}>
            {bmiForm.submitButton}
          </Button>
        </fieldset>
      </form>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showResult ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          className="px-2 sm:px-0"
          aria-live="polite"
          role="region"
          aria-atomic="true">
          <BMIResult result={result} />
        </motion.div>
      )}
    </div>
  );
}
