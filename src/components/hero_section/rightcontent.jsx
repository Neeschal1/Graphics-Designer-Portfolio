import React from "react";
import Fonts from "../../utils/fonts";
import { FaStar } from "react-icons/fa";

const Rightcontent = () => {
  return (
    <div className="text-right items-center justify-end ">
      <div className="flex flex-1 flex-row gap-5">
        <FaStar color="#1264FF" size={30} />
        <FaStar color="#1264FF" size={30} />
        <FaStar color="#1264FF" size={30} />
        <FaStar color="#1264FF" size={30} />
        <FaStar color="#1264FF" size={30} />
      </div>
      <div>
        <h1 style={{ ...Fonts.poppins.semiBold, fontSize: 60 }}>3+ year</h1>
        <h1
          style={{ ...Fonts.poppins.medium, fontSize: 32 }}
          className="mt-[-20px]"
        >
          expert
        </h1>
      </div>
      <div className="bg-black h-1 w-/12 rounded items-end" />
    </div>
  );
};

export default Rightcontent;
