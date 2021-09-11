import React from "react";

//Bootstrap components
import { Alert } from "react-bootstrap";

const NotFound = props => {
  return (
    <div>
      <Alert variant="danger">404 not found</Alert>
    </div>
  );
};

export default NotFound;
