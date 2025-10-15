import React from "react";
import photo from "../../assets/images/photo.png"

const Photo = () => {
  return (
    <div
      className="ml-[-95px]"
      style={{
        backgroundImage: `url(${photo})`,
        height: 550,
        width: 785,
      }}
    />
  );
};

export default Photo;
