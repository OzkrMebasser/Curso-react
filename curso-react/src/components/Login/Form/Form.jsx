import React, { useState } from "react";
import { useDispatch } from "react-redux";

//MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

//Styles
import "./Form.styles.css";

//Reux
import {
  loginWithGoogleFirebase,
  loginWithEmail
} from "../../../actions/user.actions";

const Form = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleEmailLogin = () => {
    dispatch(loginWithEmail(loginData));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogleFirebase());
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
      className="login-form"
    >
      <h4>Login</h4>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        style={{ width: " 100%" }}
        onChange={({ target }) =>
          setLoginData({ ...loginData, email: target.value })
        }
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        style={{ width: " 100%" }}
        onChange={({ target }) =>
          setLoginData({ ...loginData, password: target.value })
        }
      />

      <Button variant="outlined" color="success" onClick={handleEmailLogin}>
        Login
      </Button>

      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default Form;
