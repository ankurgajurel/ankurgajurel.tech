"use client";

import Link from "next/link";
import Button from "./ui/button";
import { useConsoleVisibleStore } from "@/store/console";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type ComponentType } from "react";
import { user } from "@/data/general";
import { Github, Twitter } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NavItem = ({ label, link }: { label: string; link: string }) => {
  const isExternal = !link.startsWith("/");
  const Component = isExternal ? "a" : Link;
  const props = isExternal ? { href: link, target: "_blank" } : { href: link };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      {...props}
      className="block relative w-fit overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isHovered ? "hover" : "default"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="block absolute top-0 left-0"
        >
          {isHovered ? "→" : label}
        </motion.span>
      </AnimatePresence>
      <span className="block opacity-0">{label}</span>
    </Component>
  );
};

type NavItemEntry = {
  label: string;
  link: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
};

export default function Navbar() {
  const { isVisible, setIsVisible } = useConsoleVisibleStore();

  const navItems: NavItemEntry[] = [
    { label: "home", link: "/" },
    { label: "gallery", link: "/gallery" },
    { label: "resume", link: "/resume/resume.pdf" },
    { label: "tools", link: user.toolsWebsite },
    { label: "cal.com", link: user.socials.calcom },
    { label: "twitter", link: user.socials.twitter, icon: Twitter },
    { label: "github", link: user.socials.github, icon: Github },
  ];

  return (
    <nav className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-3 space-x-2 p-4">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
        <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
          {navItems
            .filter((item) => !item.icon)
            .map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
        </div>
        <div className="flex items-center gap-2">
          {navItems
            .filter((item) => item.icon)
            .map((item) => {
              const Icon = item.icon!;
              const isExternal = !item.link.startsWith("/");
              if (isExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="group inline-flex items-center justify-center p-1 rounded hover:opacity-80 transition-opacity"
                  >
                    <Icon
                      size={18}
                      className="transition-colors duration-200 group-hover:[&_path]:fill-current"
                      aria-hidden="true"
                    />
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.link}
                  aria-label={item.label}
                  title={item.label}
                  className="group inline-flex items-center justify-center p-1 rounded hover:opacity-80 transition-opacity"
                >
                  <Icon
                    size={18}
                    className="transition-colors duration-200 group-hover:[&_path]:fill-current"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="gap-4 space-x-2 flex items-center">
        <ThemeToggle />
        <Button
          variant="default"
          className="uppercase text-xs cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          console
        </Button>
      </div>
    </nav>
  );
}
