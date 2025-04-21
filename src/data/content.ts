/**
 * Application text content centralized in one file
 * This makes it easier to maintain, update, and potentially localize the app in the future
 */

export const content = {
  // Common elements across the app
  common: {
    appName: "BMI Buddy",
    buttons: {
      calculateBMI: "Calculate BMI",
      calculateYourBMI: "Calculate your BMI",
    },
  },

  // Landing page hero section
  hero: {
    heading: "Understand Your Body,",
    headingHighlight: "Track Your Health",
    description: "BMI Buddy helps you easily calculate and track your Body Mass Index, providing personalized insights for a healthier lifestyle.",
    buttonText: "Calculate your BMI",
    buttonAriaLabel: "Calculate your BMI - scroll to calculator section",
  },

  // About section content
  about: {
    heading: "Why BMI Matters",
    description: "Body Mass Index (BMI) is a simple calculation that helps you understand your body weight in relation to your height. It's a useful tool for assessing your overall health.",
    benefits: {
      trackHealth: "Track your health",
      stayInformed: "Stay informed",
    },
  },

  // CTA section with calculator
  cta: {
    heading: "Calculate Your BMI Now",
    headingHighlight: "BMI",
    description: "Enter your height and weight below to instantly get your BMI and understand what it means for your health.",
  },

  // BMI Calculator form
  bmiForm: {
    legend: "Enter your height and weight details",
    height: {
      label: "Height",
      placeholder: "Enter your height",
      unit: "cm",
    },
    weight: {
      label: "Weight",
      placeholder: "Enter your weight",
      unit: "kg",
    },
    submitButton: "Calculate BMI",
    submitAriaLabel: "Calculate your BMI",
  },

  // BMI result section
  bmiResult: {
    heading: "Your BMI Result",
    ariaLabel: "BMI value: {value}",
    categoryAriaLabel: "BMI Category: {category}",
    healthRecommendationAriaLabel: "Health recommendation",
    categories: {
      underweight: {
        name: "Underweight",
        message: "Your BMI suggests you're underweight. Consider consulting with a healthcare provider about healthy ways to gain weight.",
      },
      normal: {
        name: "Normal",
        message: "Your BMI is within the normal range. Keep up the good work with a balanced diet and regular exercise!",
      },
      overweight: {
        name: "Overweight",
        message: "Your BMI suggests you're overweight. Small lifestyle changes like more physical activity and a balanced diet can help.",
      },
      obese: {
        name: "Obese",
        message: "Your BMI suggests obesity. Consider talking to a healthcare provider about strategies to achieve a healthier weight.",
      },
    },
  },

  // 404 Not Found page
  notFound: {
    title: "Page not found",
    description: "Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.",
    buttonText: "Return to homepage",
    buttonAriaLabel: "Go back to home page",
  },

  // Footer section
  footer: {
    copyright: "© 2025 BMI Buddy. All rights reserved.",
    links: {
      privacy: "Privacy Policy",
    },
  },
} as const;

/**
 * Simple hook for accessing content
 * Can be expanded to include localization support in the future
 */
export function useContent() {
  return content;
}