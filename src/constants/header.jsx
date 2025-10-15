import React from "react";
import iconlogo from "../assets/images/icon.png";
import Fonts from "../utils/fonts";

const Header = () => {
  return (
    <div className="flex flex-1 w-full">
      <div className="w-full py-2 rounded-full bg-[#262626] flex items-center justify-between px-4">
        <div className="flex flex-row justify-between w-4/12">
          <button style={{...Fonts.poppins.medium, fontSize: 15}} className="text-black bg-[#F2F1FF] py-3 px-8 rounded-full">Home</button>
          <button style={{...Fonts.poppins.medium, fontSize: 15}} className="text-[#797979] hover:text-[#F2F1FF] hover:cursor-pointer duration-600">Services</button>
           <button style={{...Fonts.poppins.medium, fontSize: 15}} className="text-[#797979] hover:text-[#F2F1FF] hover:cursor-pointer duration-600">Experiences</button>
        </div>
        <div className="flex flex-row">
          <h1 className="text-[#FF411F]" style={{...Fonts.quicksand.semibold, fontSize: 35}}>P</h1>
          <h1 className="text-[#F2F1FF]" style={{...Fonts.quicksand.semibold, fontSize: 35}}>ortfolio</h1>
        </div>
        <div className="flex flex-row justify-between w-4/12 pr-8">
           <button style={{...Fonts.poppins.medium, fontSize: 15}} className="text-[#797979] hover:text-[#F2F1FF] hover:cursor-pointer duration-600">Resume</button>
            <button style={{...Fonts.poppins.medium, fontSize: 15}} className="text-[#797979] hover:text-[#F2F1FF] hover:cursor-pointer duration-600">Portfolio</button>
            <button style={{...Fonts.poppins.medium, fontSize: 15}} className="text-[#797979] hover:text-[#F2F1FF] hover:cursor-pointer duration-600">Testimonials</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
