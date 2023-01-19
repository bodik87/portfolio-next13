import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgoundCircles from "./BackgoundCircles";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Привіт, Моє Ім'я Богдан Шуліка",
      "Люблю_сачну_каву.tsx",
      "<АлеКодитиЛюблюБільше />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgoundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/photo.jpg"
        alt="Hero photo"
        width={128}
        height={128}
        priority
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Frontend developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Про мене</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Досвiд</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Навички</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Проекти</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
