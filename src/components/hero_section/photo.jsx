import React from "react";
import photo from "../../assets/images/photo.png"

const Photo = () => {
  return (
    <div
      className="ml-[-175px] mt-[-80px]"
      style={{
        backgroundImage: `url(${photo})`,
        height: 520,
        width: 770,
      }}
    ></div>
  );
};

export default Photo;
