import React, { FunctionComponent } from "react";
import { IPersonalDetails } from "../../types/page";

const PersonalDetails: FunctionComponent<{
  personalDetails: IPersonalDetails;
}> = ({ personalDetails: { content, label } }) => {
  return (
    <div className="flex flex-row  p-2 justify-between">
      <h2>{label}</h2>
      <p className="font-bold" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PersonalDetails;
