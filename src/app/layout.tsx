import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "BMI Buddy - Your Health Companion",
  description:
    "Calculate and understand your BMI with our simple and interactive tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable}`}
      suppressHydrationWarning={true}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
