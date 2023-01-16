import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="xl:w-[200px] xl:h-[200px] relative rounded-full mx-auto object-cover object-center"
          src="/photo.jpg"
          alt="Icons"
          width={128}
          height={128}
          priority
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of SHULIKA</h4>
        <p className="font-bold text-2xl mt-1">SHULIKA</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            src="/photo.jpg"
            alt="Icons"
            width={40}
            height={40}
            priority
          />
          <Image
            className="rounded-full"
            src="/photo.jpg"
            alt="Icons"
            width={40}
            height={40}
            priority
          />
          <Image
            className="rounded-full"
            src="/photo.jpg"
            alt="Icons"
            width={40}
            height={40}
            priority
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iste, incidunt!
          </li>
          <li>
            Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iste, incidunt!
          </li>
          <li>
            Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iste, incidunt!
          </li>
          <li>
            Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iste, incidunt!
          </li>
          <li>
            Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iste, incidunt!
          </li>
        </ul>
      </div>
    </article>
  );
}
