import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <>
      <h3 className="sectionTitle">Projects</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto z-0"
      >
        <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 px-5">
          {projects.map((project, i) => (
            <div
              key={project + i}
              className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-center gap-5"
            >
              <motion.img
                className="w-full md:w-[800px]"
                initial={{ y: -200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src="/wall.jpg"
                alt="project"
              />
              <div className="px-0 md:px-10 max-w-6xl">
                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50 underline-offset-4">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  UPS clone
                </h4>
                <p className="text-base text-center md:text-left my-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium voluptatibus tempora provident modi unde eligendi
                  possimus, consequuntur praesentium adipisci fugit corrupti
                  nisi? Fuga, laborum nisi eveniet dolor labore numquam error,
                  placeat distinctio sunt possimus consectetur aliquid maiores
                  fugiat quis sapiente laudantium deleniti. Accusantium.
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
