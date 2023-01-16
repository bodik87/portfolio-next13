import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <h3 className="sectionTitle">About</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative text-center md:flex-row md:text-left max-w-7xl justify-evenly mx-auto items-center px-10"
      >
        <motion.img
          className="mb-10 md:mb-0 flex-shrink-0 w-36 h-36 object-cover rounded-full md:rounded-lg md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px] "
          initial={{ x: -200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="/about.jpg"
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
            aliquam quis quo nesciunt temporibus saepe quos odio neque omnis
            fuga. Culpa nisi molestiae, ipsa non quisquam sunt animi. Quis error
            corrupti sequi perferendis. Temporibus quidem rerum earum debitis.
            Repudiandae odit, sapiente obcaecati, alias dolorum assumenda eaque
            ducimus velit sequi nostrum vel. Deleniti cum, ullam cupiditate
            perspiciatis eligendi vel magnam similique in minima. Veritatis,
            minus eius rem enim laudantium reiciendis iusto.
          </p>
        </div>
      </motion.div>
    </>
  );
}
