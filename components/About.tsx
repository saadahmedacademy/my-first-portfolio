"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

function About() {
  return (
    <section className="text-white bg-gray-900 body-font">
      <Spotlight
        className="-top-40 left-0 md:left-[28rem] md:top-[6rem]"
        fill="white"
      />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center relative z-[100000] border-8 rounded-full border-yellow-500"
            alt="This is my pic"
            src="/mynewpic.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Full Stack Web And
            <br className="hidden lg:inline-block" />
            Generative AI Engeerier
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a dedicated MERN stack developer and generative AI engineer with
            a passion for crafting dynamic web applications and innovative AI
            solutions. Leveraging my expertise in MongoDB, Express, React,
            Node.js, and generative AI, I bring creative ideas to life, blending
            technical skills with a user-focused approach. From building
            seamless user interfaces to developing AI-driven applications, my
            goal is to create impactful experiences that solve complex problems
            and enhance interactions on the web.
          </p>
          <div className="flex justify-center">
            <button className="px-12 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
