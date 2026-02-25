import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Mixpanel from "./components/Mixpanel";
import SEO from "./components/SEO";
import metadata_data from "./data/metadata.json";
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
  metadataBase: new URL(metadata_data.url),
  title: metadata_data.title,
  description: metadata_data.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: metadata_data.title,
    description: metadata_data.description,
    images: [metadata_data.banner],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadata_data.title,
    description: metadata_data.description,
    images: [metadata_data.banner],
  },
  other: {
    "theme-color": metadata_data.theme_color
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={metadata_data.language}>
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
