import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://izhan.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Izhan Waseem | Full-Stack Developer",
    template: "%s | Izhan Waseem",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, and Node.js. Portfolio showcasing recent projects and core capabilities.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Izhan Waseem | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and Node.js. Portfolio showcasing recent projects and core capabilities.",
    siteName: "Izhan Waseem",
  },
  twitter: {
    card: "summary",
    title: "Izhan Waseem | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and Node.js. Portfolio showcasing recent projects and core capabilities.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
