import React from "react";

//Bootstrap components
import { Spinner } from "react-bootstrap";

//Styles
import "./LoaderPage.styles.css";

const LoaderPage = () => {
  return (
    <div className="loader-page">
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default LoaderPage;
