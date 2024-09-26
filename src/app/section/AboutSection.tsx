'use client'

import Image from "next/image";
import React, { useState,useTransition } from "react";


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  // const handleTabChange = (id: string) => {
  //   startTransition(() => {
  //     setTab(id); 
  //   });
  // };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-16 xl:px-16">
        <Image src="/images/ayas-aboutme.png" alt="Ayas" width={250} height={250} className="place-self-center lg:w-[400px]"></Image>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-center lg:text-lg ">I am an active student at Atma Jaya Yogyakarta. My enthusiasm for trying new things and embracing challenges defines
            my approach to life. I thrive in new environments, effortlessly adapting to different settings. My ability to collaborate
            effectively within a team is one of my strengths. In addition to my academic pursuits, I have gained valuable experience
            in various fields, including event management, Programing and photography. My diverse skills and adaptability make
            me a well-rounded and versatile individual.</p>
        </div>
        {/* <div className="flex flex-row mt-8">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
          <TabButton selectTab={() => handleTabChange("educations")} active={tab === "educations"}>{" "}Educations{" "}</TabButton>
        </div> */}
      </div>
    </section >

  )
}

export default AboutSection;