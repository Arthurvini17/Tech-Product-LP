"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { KeyCard } from "./components/KeyCard";
import { CustomerCard } from "./components/CustomerCard";
import { PlansCard } from "./components/PlansCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FrequentlyQuestions } from "./components/FrequentlyQuestions";

export default function Home() {
  return (
    <div>
      <Header title="TechIndustry" />
      <Hero
        Title="Unlock Your Potential with Our Innovative Solution"
        Description="Discover how our cutting-edge technology can streamline your workflow and boost productivity."
        ButtonStarted="Get Started today"
      />
      <div className="flex flex-wrap justify-center gap-4 bg-slate-100 p-10">
        <h1 className=" text-center text-4xl m-4 font-bold">Key Features</h1>
        <KeyCard
          title="Intuitive Dashboard"
          description="Easily manage all your data and projects from a single, user-friendly interface designed for efficiency."
          logo={
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          }
        />
        <KeyCard
          title="Blazing Fast Performance"
          description="
Experience unparalleled speed and responsiveness, ensuring your tasks are completed in no time."
          logo={
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          }
        />

        <KeyCard
          title="Robust Security"
          description="Your data is safe with us. We employ industry-leading security measures to protect your information."
          logo={
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c-3.668 0-7.01.996-9.162 2.76A11.955 11.955 0 002.944 12c0 3.668.996 7.01 2.76 9.162A11.955 11.955 0 0112 21.056c3.668 0 7.01-.996 9.162-2.76A11.955 11.955 0 0021.056 12c0-3.668-.996-7.01-2.76-9.162z"
              ></path>
            </svg>
          }
        />
      </div>
      <div className="flex flex-col flex-wrap p-10 gap-2  ">
        <h1 className=" text-xl font-bold mb-5 text-center">
          What Our Customers Say
        </h1>

        <CustomerCard
          comments="YourProduct has revolutionized our team's productivity. The intuitive dashboard and seamless integrations have made our work so much easier!"
          perfil="Jhon Doe"
        />
        <CustomerCard
          comments="YourProduct has revolutionized our team's productivity. The intuitive dashboard and seamless integrations have made our work so much easier!"
          perfil="Jhon Doe"
        />
      </div>

      <div className=" text-center ">
        <h1 className="text-center  flex justify-center p-5 text-3xl font-bold">
          Simple & Transparent Pricing
        </h1>

        <div className="relative flex items-center flex-col justify-center text-center">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="w-full max-w-md"
          >
            <SwiperSlide>
              <PlansCard
                plan_type="Basic"
                price={19}
                storage_quantity={10}
                users_quantity={1}
                support_type="Basic Support"
                link="/"
              />
            </SwiperSlide>

            <SwiperSlide>
              <PlansCard
                plan_type="Pro"
                price={49}
                storage_quantity={100}
                users_quantity={5}
                support_type="Priority Support"
                link="/"
              />
            </SwiperSlide>

            <SwiperSlide>
              <PlansCard
                plan_type="Enterprise"
                price={99}
                storage_quantity={"Unlimited"}
                users_quantity={1}
                support_type="Basic Support"
                link="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-4 text-center">

        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <FrequentlyQuestions
          title="How does YourProduct work?"
          description="YourProduct is a cloud-based platform that helps you manage your projects and data efficiently. Simply sign up, create an account, and start exploring our intuitive dashboard."
        />
        <FrequentlyQuestions
          title="Is my data secure with YourProduct?"
          description="Absolutely. We prioritize your data security with advanced encryption, regular backups, and strict access controls to ensure your information is always protected."
        />

        <FrequentlyQuestions
          title=" Can I upgrade or downgrade my plan?"
          description="Yes, you can easily upgrade or downgrade your plan at any time directly from your account settings. Changes will be prorated accordingly."
        />
      </div>
    </div>
  );
}
