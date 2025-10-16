import React from "react";
import Fonts from "../../utils/fonts";
import { IoMdMail } from "react-icons/io";

const Toptitle = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <div className="flex flex-col items-center">
        <h1 style={{ ...Fonts.poppins.semiBold, fontSize: 24 }}>
          Have an awesome project idea?
        </h1>
        <h1
          style={{ ...Fonts.poppins.semiBold, fontSize: 48 }}
          className="text-[#FF411F]"
        >
          Let’s Discuss
        </h1>
      </div>
      <div className="flex flex-1 w-full items-center justify-center gap-10">
        <div className="bg-[#262626]/10 flex flex-row items-center justify-center w-7/12 py-2 px-5 hover:bg-[#262626]/20 hover:cursor-pointer duration-400 rounded-2xl">
            <IoMdMail color="#FF411F" size={35}/>
            <input placeholder="Enter your Email Address" style={{...Fonts.poppins.regular, fontSize: 20}} type="email" className="outline-none h-15 w-full ml-5"/>
        </div>
        <div>
            <button style={{...Fonts.poppins.regular, fontSize: 20}} className="bg-[#FF411F] items-center justify-center py-5 px-8 rounded-2xl text-white hover:bg-[#e83110] hover:cursor-pointer duration-400">Book a call</button>
        </div>
      </div>
    </div>
  );
};

export default Toptitle;
