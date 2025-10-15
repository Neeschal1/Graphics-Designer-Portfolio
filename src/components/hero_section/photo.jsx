import React from "react";
import photo from "../../assets/images/photo.png";
import Fonts from "../../utils/fonts";

const Photo = () => {
  return (
    <div className="ml-[-175px] mt-[-80px]">
      <div
      className="flex flex-1 z-0 relative items-end justify-center"
        style={{
          backgroundImage: `url(${photo})`,
          height: 520,
          width: 770,
        }}
      >
        <div className="flex w-6/12 p-2 py-3 px-10 z-10 flex-1 items-center justify-between absolute bg-[#F2F1FF] rounded-4xl mb-3">
          <button style={{...Fonts.poppins.medium, fontSize: 20}} className="bg-[#5B81CA] rounded-2xl text-white py-3 px-10">Portfolio</button>
          <button  style={{...Fonts.poppins.medium, fontSize: 20}} className="border border-[#5B81CA] rounded-2xl text-black py-3 px-7">Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
