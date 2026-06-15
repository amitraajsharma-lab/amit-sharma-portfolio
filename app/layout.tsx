import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://amit-sharma-portfolio.vercel.app"
  ),

  title: {
    default:
      "Amit Sharma | Enterprise AI Transformation Executive",
    template: "%s | Amit Sharma",
  },

  description:
    "Enterprise AI Transformation Executive with 25+ years of leadership experience across GCCs, Shared Services, Customer Operations, Utilities, Banking and Digital Transformation. Creator of the VISTA™ Enterprise AI Value Creation Framework.",

  keywords: [
    "Amit Sharma",
    "Enterprise AI",
    "AI Transformation",
    "Digital Transformation",
    "Shared Services",
    "Global Capability Center",
    "GCC Leadership",
    "Customer Operations",
    "Operating Model Transformation",
    "Business Transformation",
    "AI Strategy",
    "VISTA Framework",
    "Enterprise AI Executive",
    "Transformation Executive",
    "Utilities Transformation",
    "Banking Transformation",
  ],

  authors: [
    {
      name: "Amit Sharma",
    },
  ],

  creator: "Amit Sharma",

  openGraph: {
    title:
      "Amit Sharma | Enterprise AI Transformation Executive",

    description:
      "Driving Enterprise AI, GCC Evolution, Shared Services Transformation and Enterprise Value Creation.",

    type: "website",

    locale: "en_US",

    siteName: "Amit Sharma Executive Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Amit Sharma | Enterprise AI Transformation Executive",

    description:
      "Enterprise AI, GCC Strategy, Shared Services Transformation and Operating Model Excellence.",
  },
icons: {
  icon: "/logo.png",
},
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}