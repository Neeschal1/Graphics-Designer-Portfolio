import React from "react";
import Header from "../constants/header";
import Fonts from "../utils/fonts";
import decorativeicon from "../assets/images/decoration.png";
import photo from "../assets/images/photo.png"

const Hero = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center w-full py-5 px-5 gap-8">
      <Header />
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
          <h1
            style={{ ...Fonts.poppins.medium, fontSize: 64 }}
            className="mt-5"
          >
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
      <div className="flex flex-row">
        {/* LEFT CONTENTS */}
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h1
              style={{ ...Fonts.quicksand.semibold, fontSize: 128 }}
              className=""
            >
              "
            </h1>
            <div className="mt-20 ml-5">
              <h1 style={{ ...Fonts.poppins.medium, fontSize: 20 }}>
                Aashish’s exceptional dedication <br />
                ensures our company’s success.
              </h1>
              <h1
                style={{ ...Fonts.poppins.medium, fontSize: 20 }}
                className="text-[#FF411F]"
              >
                Highly Recommended!
              </h1>
            </div>
          </div>
          <div>
            <h1 style={{ ...Fonts.poppins.semiBold, fontSize: 40 }}>100+</h1>
            <h1 style={{ ...Fonts.poppins.medium, fontSize: 24 }}>
              Clients Served
            </h1>
          </div>
        </div>

        {/* CENTER CONTENTS */}
        <div className="bg-[#1264FF] ">
          <div style={{backgroundImage: `url(${photo})`, height: 549, width: 482}} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
