import React from "react";
import { useDispatch, useSelector } from "react-redux";

//MUI COMPONENTS
import Button from "@mui/material/Button";

//Actions
import { logout } from "../../actions/user.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { displayName, uid } = useSelector(state => state.user);
  return (
    <div>
      <h1>Home</h1>
      <Button
        variant="outlined"
        color="error"
        onClick={() => dispatch(logout({ displayName, uid }))}
      >
        Log out
      </Button>
    </div>
  );
};

export default Home;
