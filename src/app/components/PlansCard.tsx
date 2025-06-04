"use client";
import React from "react";
import { PlansCardProps } from "./PlansCardProps";
import { FcCheckmark } from "react-icons/fc";

export const PlansCard: React.FC<PlansCardProps> = ({
  plan_type,
  price,
  storage_quantity,
  users_quantity,
  support_type,
  link,
}) => {
  const isPro = plan_type === "Pro";

  const cardWrapperClasses = `rounded-lg p-6 shadow-md transition-all ${
    isPro ? "border-2 border-purple-700 scale-105" : "text-black"
  }`;

  return (
    <div className="p-4">
      <div className={cardWrapperClasses}>
        <div className="relative bg-slate-50 rounded-2xl shadow-xl p-6">
          {isPro && (
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              Popular
            </div>
          )}

          <div className="flex flex-col gap-5 p-4 rounded-xl">
            <h1 className="font-bold text-4xl text-center">{plan_type}</h1>

            <h2 className="font-extralight text-xl text-center">
              <span className="text-4xl font-bold text-purple-700">${price}</span>
              /month
            </h2>

            <p className="text-xl flex items-center justify-center gap-2">
              <FcCheckmark /> {storage_quantity} GB Storage
            </p>

            <p className="text-xl flex items-center justify-center gap-2">
              <FcCheckmark /> {`${users_quantity} ${users_quantity === 1 ? "User" : "Users"}`}
            </p>

            <p className="text-xl flex items-center justify-center gap-2">
              <FcCheckmark /> {support_type}
            </p>

            <a
              href={link}
              aria-label={`Choose ${plan_type} plan`}
              className="w-full block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-center transition-colors duration-300"
            >
              Choose {plan_type}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
