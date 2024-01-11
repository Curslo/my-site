import React, { FunctionComponent } from "react";
import { ISkill } from "../../types/page";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, title },
}) => {
  return (
    <div className="my-2 text-white bg-gray-400 rounded-full ">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-500"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {title}
      </div>
    </div>
  );
};

export default Bar;
