import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

//Context
import UserContext from "../../context/UserContext";

//Styles
import "./LoginForm.styles.css";

const auth = {
  user: "Daniel Meza",
  email: "daniel.academlo@gmail.com",
  password: "mandarina"
};

const LoginForm = () => {
  const { dispatch } = useContext(UserContext);

  const history = useHistory();

  const [initialValues, setInitialValues] = useState({
    email: "Daniel",
    password: ""
  });

  const handleFormValidate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (auth.email === values.email && auth.password === values.password) {
      dispatch({
        type: "SUCCESS",
        payload: { user: auth.user, email: auth.email }
      });
      history.push("/");
    } else {
      alert("Wrong credentials");
    }

    // try {
    //   const response = await fetch(URL, {
    //     method: "POST",
    //     body: {
    //       email: initialValues.email,
    //       password: initialValues.password
    //     }
    //   });
    //   const result = await response.json();
    //   console.log(result)
    // } catch (error) {
    //     console.log(error)
    // }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validate={handleFormValidate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login Form</h2>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
