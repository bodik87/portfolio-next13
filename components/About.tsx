import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEXT_UA, PAGE_TITLES_ENG } from "../CONSTANTS";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <h3 className="sectionTitle">{TEXT_UA.about}</h3>
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

        <div className="space-y-10 px-2 md:px-6">
          <h4 className="text-3xl md:text-4xl font-semibold">
            Тут мiй{" "}
            <span className="underline decoration-[#F7AB0A]/50 underline-offset-4">
              невеличкий
            </span>{" "}
            бекграунд
          </h4>
          <p className="text-base">
            {`Юридична освiта, невеличке мiсто, надзвичайно спокiйне безпроблемне життя, бiзнес, йо_ана русня, окупацiя, виїзд, Київ, фронтенд, зняття рожевих окулярiв про "швидке IT", непросто з роботою, фронтенд стає хоббi, розумiння фрази на початку навчання, що фронтенд швидко змiнюється:) I тепер щодня код, курси, вiдоси, документацiї, статтi. Мрiя стати спецiалiстом`}
          </p>
        </div>
      </motion.div>
    </>
  );
}
