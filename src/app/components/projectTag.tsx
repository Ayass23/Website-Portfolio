'use client'

import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "text-white border-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button onClick={() => onClick(name)}>
      <p className={`rounded-full border-2 border-purple-500 px-6 py-2 text-2xl cursor-pointer ${buttonStyles}`}>
        {name}
      </p>
    </button >
  );
};

export default ProjectTag;
