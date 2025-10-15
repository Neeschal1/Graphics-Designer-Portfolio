import React from "react";
import Leftcontent from "../components/hero_section/leftcontents";
import Header from "../constants/header"
import Photo from "../components/hero_section/photo";
import Rightcontent from "../components/hero_section/rightcontent";
import Introsection from "../components/hero_section/introsection";

const Hero = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center w-full py-5 px-5 gap-8">
      <Header />
      <Introsection />
      <div className="flex flex-row w-full justify-between p-10">
        <Leftcontent />
        <Photo />
        <Rightcontent />
      </div>
    </div>
  );
};

export default Hero;
