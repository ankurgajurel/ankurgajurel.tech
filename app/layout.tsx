import type { Metadata } from "next";
import { Bodoni_Moda, Hubot_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Terminal from "@/components/terminal";
import Footer from "@/components/footer";
import ChatBubble from "@/components/home/chat-bubble";
import { siteMetadata, siteConfig } from "@/config/siteConfig";
import { Analytics } from "@vercel/analytics/react";
import { user } from "@/data/general";
import { experiences } from "@/data/experience";
import { Providers } from "@/providers";
import "./globals.css";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: user.name,
    jobTitle: experiences[experiences.length - 1]?.role,
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
      siteConfig.links.github,
    ],
    worksFor: {
      "@type": "Organization",
      name: experiences[experiences.length - 1]?.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: user.location,
      addressCountry: user.location.split(",")[1].trim(),
      postalCode: user.postalCode,
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${hubotSans.variable} ${bodoni.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Terminal />
          <ChatBubble />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
