/**
 * Footer component for the BMI Buddy application.
 * Contains branding, navigation links, social media links, contact information,
 * and copyright notice with dynamically calculated current year.
 * 
 * Features:
 * - App branding with icon
 * - Social media links (LinkedIn, website)
 * - About section with app description
 * - Quick links for site navigation
 * - Contact information
 * - Copyright notice with current year
 * 
 * @returns {JSX.Element} Rendered footer with navigation and branding
 */
"use client";

import { Activity } from "lucide-react";
import Link from "next/link";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import WebIcon from "@/components/ui/WebIcon";
import { content } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { common, footer } = content;

  return (
    <footer
      className="bg-gray-900 text-white py-12"
      role="contentinfo">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Activity
              size={24}
              className="text-blue-400"
              aria-hidden="true"
            />
            <span className="text-xl font-bold">{common.appName}</span>
          </div>

          <div
            className="flex gap-4"
            aria-label="Social media links">
            <Link
              href="https://www.linkedin.com/company/ideaflowstudio"
              className="hover:text-blue-400 transition-colors p-2"
              aria-label="LinkedIn"
              rel="noopener noreferrer no-follow"
              target="_blank">
              <LinkedInIcon aria-hidden="true" />
            </Link>
            <Link
              href="https://www.ideaflow.studio"
              className="hover:text-blue-400 transition-colors p-2"
              aria-label="Website"
              rel="noopener noreferrer no-follow"
              target="_blank">
              <WebIcon aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <nav aria-label="Footer navigation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h2
                  className="text-lg font-bold mb-4"
                  id="about-heading">
                  About BMI Buddy
                </h2>
                <p className="text-gray-400">
                  A simple and intuitive tool to calculate and track your Body
                  Mass Index, providing insights to help you maintain a healthy
                  lifestyle.
                </p>
              </div>

              <div>
                <h2
                  className="text-lg font-bold mb-4"
                  id="quick-links-heading">
                  Quick Links
                </h2>
                <ul
                  className="space-y-2"
                  aria-labelledby="quick-links-heading">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#calculator-section"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      BMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2
                  className="text-lg font-bold mb-4"
                  id="contact-heading">
                  Contact Us
                </h2>
                <p className="text-gray-400">
                  Have questions or feedback? <br />
                  <Link
                    href="mailto:hello@ideaflow.studio"
                    className="text-blue-400 hover:text-blue-300"
                    aria-labelledby="contact-heading">
                    hello@ideaflow.studio
                  </Link>
                </p>
              </div>
            </div>
          </nav>

          <div className="text-center text-gray-500 text-sm">
            <p>{footer.copyright.replace("2025", currentYear.toString())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
