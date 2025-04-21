"use client";

import { motion } from "motion/react";

import Card from "../ui/Card";
import BMIForm from "../ui/BMIForm";

export default function CTA() {
  return (
    <section
      id="calculator-section"
      className="py-12 sm:py-16 md:py-24 bg-gray-50"
      aria-labelledby="calculator-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2
              id="calculator-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Calculate Your <span className="text-blue-600">BMI</span> Now
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
              Enter your height and weight below to instantly get your BMI and
              understand what it means for your health.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto">
          <Card className="p-4 sm:p-6 md:p-8">
            <BMIForm />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
