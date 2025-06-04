"use client";

import { FrequentlyQuestionProps } from "./FrequentlyQuestionsProps";
import { FaChevronUp, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";

export const FrequentlyQuestions: React.FC<FrequentlyQuestionProps> = ({
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="   ">
      {/* estilização do card todo */}
      <div className="bg-slate-50  p-2 w-full rounded-md shadow text-center ">
        {/* verificando se o card nao está aberto. Se nao estiver aberto ele so ira mostrar o title */}
        <div
          className="text-center inline-flex items-center   gap-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="text-xl font-semibold">{title}</h1>
          {isOpen ? (
            <FaChevronUp className="" />
          ) : (
            <FaChevronRight className="" />
          )}
        </div>
        {/* se estiver aberto ele irá mostrar a descrição */}

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <h2 className="font-light text-xl text-start mt-1  p-1">{description}</h2>
        </div>
      </div>
    </div>
  );
};
