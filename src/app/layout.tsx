import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavigationViewWidget from "./widgets/navigation-view-widget";
import FooterViewWidget from "./widgets/footer-view-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qrius Alex Portfolio",
  description: "My portfolio site, where I document my projects and interests.",
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
        <div className="grid grid-rows-[5em_1fr_5em] gap-20 items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
          <NavigationViewWidget />
          {children}
          <FooterViewWidget />
        </div>
      </body>
    </html>
  );
}
