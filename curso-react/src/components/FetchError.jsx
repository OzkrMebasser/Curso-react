import React from "react";

const FetchError = ({ message }) => {
  return (
    <div className="error-warning">
      <p>💔</p>
      <p>{message}</p>
    </div>
  );
};

export default FetchError;
