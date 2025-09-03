import { Metadata } from "next";
import { siteMetadata, siteConfig } from "@/config/siteConfig";
import Hero from "@/components/home/hero";
import HomeProjects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Experience from "@/components/home/experience";
import Blog from "@/components/home/blog";

export const metadata: Metadata = {
  ...siteMetadata,
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    ...siteMetadata.openGraph,
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    ...siteMetadata.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="relative z-10 bg-background">
        <HomeProjects />
        <Skills />
        <Experience />
        <Blog />
      </div>
    </main>
  );
}
