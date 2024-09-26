'use client';
import React from "react";

import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/section/AboutSection";
import FooterSection from "@/app/section/FooterSection";
import HeroSection from "@/app/section/HeroSection";
import ProjectSection from "@/app/section/ProjectSection";



export default function HomePage() {
  return (
    <main className="bg-[#121212]  flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section >
          <HeroSection />
        </section>
      </div>
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section className="h-screen ">
          <AboutSection />
        </section>
      </div>
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section className="h-screen">
          <ProjectSection />
        </section>
      </div>
      <div className="container mx-auto my-auto min-h-screen flex justify-center items-center">
        <section className="h-screen w-screen flex my-auto justify-center items-center" id="footer">
          <FooterSection />
        </section>
      </div>
    </main>
  )
}