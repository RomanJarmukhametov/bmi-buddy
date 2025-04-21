"use client";

import { FileQuestion, Home } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12">
        <motion.div
          className="text-center max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-gray-100 rounded-full">
              <FileQuestion
                size={80}
                className="text-blue-600"
                aria-hidden="true"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page not found
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2"
              aria-label="Go back to home page">
              <Home
                size={18}
                aria-hidden="true"
              />
              <Link href="/">Return to homepage</Link>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
