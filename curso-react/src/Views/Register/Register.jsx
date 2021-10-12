import React from "react";
import { useSelector } from "react-redux";

//Components
import RegisterForm from "../../components/Register/Form/RegisterForm";
import ErrorAlert from "../../components/Custom/ErrorAlert";

import "./Register.styles.css";

const Register = () => {
  const { status, message } = useSelector(state => state.errors);

  return (
    <div className="Register-container">
      {status && <ErrorAlert message={message} />}
      <RegisterForm />
    </div>
  );
};

export default Register;
