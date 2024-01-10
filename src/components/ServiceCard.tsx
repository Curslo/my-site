import React, { FunctionComponent } from "react";
import { IServices } from "../../types/page";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
  service: { about, Icon, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex flex-col  p-2 space-x-4 space-y-4">
      <div className="flex flex-row">
        <Icon className="w-12 basis-1/4 h-12 text-green-600" />
        <h3 className="font-bold basis-3/4 ">{title}</h3>
      </div>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default ServiceCard;
