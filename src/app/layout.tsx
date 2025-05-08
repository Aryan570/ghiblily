import type { Metadata } from "next";
import { Geist, Geist_Mono, Pompiere } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pompiere = Pompiere({
  variable: "--font-pompiere",
  subsets: ["latin"],
  weight: "400"
})

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
        className={`${geistSans.variable} ${geistMono.variable} ${pompiere.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
