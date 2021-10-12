import React from "react";
import { useSelector } from "react-redux";
//Components
import Form from "../../components/Login/Form/Form";
import ErrorAlert from "../../components/Custom/ErrorAlert";

import "./Login.styles.css";

const Login = () => {
  const { status, message } = useSelector(state => state.errors);

  return (
    <div className="Login-container">
      {status && <ErrorAlert message={message} />}
      <Form />
    </div>
  );
};

export default Login;
