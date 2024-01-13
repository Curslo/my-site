import React from "react";
import {
  apis,
  backend,
  database,
  deployment,
  frontend,
  languages,
  packageManager,
  testing,
  versionControl,
} from "../../data/Resume";
import Bar from "./Bar";

const Skills = () => {
  return (
    <div>
      <h1 className="my-3 text-xl font-bold tracking-wide">Skills Acquired</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Languages</h1>
          <div>
            {languages.map((lang) => (
              <Bar data={lang} key={lang.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Frontend</h1>
          <div>
            {frontend.map((fron) => (
              <Bar data={fron} key={fron.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Backend</h1>
          <div>
            {backend.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Version Control</h1>
          <div>
            {versionControl.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">DataBase</h1>
          <div>
            {database.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Package Manager</h1>
          <div>
            {packageManager.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Testing</h1>
          <div>
            {testing.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">Deployment</h1>
          <div>
            {deployment.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-md dark:bg-gray-900">
          <h1 className="font-bold">APIs</h1>
          <div>
            {apis.map((back) => (
              <Bar data={back} key={back.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
