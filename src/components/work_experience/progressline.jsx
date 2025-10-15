import React from "react";
import Fonts from "../../utils/fonts";

const experiences = [
  {
    id: 1,
    service: "Graphics Design",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "(2016-present)",
  },
  {
    id: 2,
    service: "Photography",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "(2016-present)",
  },
  {
    id: 3,
    service: "Web Development",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    duration: "(2016-present)",
  },
];
const Progressline = () => {
  return (
    <div className="flex flex-1 flex-col w-full items-center gap-10 justify-center">
      <div className="flex h-1 w-10/12 bg-[#4B4B4B] rounded-full items-center justify-between">
        <div className="h-3 w-3 bg-[#FF411F] rounded-full" />
        <div className="h-3 w-3 bg-[#1264FF] rounded-full" />
        <div className="h-3 w-3 bg-[#FF411F] rounded-full" />
      </div>
      <div className="flex flex-row gap-5">
        {experiences.map((index) => (
          <div className="flex items-center justify-center flex-col" key={index.id}>
            <div className="flex text-center flex-col ">
              <h1 style={{...Fonts.poppins.semiBold, fontSize: 36}} className="">{index.service}</h1>
              <h3 style={{...Fonts.poppins.regular, fontSize: 16}} className="flex text-center">{index.detail}</h3>
            </div>
            <h4 style={{...Fonts.poppins.regular, fontSize: 16}} className="mt-5">{index.duration}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressline;
