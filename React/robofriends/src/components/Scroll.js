import React from "react";

const Scroll = ({ children }) => (
  <div
    style={{ overflow: "scroll", border: "1px solid black", height: "400px" }}
  >
    {children}
  </div>
);

export default Scroll;
