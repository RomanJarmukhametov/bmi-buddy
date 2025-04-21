import { z } from "zod";

// Define validation schemas for input and output
const BMIInputSchema = z.object({
  height: z.number().positive("Height must be positive"),
  weight: z.number().positive("Weight must be positive"),
});

export const BMIResultSchema = z.object({
  bmi: z.number().nonnegative(),
  category: z.enum(["Underweight", "Normal", "Overweight", "Obese"]),
  message: z.string(),
});

// Types derived from the schemas
export type BMIInput = z.infer<typeof BMIInputSchema>;
export type BMIResult = z.infer<typeof BMIResultSchema>;

// Type for the allowed category values
type BMICategory = "Underweight" | "Normal" | "Overweight" | "Obese";

export function calculateBMI(height: number, weight: number): BMIResult {
  // Validate inputs
  const validatedInput = BMIInputSchema.parse({ height, weight });

  const bmi = validatedInput.weight / Math.pow(validatedInput.height / 100, 2);
  let category: BMICategory;
  let message = "";

  if (bmi < 18.5) {
    category = "Underweight";
    message =
      "Your BMI is below the normal range. Consider consulting a healthcare provider.";
  } else if (bmi < 25) {
    category = "Normal";
    message = "Your BMI is within the normal range. Keep up the good work!";
  } else if (bmi < 30) {
    category = "Overweight";
    message =
      "Your BMI is above the normal range. Consider adopting healthier habits.";
  } else {
    category = "Obese";
    message =
      "Your BMI is significantly above normal. Professional guidance is recommended.";
  }

  const result = {
    bmi: parseFloat(bmi.toFixed(1)),
    category,
    message,
  };

  // Validate the output
  return BMIResultSchema.parse(result);
}
