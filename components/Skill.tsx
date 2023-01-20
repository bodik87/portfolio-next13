import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = { children?: ReactNode; points: number };

export default function Skill({ children, points }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center rounded-full bg-gray-600 border border-gray-400 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        {children}
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 select-none">
            {points}%
          </p>
        </div>
      </div>
    </div>
  );
}
