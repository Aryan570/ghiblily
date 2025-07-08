import type { Metadata } from "next";
import { Pompiere, Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const pompiere = Pompiere({
  variable: "--font-pompiere",
  subsets: ["latin"],
  weight: "400"
})

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["pompiere"],
});

const righteous = Playfair_Display({
  variable: "--font-right",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  fallback: ["quicksand"],
});

export const metadata: Metadata = {
  title: "Ghiblily",
  description: "All about Aryan and Ghibli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pompiere.variable} ${quicksand.variable} ${righteous.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
