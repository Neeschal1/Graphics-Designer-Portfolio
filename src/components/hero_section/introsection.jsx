import React from "react";
import Fonts from "../../utils/fonts";
import decorativeicon from "../../assets/images/decoration.png";

const Introsection = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-col">
      <div className="flex flex-row justify-center items-start">
        <h1
          style={{ ...Fonts.poppins.medium, fontSize: 18 }}
          className="py-1 px-8 border rounded-full border-[#737373]"
        >
          Hello!
        </h1>
        <img className="mt-[-25px] ml-[-10px]" src={decorativeicon} />
      </div>
      <div className="flex flex-1 items-center justify-center flex-row gap-3">
        <h1 style={{ ...Fonts.poppins.medium, fontSize: 64 }} className="mt-5">
          I'm
        </h1>
        <h1
          style={{ ...Fonts.poppins.semiBold, fontSize: 96 }}
          className="text-[#1264FF]"
        >
          Aashish,
        </h1>
      </div>
      <h1
        style={{ ...Fonts.poppins.regular, fontSize: 20 }}
        className="text-[#262626] mt-[-24px]"
      >
        Graphics Designer | Fullstack Developer | Videographer | Photographer
      </h1>
    </div>
  );
};

export default Introsection;
