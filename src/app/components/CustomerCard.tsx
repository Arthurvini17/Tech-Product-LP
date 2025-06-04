"use client";
import React from "react";
import { CustomerCardProps } from "./CustomerCardProps";

export const CustomerCard: React.FC<CustomerCardProps> = ({
  comments,
  perfil,
}) => {
  return (
    <div className="bg-white shadow-xl flex  flex-col  items-center gap-2  rounded-xl p-5 ">
      <h1 className="text-start text-md  font-medium">{comments}</h1>
      <h2 className=" font-bold text-start   items-start">{perfil}</h2>
    </div>
  );
};
