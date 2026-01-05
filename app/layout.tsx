import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Mixpanel from "./components/Mixpanel";
import SEO from "./components/SEO";
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
  metadataBase: new URL('https://gratti.dev'),
  title: "Federico Gratti Portfolio",
  description: "Portfolio website of Federico Gratti, showcasing projects and skills in web development and design.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Federico Gratti Portfolio",
    description: "Portfolio website of Federico Gratti, showcasing projects and skills in web development and design.",
    images: ['/banner.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Federico Gratti Portfolio",
    description: "Portfolio website of Federico Gratti, showcasing projects and skills in web development and design.",
    images: ['/banner.jpg'],
  },
  other: {
    "theme-color": "#fafafa"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Mixpanel />
        <SEO />
        {children}
      </body>
    </html>
  );
}
