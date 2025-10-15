import React from "react";
import graphicsdesign from "../../assets/images/graphics_design.png";
import photography from "../../assets/images/photography.png";
import webdev from "../../assets/images/webdev.png";
import Fonts from "../../utils/fonts";

const services = [
  {
    id: 1,
    service: "Graphics Design",
    picture: graphicsdesign,
  },
  {
    id: 2,
    service: "Photography",
    picture: photography,
  },
  {
    id: 3,
    service: "Web Development",
    picture: webdev,
  },
];

const Servicescards = () => {
  return (
    <div className="flex">
      <div className="flex w-full flex-row justify-between items-center">
        {
            services.map((index) => (
                <div className="bg-[#333333] text-[#b4b4b4] flex flex-col rounded-2xl hover:text-white items-center justify-center p-2 gap-8">
                    <h1 style={{...Fonts.poppins.medium, fontSize: 36}}>{index.service}</h1>
                    <img className="rounded-3xl hover:my-5 duration-500" src={index.picture} />
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Servicescards;
