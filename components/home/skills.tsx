"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function HomeSkills() {
  return (
    <section className="container p-4 flex flex-col gap-10 my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-6xl">skills</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-[0.5px] border-foreground p-4"
          >
            <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
            <p className="text-sm text-foreground">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
