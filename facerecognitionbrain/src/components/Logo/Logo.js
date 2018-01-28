import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";


const Logo = () => (
  <div className="ma4 mt0">
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 55 }}
      style={{ height: 150, width: 150 }}
    >
      <div className="Tilt-inner">
        <img
          style={{ marginTop: "25px" }}
          src={brain}
          alt="brain"
          width="100px"
        />
      </div>
    </Tilt>
  </div>
);

export default Logo;
