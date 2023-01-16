import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-full md:w-[600px] xl:w-[600px] snap-center bg-[#292929] py-10 px-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-5 md:px-10">
        <h4 className="text-4xl font-light">CEO of SHULIKA</h4>
        <p className="font-bold text-2xl mt-2">SHULIKA</p>
        <div className="flex gap-2 my-2">
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
        <ul className="list-disc space-y-4 ml-5 text-base">
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
