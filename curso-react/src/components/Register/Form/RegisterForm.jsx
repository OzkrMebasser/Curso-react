import React, { useState } from "react";
import { useDispatch } from "react-redux";
//MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//STYLES
import "./RegisterForm.styles.css";

//REDUX (ACTIONS)
import { registerWithEmail } from "../../../actions/user.actions";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: ""
  });

  const handleRegisterUser = () => {
    console.log(userData);
    dispatch(registerWithEmail(userData));
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
      <h4>Register</h4>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        style={{ width: " 100%" }}
        onChange={({ target }) =>
          setUserData({ ...userData, displayName: target.value })
        }
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        style={{ width: " 100%" }}
        onChange={({ target }) =>
          setUserData({ ...userData, email: target.value })
        }
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        style={{ width: " 100%" }}
        onChange={({ target }) =>
          setUserData({ ...userData, password: target.value })
        }
      />

      <Button variant="outlined" color="success" onClick={handleRegisterUser}>
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
