"use client";

import React, { FunctionComponent, useState } from "react";
import { IProjects } from "../../types/page";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const ProjectsCard: FunctionComponent<{ project: IProjects, showDetails: number | null, setShowDetails: (id: null | number) => void }> = ({
  project: {
    category,
    deployedUrl,
    description,
    githubUrl,
    imagePath,
    name,
    technology,
    id
  },
  showDetails,
  setShowDetails
}) => {
  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        width={300}
        height={150}
        layout="responsive"
      />
      {/* <img
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>
      {showDetails === id && (
        <div className="p-2 rounded-lg md:p-10 grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
          <Image
            src={imagePath}
            alt={name}
            width={300}
            height={150}
            layout="responsive"
            className="border-4 border-gray-100"
          />
          {/* <img src={imagePath} alt={name} /> */}
          <div className="flex justify-center my-4 space-x-3">
            <a
              href={githubUrl}
              className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-gray-900"
            >
              <AiFillGithub /> <span>Github</span>
            </a>
            <a
              href={deployedUrl}
              className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-gray-900"
            >
              <AiFillProject /> <span>Project</span>
            </a>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {technology.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-400 dark:bg-black rounded-md"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowDetails(null)}
              className="absolute p-1 bg-gray-400 rounded-full top-3 right-3 focus:outline-none dark:bg-black"
            >
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
