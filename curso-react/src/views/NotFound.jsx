import React from "react";

const NotFound = props => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h2 style={{ fontSize: "7rem", color: "#CD113B" }}>404</h2>
      <p>Not Found</p>
    </div>
  );
};

export default NotFound;
