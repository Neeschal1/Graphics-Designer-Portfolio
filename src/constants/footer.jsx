import React from "react";
import Fonts from "../utils/fonts";
import { BsSendFill } from "react-icons/bs";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Quicklink = [
  { id: 1, name: "Home", url: "#" },
  { id: 2, name: "Services", url: "#" },
  { id: 3, name: "Experiences", url: "#" },
  { id: 4, name: "Resume", url: "#" },
  { id: 5, name: "Portfolio", url: "#" },
  { id: 6, name: "Testimonials", url: "#" },
];
const sociallinks = [
  { id: 1, name: "Facebook", url: "#" },
  { id: 2, name: "Instagram", url: "#" },
  { id: 3, name: "Twitter", url: "#" },
  { id: 4, name: "Linkedin", url: "#" },
  { id: 5, name: "Tiktok", url: "#" },
];
const socialmedias = [
  {id: 1, icon:<MdOutlineFacebook color="white" size={30} />, url: "https://www.facebook.com/aca.ssh.9#"},
  {id: 2, icon:<FaTwitter color="white" size={30} />, url: "#"},
  {id: 3, icon:<FaLinkedin color="white" size={30} />, url: "#"},
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
      <div className="bg-[#262626] items-start gap-10 justify-start flex flex-1 flex-col w-full px-10">
        <div className="flex py-20 mb-[-80px]">
          <h1
            style={{ ...Fonts.poppins.semiBold, fontSize: 48 }}
            className="text-white"
          >
            Let’s Connect there
          </h1>
        </div>
        <div className="flex w-full bg-[#535353] h-1 rounded-full justify-between" />

        {/* FOOTER CONTENTS */}
        <div className="flex flex-row w-full flex-1 justify-between gap-40">
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
              className="text-[#CCCCCC] flex flex-1 w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
            </h1>
          </div>

          {/* Quick links and contact */}
          <div className="flex flex-row w-full gap-30">
            <div>
              <h1
                style={{ ...Fonts.poppins.semiBold, fontSize: 20 }}
                className="text-[#FF411F]"
              >
                Quick Links
              </h1>
              <div className="flex flex-1 items-center justify-center flex-col gap-2 mt-5">
                {Quicklink.map((index) => (
                  <div key={index.id}>
                    <a
                      style={{ ...Fonts.poppins.medium, fontSize: 14 }}
                      className="text-[#AFAFAF] hover:text-white hover:cursor-pointer duration-400"
                      href={index.url}
                    >
                      {index.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1
                style={{ ...Fonts.poppins.semiBold, fontSize: 20 }}
                className="text-[#FF411F]"
              >
                Social Links
              </h1>
              <div className="flex flex-1 items-center justify-center flex-col gap-2 mt-5">
                {sociallinks.map((index) => (
                  <div key={index.id}>
                    <a
                      style={{ ...Fonts.poppins.medium, fontSize: 14 }}
                      className="text-[#AFAFAF] hover:text-white hover:cursor-pointer duration-400"
                      href={index.url}
                    >
                      {index.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h1
              style={{ ...Fonts.poppins.semiBold, fontSize: 20 }}
              className="text-[#FF411F]"
            >
              Get the latest information
            </h1>
            <div className="bg-[#F8F8F8] flex items-center justify-center flex-row rounded-xl mt-5">
              <input placeholder="Email Address" className="outline-none  px-3 py-4 flex flex-1 w-full" />
              <button className="bg-[#FF7961] hover:bg-[#FF411F] hover:cursor-pointer duration-500 h-full flex w-2/12 relative rounded-tr-xl rounded-br-xl items-center justify-center">
                <BsSendFill color="white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full bg-[#535353] h-1 rounded-full justify-between" />

        {/* Bottom contents */}
        <div className="flex flex-row justify-between w-full items-center mb-5">
          <div className="flex flex-row gap-1">
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 14}} className="text-white">Copyright © 2025</h1>
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 14}} className="text-[#FF411F]">Aashish</h1>
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 14}} className="text-white">. All Rights Reserved. </h1>
          </div>
          <div className="flex flex-row gap-4">
            {
              socialmedias.map((items)=>(
                <div key={items.id}>
                  <a href={items.url} className="rounded-full hover:cursor-pointer ">{items.icon}</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
