import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - BMI Buddy",
  description:
    "Learn about how we collect, use, and protect your data at BMI Buddy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main
        className="container mx-auto max-w-4xl px-4 py-8 sm:py-10 md:py-12"
        id="main-content">
        <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <h1
            id="privacy-policy-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="mb-6 sm:mb-8">
            <p className="text-gray-600 mb-2 text-xs sm:text-sm">
              Last Updated: April 20, 2025
            </p>
          </div>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-introduction">
            <h2
              id="section-introduction"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Introduction
            </h2>
            <p>
              BMI Buddy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our BMI calculator service.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing and using
              BMI Buddy, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Privacy Policy.
            </p>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-information-collected">
            <h2
              id="section-information-collected"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Information We Collect
            </h2>
            <p>
              When you use BMI Buddy, we collect the following types of
              information:
            </p>
            <h3
              id="personal-information"
              className="text-lg sm:text-xl font-medium mt-4 sm:mt-6 mb-2 sm:mb-3">
              Personal Information You Provide
            </h3>
            <p>
              Our basic BMI calculator does not require account creation or
              personal information beyond the physical metrics needed to
              calculate your BMI (height and weight). This information is
              processed locally in your browser and is not stored on our
              servers.
            </p>
            <h3
              id="technical-information"
              className="text-lg sm:text-xl font-medium mt-4 sm:mt-6 mb-2 sm:mb-3">
              Technical Information
            </h3>
            <p>
              We may collect certain technical information automatically when
              you visit our website, including:
            </p>
            <ul
              className="list-disc pl-5 sm:pl-6 mb-3 sm:mb-4"
              aria-labelledby="technical-information">
              <li>Device information (browser type, operating system)</li>
              <li>IP address</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referral sources</li>
            </ul>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-information-usage">
            <h2
              id="section-information-usage"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 sm:pl-6 mb-3 sm:mb-4">
              <li>Provide, maintain, and improve our BMI calculator service</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Enhance the safety and security of our service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-cookies">
            <h2
              id="section-cookies"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Cookies and Similar Technologies
            </h2>
            <p>
              We may use cookies and similar tracking technologies to collect
              information about your browsing activities. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-security">
            <h2
              id="section-security"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect the security
              of your information and prevent unauthorized access, disclosure,
              or modification. However, please be aware that no security
              measures are perfect or impenetrable.
            </p>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-childrens-privacy">
            <h2
              id="section-childrens-privacy"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              Our service is not directed to children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and you are aware that your child
              has provided us with personal information, please contact us.
            </p>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-policy-changes">
            <h2
              id="section-policy-changes"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section
            className="mb-6 sm:mb-8 md:mb-10"
            aria-labelledby="section-contact">
            <h2
              id="section-contact"
              className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at:
              <br />
              <Link
                href="mailto:hello@ideaflow.studio"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Email us at hello@ideaflow.studio">
                hello@ideaflow.studio
              </Link>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
