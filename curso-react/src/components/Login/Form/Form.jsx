import React from "react";
import { useDispatch } from "react-redux";

//MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

//Styles
import "./Form.styles.css";

//Reux
import { loginWithGoogleFirebase } from "../../../actions/user.actions";

const Form = () => {
  const dispatch = useDispatch();

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
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        style={{ width: " 100%" }}
      />

      <Button variant="outlined" color="success">
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
