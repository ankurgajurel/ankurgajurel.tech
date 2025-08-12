import { user } from "@/data/general";
import { Metadata } from "next";

export const siteConfig = {
  name: user.name,
  title: user.name + " - " + user.role,
  description:
    "Software engineer specializing in full-stack web development, AWS cloud infrastructure, and social media analytics. Building scalable applications with React, Next.js, and TypeScript.",
  url: "https://ankurgajurel.com.np",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/ankurgajurel",
    github: "https://github.com/ankurgajurel",
    linkedin: "https://linkedin.com/in/ankurgajurel",
  },
  creator: "@ankurgajurel",
  authors: [
    {
      name: "Ankur Gajurel",
      url: "https://ankurgajurel.com.np",
    },
  ],
  keywords: [
    "Ankur Gajurel",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "AWS",
    "Cloud Infrastructure",
    "Social Media Analytics",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Web Applications",
    "Scalable Applications",
  ],
};

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} - ${siteConfig.description}`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    site: "@ankurgajurel",
    creator: "@ankurgajurel",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
