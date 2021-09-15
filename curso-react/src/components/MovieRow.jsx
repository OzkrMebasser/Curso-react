import React from "react";
import { array } from "prop-types";

const MovieRow = ({ children }) => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >
      {children}
    </div>
  );
};

export default MovieRow;
