# BMI Buddy

A simple and intuitive tool to calculate and track your Body Mass Index (BMI), providing insights to help you maintain a healthy lifestyle.

## Features

- **Interactive BMI Calculator:** Quick and accurate BMI calculation with height and weight inputs
- **Health Categorization:** Automatic categorization (Underweight, Normal, Overweight, Obese)
- **Personalized Recommendations:** Tailored health insights based on your BMI result
- **Responsive Design:** Optimized for all devices from mobile to desktop
- **Accessibility:** Fully accessible with screen reader support and keyboard navigation

## Project Structure

### Pages
- `/` - Homepage with BMI calculator
- `/privacy` - Privacy policy page

### Components

#### Landing Components
- `Hero.tsx` - Hero section with animated illustrations and call to action
- `About.tsx` - Information about BMI importance with benefit icons
- `CTA.tsx` - Call to action section with the BMI calculator form

#### UI Components
- `BMIForm.tsx` - Form component for height and weight input with validation
- `BMIResult.tsx` - Displays BMI calculation results and health classification
- `Button.tsx` - Reusable button component
- `Card.tsx` - Container component with consistent styling
- `Footer.tsx` - Site footer with links and copyright information
- `Header.tsx` - Site header with navigation
- `Input.tsx` - Form input component with validation support

### Libraries and Utilities
- `calculateBMI.ts` - Logic for BMI calculations and result interpretation
- `validationSchemas.ts` - Zod schemas for form validation
- `content.ts` - Centralized content data for the application

### SEO and Metadata
- `robots.ts` - Generated robots.txt for search engine crawling control
- `sitemap.ts` - Generated sitemap for improved search engine indexing

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Zod** - Form validation
- **Motion** - Animation library

## Contact

Have questions or feedback? Contact us at hello@ideaflow.studio
