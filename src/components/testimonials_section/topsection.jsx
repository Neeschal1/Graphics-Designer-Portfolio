import React from "react";
import decorationwhite from "../../assets/images/decorationwhite.png";
import Fonts from "../../utils/fonts";

const Topsection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <h1
            style={{ ...Fonts.poppins.semiBold, fontSize: 48 }}
            className="text-[#FF411F]"
          >
            Testimonials
          </h1>
          <img className="h-10 w-10" src={decorationwhite} />
        </div>
        <h1
          style={{ ...Fonts.poppins.semiBold, fontSize: 48 }}
          className="text-white mt-[-20px]"
        >
          that speaks to my result
        </h1>
      </div>
      <h2 style={{...Fonts.poppins.medium, fontSize: 18}} className="items-center text-center text-[#CCCCCC] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. Ut </h2>
    </div>
  );
};

export default Topsection;
