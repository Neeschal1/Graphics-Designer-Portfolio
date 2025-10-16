import React from "react";
import { FaStar } from "react-icons/fa";
import comma from "../../assets/images/comma.png";
import user from "../../assets/images/user.png";
import Fonts from "../../utils/fonts";

const Cards = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* 1ST ROW */}
      <div className="flex flex-row w-10/12 justify-between items-center">
        <div className="bg-[#3B3B3B] flex flex-col py-5 px-5 w-full rounded-3xl gap-5">
          <div className="flex flex-1 flex-row gap-5">
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <h1
              style={{ ...Fonts.poppins.medium, fontSize: 20 }}
              className="text-white"
            >
              5.0
            </h1>
          </div>
          <div className="flex w-11/12">
            <h1
              style={{ ...Fonts.poppins.medium, fontSize: 16 }}
              className="text-[#CCCCCC]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <img src={user} />
            <div className="flex flex-col">
              <h1
                style={{ ...Fonts.poppins.medium, fontSize: 16 }}
                className="text-white"
              >
                Billie Eilish
              </h1>
              <h1
                style={{ ...Fonts.poppins.medium, fontSize: 12 }}
                className="text-white"
              >
                CEO, Meta
              </h1>
            </div>
          </div>
        </div>
        <img
          className="ml-60"
          style={{ width: 154, height: 100 }}
          src={comma}
        />
      </div>

      {/* 2ND ROW */}
      <div className="flex flex-row w-full justify-end items-end">
        <img
          className="mr-60 scale-x-[-1]"
          style={{ width: 154, height: 100 }}
          src={comma}
        />
        <div className="bg-[#3B3B3B] flex flex-col py-5 px-5 w-7/12 rounded-3xl gap-5">
          <div className="flex flex-1 flex-row gap-5">
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <FaStar color="#FF411F" size={28} />
            <h1
              style={{ ...Fonts.poppins.medium, fontSize: 20 }}
              className="text-white"
            >
              5.0
            </h1>
          </div>
          <div className="flex w-11/12">
            <h1
              style={{ ...Fonts.poppins.medium, fontSize: 16 }}
              className="text-[#CCCCCC]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <img src={user} />
            <div className="flex flex-col">
              <h1
                style={{ ...Fonts.poppins.medium, fontSize: 16 }}
                className="text-white"
              >
                Billie Eilish
              </h1>
              <h1
                style={{ ...Fonts.poppins.medium, fontSize: 12 }}
                className="text-white"
              >
                CEO, Meta
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
