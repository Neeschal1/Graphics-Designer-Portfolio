import React from "react";
import Fonts from "../utils/fonts";

const Quicklink = [
  {id: 1, name: "Home", url: "#"},
  {id: 2, name: "Services", url: "#"},
  {id: 3, name: "Experiences", url: "#"},
  {id: 4, name: "Resume", url: "#"},
  {id: 5, name: "Portfolio", url: "#"},
  {id: 6, name: "Testimonials", url: "#"}
]
const sociallinks = [
  {id: 1, name: "Facebook", url: "#"},
  {id: 2, name: "Instagram", url: "#"},
  {id: 3, name: "Twitter", url: "#"},
  {id: 4, name: "Linkedin", url: "#"},
  {id: 5, name: "Tiktok", url: "#"},
]

const Footer = () => {
  return (
    <div className="bg-[#313131] flex flex-1 items-center justify-center flex-col">
      <button
        style={{ ...Fonts.poppins.medium }}
        className="flex flex-1 w-full items-center py-3 justify-center text-[#FFFFFF]/50 hover:text-[#FFFFFF] hover:cursor-pointer duration-600"
      >
        Back to top
      </button>
      <div className="bg-[#262626] items-start justify-start flex flex-1 flex-col w-full px-10">
        <div className="flex py-20">
          <h1
            style={{ ...Fonts.poppins.semiBold, fontSize: 48 }}
            className="text-white"
          >
            Let’s Connect there
          </h1>
        </div>
        <div className="flex w-full bg-[#535353] h-1 rounded-full" />

        {/* FOOTER CONTENTS */}
        <div className="flex flex-row">
            {/* Left Contents */}
          <div>
            <div className="flex flex-row">
              <h1
                style={{ ...Fonts.poppins.semiBold, fontSize: 64 }}
                className="text-[#FF411F]"
              >
                A
              </h1>
              <h1
                style={{ ...Fonts.poppins.semiBold, fontSize: 64 }}
                className="text-white"
              >
                ashish
              </h1>
            </div>
            <h1
              style={{ ...Fonts.poppins.medium }}
              className="text-[#CCCCCC] flex flex-1 w-8/12"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
            </h1>
          </div>

          {/* Quick links and contact */}
          <div className="flex flex-row w-full gap-30">
            <div>
              <h1 style={{...Fonts.poppins.semiBold, fontSize: 20}} className="text-[#FF411F]">Quick Links</h1>
              <div className="flex flex-1 items-center justify-center flex-col gap-2 mt-5">
                {Quicklink.map((index)=>(
                <div key={index.id}>
                  <a style={{...Fonts.poppins.medium, fontSize: 14}} className="text-[#AFAFAF] hover:text-white hover:cursor-pointer duration-400" href={index.url}>{index.name}</a>
                </div>
              ))}
              </div>
            </div>
            <div>
              <h1 style={{...Fonts.poppins.semiBold, fontSize: 20}} className="text-[#FF411F]">Social Links</h1>
              <div className="flex flex-1 items-center justify-center flex-col gap-2 mt-5">
                {sociallinks.map((index)=>(
                <div key={index.id}>
                  <a style={{...Fonts.poppins.medium, fontSize: 14}} className="text-[#AFAFAF] hover:text-white hover:cursor-pointer duration-400" href={index.url}>{index.name}</a>
                </div>
              ))}
              </div>
            </div>
            <div>
             <h1 style={{...Fonts.poppins.semiBold, fontSize: 20}} className="text-[#FF411F]">Get the latest information</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
