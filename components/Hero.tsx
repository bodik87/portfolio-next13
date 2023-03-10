import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgoundCircles from "./BackgoundCircles";
import Link from "next/link";
import { TEXT_UA } from "@/CONSTANTS";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Привіт, Моє Ім'я Богдан Шуліка",
      "Люблю Серiали.tsx",
      "<АлеКодити ЛюблюБільше />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgoundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/photo.jpg"
        alt="Hero photo"
        width={128}
        height={128}
        priority
      />
      <div className="z-20 px-4">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Frontend developer
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#5ED3F3" />
        </h1>
        <div className="pt-5">
          {/* <Link href="#about">
            <button className="heroButton">{TEXT_UA.about}</button>
          </Link> */}
          {/* <Link href="#experience">
            <button className="heroButton">{TEXT_UA.experience}</button>
          </Link> */}
          {/* <Link href="#skills">
            <button className="heroButton">{TEXT_UA.skills}</button>
          </Link> */}
          <Link href="#projects">
            <button className="heroButton">{TEXT_UA.projects}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
