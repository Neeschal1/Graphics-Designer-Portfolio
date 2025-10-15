import React from "react";
import Fonts from "../../utils/fonts";

const Leftcontent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h1 style={{ ...Fonts.quicksand.semibold, fontSize: 128 }} className="">
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
  );
};

export default Leftcontent;
