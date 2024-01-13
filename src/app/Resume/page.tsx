import React from "react";
import { personalDetails } from "../../../data/Resume";
import PersonalDetails from "@/components/PersonalDetails";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const Resume = () => {
  return (
    <div className="p-4 mt-5 bg-gray-400 dark:bg-black flex-grow">
      <h1 className="my-3 text-xl font-bold tracking-wide">
        Personal Information
      </h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {personalDetails.map((personalDetails) => (
          <div className="bg-gray-200 dark:bg-gray-900 rounded-md" key={personalDetails.id}>
            <PersonalDetails personalDetails={personalDetails} />
          </div>
        ))}
      </div>
      <Summary/>
      <Skills/>
      <Experience/>
    </div>
  );
};

export default Resume;
