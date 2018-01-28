import React from "react";
import "./Facerecognition.css";

const FaceRecognition = ({ box, imageUrl }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img
        id="inputimage"
        src={imageUrl}
        alt="face"
        width="500px"
        height="auto"
      />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomCol,
          left: box.leftCol
        }}
      />
    </div>
  </div>
);

export default FaceRecognition;
