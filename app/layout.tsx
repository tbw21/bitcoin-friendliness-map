import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BASE_PATH } from "@/lib/basePath";
import SiteTracking from "./SiteTracking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Where the map lives for search engines and link previews: SITE_URL is set where the app is
// hosted (on Webflow Cloud https://www.thebitcoinway.com), and the mount path (/tools/map) is the
// basePath Next.js builds in (BASE_PATH; Webflow Cloud's build does not hand BASE_URL to the app's
// own code). Without SITE_URL (locally, on Vercel) Next.js falls back to the deployment's own
// address and no canonical link is given.
const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");
const canonicalUrl = siteUrl ? `${siteUrl}${BASE_PATH}` : undefined;

const title = "Bitcoin Friendliness Map | The Bitcoin Way";
const description =
  "Compare 250 countries on tax, banking, legal freedom, residency, spending, community, privacy and stability to find the best place to live with bitcoin.";

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title,
  description,
  // Every view of the map (?country=…, ?compare=…) is the same page to a search engine
  ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
  openGraph: {
    type: "website",
    siteName: "The Bitcoin Way",
    title: "Bitcoin Friendliness Map: how good is each country for living on bitcoin?",
    description,
    locale: "en_US",
    ...(canonicalUrl && { url: canonicalUrl }),
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Friendliness Map: how good is each country for living on bitcoin?",
    description,
  },
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
        {/* The site's analytics and attribution (live site only) */}
        <SiteTracking />
      </body>
    </html>
  );
}
