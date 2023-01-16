import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">About</h3>

      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px] "
        initial={{
          x: -200,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        src="/photo.jpg"
        alt="Hero photo"
      />

      <div className="space-y-10 px-0 md:px-6">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 underline-offset-4">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          aliquam quis quo nesciunt temporibus saepe quos odio neque omnis fuga.
          Culpa nisi molestiae, ipsa non quisquam sunt animi. Quis error
          corrupti sequi perferendis. Temporibus quidem rerum earum debitis.
          Repudiandae odit, sapiente obcaecati, alias dolorum assumenda eaque
          ducimus velit sequi nostrum vel. Deleniti cum, ullam cupiditate
          perspiciatis eligendi vel magnam similique in minima. Veritatis, minus
          eius rem enim laudantium reiciendis iusto.
        </p>
      </div>
    </motion.div>
  );
}
