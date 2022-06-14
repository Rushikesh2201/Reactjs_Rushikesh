import React, { useState } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../../utils/actions";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import Logo from "./../../../../assets/svg/logo.png";
const Login = () => {
  let history = useHistory();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        history.push("/dashboard");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <label className={styles.error}>{errorMessages.message}</label>
    );

  // JSX code for login form
  const renderForm = (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={styles.inputContainer}>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.app}>
      <img src={Logo} alt="logo" className={styles.logoStyle} />

      <div className={styles.loginForm}>
        <div className={styles.title}>Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default connect((state) => ({ user: state.user }), {
  setUser,
  resetUser,
})(withRouter(Login));
