import { z } from "zod";

// BMI calculation validation schema
export const BMISchema = z.object({
  height: z
    .string()
    .nonempty("Height is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Height must be a number",
    })
    .refine((val) => Number(val) > 0, {
      message: "Height must be greater than 0",
    })
    .refine((val) => Number(val) <= 300, {
      message: "Height must be less than 300cm",
    }),
  weight: z
    .string()
    .nonempty("Weight is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Weight must be a number",
    })
    .refine((val) => Number(val) > 0, {
      message: "Weight must be greater than 0",
    })
    .refine((val) => Number(val) <= 500, {
      message: "Weight must be less than 500kg",
    }),
});

export type BMIFormData = z.infer<typeof BMISchema>;

// Contact form validation schema (for future use)
export const ContactSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
