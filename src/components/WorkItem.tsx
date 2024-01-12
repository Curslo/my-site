import React, { FunctionComponent } from "react";
import { IExperience } from "../../types/page";

const WorkItem: FunctionComponent<{ work: IExperience }> = ({
  work: { companyName, endDate, jobTitle, responsibilities, startDate },
}) => {
  return (
    <div className="flex flex-col p-2 justify-between">
      <div className="flex flex-row  p-2 justify-between">
        <h2>Company Name</h2>
        <p className="font-bold">{companyName}</p>
      </div>
      <div className="flex flex-row  p-2 justify-between">
        <h2>Job Title</h2>
        <p className="font-bold">{jobTitle}</p>
      </div>
      <div className="flex flex-row  p-2 justify-between">
        <h2>Start Date</h2>
        <p className="font-bold">{startDate}</p>
      </div>
      <div className="flex flex-row  p-2 justify-between">
        <h2> End Date</h2>
        <p className="font-bold">{endDate}</p>
      </div>
      <div>
        <h2 className="my-3 p-2 rounded-md font-bold tracking-wide bg-gray-400">Job Responsibilities</h2>
        <p dangerouslySetInnerHTML={{ __html: responsibilities }} />
      </div>
    </div>
  );
};

export default WorkItem;
