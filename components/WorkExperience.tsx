import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { TEXT_UA } from "@/CONSTANTS";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <>
      <h3 className="sectionTitle">{TEXT_UA.experience}</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly items-center mx-auto"
      >
        <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 py-10">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </>
  );
}
