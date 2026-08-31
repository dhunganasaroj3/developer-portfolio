import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const inter = Inter({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const jetbrains = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Saroj Dhungana — Senior Software Engineer",
  description:
    "Senior Software Engineer · Full Stack · Web3 — 8+ years building React, Node, and Web3 products.",
  openGraph: {
    title: "Saroj Dhungana — Senior Software Engineer",
    description:
      "Full stack + Web3. React, Node, GCP/AWS, wallets for Sui & Solana.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
