import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <>
      <h3 className="sectionTitle">Skills</h3>
      <h3 className="text-center uppercase tracking-[3px] text-gray-500 text-sm mb-10 px-4">
        Hover over a skill for currency profieciency
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-center items-center mx-auto xl:space-y-0"
      >
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </>
  );
}
