"use client";

import React from "react";

export const SupportForm = () => {
  return (
    <form
      action=""
      method="post"
      className="p-10 items-center justify-center flex flex-col w-screen font-medium"
    >
      <h1 className="text-center text-3xl font-bold">Get In Touch</h1>
      <div className="bg-slate-50 shadow-2xl p-10">
        <div>
          <label htmlFor="">Name</label>
          <input
            className="w-full border px-2 py-2 rounded-xl placeholder:font-light"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            className="w-full border px-2 py-2 rounded-xl placeholder:font-light"
            type="text"
            placeholder="your@example.com"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="w-full border rounded-xl px-2 py-2 placeholder:font-light"
            name="Message"
            id="message"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-2 rounded-2xl font-semibold text-2xl">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};
