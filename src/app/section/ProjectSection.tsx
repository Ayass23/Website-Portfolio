'use client'


import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

import ProjectTag from "@/app/components/projectTag";


interface Project {
  name: string;
  image: string;
  description: string;
  link: string;
  tag: string[];
}

const projectsData: Project[] = [
  {
    name: "GoTix",
    description: "This website is designed for the process of ticket purchasing and selling, developed as part of a case study for my Web Programming course",
    image: "/images/projects/Gotix.JPG",
    link: "https://github.com/GabrielAllba/frontend-atmakitchen.git",
    tag: ["Website"]
  },
  {
    name: "WeCare",
    description: " The mobile application, WeCare, is designed to streamline the process of scheduling patient appointments with doctors according to individual needs.",
    image: "/images/projects/weCare.JPG",
    link: "https://github.com/GabrielAllba/frontend-atmakitchen.git",
    tag: ["Mobile"]
  },
  {
    name: "Atma Kitchen",
    description: "Mobile application and website called Atma Kitchen. Beyond implementing a predefined list of functions, we had to analyze interview results between developers and the client to identify and document all necessary functionalities.",
    image: "/images/projects/atmaKitchen.JPG",
    link: "https://github.com/GabrielAllba/frontend-atmakitchen.git",
    tag: ["Website", "Mobile"]
  },


];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    tag === "All" || project.tag.includes(tag)
  );

  const ProjectSection = () => {

    const [tag, setTag] = useState("All");

    const handleTageChange = (newTag: string) => {
      setTag(newTag);
    }
  }

  return (
    <section className="grid">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">My Projects</h2>
      {/* TAB */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-7">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}></ProjectTag>
        <ProjectTag onClick={handleTagChange} name="Website" isSelected={tag === "Website"}></ProjectTag>
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}></ProjectTag>
      </div>
      {/* TAMPILAN */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${project.image})`, backgroundSize: "cover" }}>
              <div className="overlay items-center justify-center absolute top-0 left- w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 mx-auto">

                <Link href="https://github.com/GabrielAllba/frontend-atmakitchen.git" className="ml-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7DE] hover:border-white group/link"><CodeBracketIcon className="h-10 w-10 text-[#ADB7DE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></CodeBracketIcon></Link>
              </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
              <h5 className="text-xl font-semibold mb-2">
                {project.name}
              </h5>
              <p className="text-[#ADB7BE]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection;