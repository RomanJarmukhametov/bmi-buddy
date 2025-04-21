"use client";

import { FileQuestion, Home } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { content } from "@/data/content";

export default function NotFound() {
  const { notFound } = content;

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
            {notFound.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8">{notFound.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2"
              aria-label={notFound.buttonAriaLabel}>
              <Home
                size={18}
                aria-hidden="true"
              />
              <Link href="/">{notFound.buttonText}</Link>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
