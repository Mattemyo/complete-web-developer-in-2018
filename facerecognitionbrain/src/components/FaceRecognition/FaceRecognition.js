import React from "react";

const FaceRecognition = ({ imageUrl }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img src={imageUrl} alt="face" width="500px" height="auto" />
    </div>
  </div>
);

export default FaceRecognition;
