"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import HomeProjectCard from "./project-card";
import { motion } from "framer-motion";

export default function HomeProjects() {
  return (
    <section className="container p-4 flex flex-col gap-10 my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href={"/#projects"}>
          <h2 className="text-6xl flex gap-2 items-end group">
            <span className="group-hover:underline">projects</span>
            <ArrowUp
              size={48}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </h2>
        </Link>
      </motion.div>

      <div className="overflow-x-auto">
        <div className="flex flex-col gap-0 min-w-[600px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b-[0.5px] border-foreground grid grid-cols-5 p-1 text-xs"
          >
            <div>/ DATE</div>
            <div className="col-span-2">/ PROJECT</div>
            <div>/ COLLABS</div>
            <div className="grid grid-cols-2">
              <div>/ TYPE</div>
              <div></div>
            </div>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <HomeProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
