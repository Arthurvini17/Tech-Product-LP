"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiArrowDropRightFill } from "react-icons/ri";
import { KeyCardProps } from "./KeyCardProps";

export const KeyCard: React.FC<KeyCardProps> = ({
  title,
  description,
  logo,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.1 }}
    >
      <div className="bg-white  shadow-xl flex flex-col items-center p-4 w-64 rounded-xl">
        <div className="mb-2">{logo}</div>
        <h1 className="font-bold text-xl text-center">{title}</h1>
        <h2 className="font-medium text-md text-center">{description}</h2>
        <button className="font-bold text-xl bg-indigo-500 text-white rounded-2xl p-2 mt-2 flex items-center gap-1">
          Learn More <RiArrowDropRightFill />
        </button>
      </div>
    </motion.div>
  );
};
