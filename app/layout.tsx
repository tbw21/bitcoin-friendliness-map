import type { Metadata, Viewport } from "next";
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
  // Absolute addresses for the share image and links: SITE_URL is set where the app is hosted
  // (on Webflow Cloud https://www.thebitcoinway.com); without it Next.js falls back to the
  // deployment's own address (on Vercel) or localhost
  ...(process.env.SITE_URL && { metadataBase: new URL(process.env.SITE_URL) }),
  title: "Bitcoin Friendliness Map",
  description: "Visualize bitcoin friendliness across locations",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        {children}
      </body>
    </html>
  );
}
