import React from "react";
import "./styles/Img.css";
import morty from "./img/morty.png";
import mor from "./img/mor.png";

const Img = () => {
  return (
    <div className="image-container">
      <div className="image">
        <img src={morty} alt="" />
      </div>
      <div className="image2">
        <img src={mor} alt="" />
      </div>
    </div>
  );
};

export default Img;
