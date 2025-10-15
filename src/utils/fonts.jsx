import React from 'react'
import PoppinsLight from "../assets/fonts/Poppins-Light.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import Kalam from "../assets/fonts/Kalam-Bold.ttf"
import Tanker from "../assets/fonts/tanker-regular.otf"
import Quicksandsemibold from "../assets/fonts/Quicksand-SemiBold.ttf"
import "./fonts.css"


const Fonts = {
  poppins: {
    light: { fontFamily: "Poppins, sans-serif", fontWeight: 300 },
    regular: { fontFamily: "Poppins, sans-serif", fontWeight: 400 },
    medium: { fontFamily: "Poppins, sans-serif", fontWeight: 500 },
    semiBold: { fontFamily: "Poppins, sans-serif", fontWeight: 600 },
    bold: { fontFamily: "Poppins, sans-serif", fontWeight: 700 },
  },
  kalam: {
    bold: {fontFamily: "Kalam, sans-serif", fontWeight: 800}
  },
  tanker: {
    bold: {fontFamily: "Tanker, sans-serif", fontWeight: 500}
  },
  quicksand: {
    semibold: {fontFamily: "Quicksand, sans-serif", fontWeight: 600}
  }
};

export default Fonts;