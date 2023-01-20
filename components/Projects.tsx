import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data";
import { TEXT_UA } from "@/CONSTANTS";

type Props = {};

export default function Projects({}: Props) {
  return (
    <>
      <h3 className="sectionTitle">{TEXT_UA.projects}</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto z-0"
      >
        <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 px-5 z-10">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-start gap-5"
            >
              <motion.img
                className="w-full md:w-[800px] rounded-xl"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={project.image}
                alt={project.title}
              />
              <div className="px-0 md:px-10 max-w-6xl flex flex-col items-center gap-4">
                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50 underline-offset-4 text-2xl">
                    Проект {i + 1} / {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <Link href={project.url}>Деплой проекту</Link>
                <p className="text-base text-center md:text-left mt-2 mb-10">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
      </motion.div>
    </>
  );
}
