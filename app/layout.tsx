import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mainDescription =
  "Johnny Wu helps underrecognized people earn the attention they deserve by polishing their branding, customer experience, and marketing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://uuu.vip"),
  title: "UUu",
  description: mainDescription,
  openGraph: {
    title: "UUu",
    description: mainDescription,
    url: "https://uuu.vip",
    siteName: "UUu",
    images: [{ url: "/og-landing.jpg", width: 1200, height: 630, alt: "UUu" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UUu",
    description: mainDescription,
    images: ["/og-landing.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/druk-wide-trial"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <div className="min-h-dvh text-foreground ">
            <Header />
            <main className="">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
