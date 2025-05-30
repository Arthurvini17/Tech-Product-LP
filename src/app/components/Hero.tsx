"use client"
import React from "react";
import { HeroProps } from "./HeroProps";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero: React.FC<HeroProps> = ({
  Title,
  Description,
  ButtonStarted,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl  font-bold  text-white ">{Title}</h1>
        <h2 className="text-md  font-medium">{Description}</h2>
        <button className=" rounded-3xl w-1/2 self-center text-center font-bold p-2 text-indigo-600  m-5 bg-white ">
          {ButtonStarted}
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", duration: 1, bounce: 0.4 },
          }}
        >
          <div className="m-5 rotate-3  ">
            <Image
            className="rounded-3xl"
              src="/images/image-mobile.svg"
              alt="image-mobile"
              width={250}
              height={30}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
