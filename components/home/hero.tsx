"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { user } from "@/data/general";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="p-4 container my-10 md:my-16 lg:my-20">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="relative w-fit">
            <h2 className="text-6xl md:text-8xl">{user.name}</h2>
            <a
              href={user.openForWork ? user.socials.calcom : "#"}
              target={user.openForWork ? "_blank" : undefined}
            >
              <p
                className={cn(
                  "absolute -right-16 top-[50%] bottom-[50%] rotate-90 hover:underline text-xs",
                  !user.openForWork && "line-through"
                )}
              >
                open for work
              </p>
            </a>
          </div>
          <p className="text-xl md:text-4xl font-bodoni font-extralight tracking-tighter">
            {user.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed">
            {user.hero.userExcerpt}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-lg hover:underline"
          >
            <span>view projects</span>
            <ArrowUp
              size={20}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </Link>
          <Link
            href="/#blogs"
            className="group flex items-center gap-2 text-lg hover:underline"
          >
            <span>writes</span>
            <ArrowUp
              size={20}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </Link>
          <a
            href={user.socials.calcom}
            target="_blank"
            className="group flex items-center gap-2 text-lg hover:underline"
          >
            <span>book a call</span>
            <ArrowUp
              size={20}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
