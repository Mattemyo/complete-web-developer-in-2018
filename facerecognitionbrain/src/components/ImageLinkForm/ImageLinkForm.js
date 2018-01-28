import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div>
    <p className="f3">
      {"This magic Brain will detect faces in your pictures. Git it a try."}
    </p>
    <div className="center">
      <div className="pa4 br3 shadow-5 form center">
        <input
          type="text"
          className="f4 pa2 w-70 center"
          onChange={onInputChange}
        />
        <button
          onClick={onButtonSubmit}
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
        >
          Detect
        </button>
      </div>
    </div>
  </div>
);

export default ImageLinkForm;
