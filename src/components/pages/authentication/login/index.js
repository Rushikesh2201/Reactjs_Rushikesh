import React, { useState } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser, resetUser } from "./../../../../utils/actions";
import { useHistory } from "react-router-dom";

import styles from "./index.module.css";
import Logo from "./../../../../assets/svg/logo.png";
import ApiService from "../../../../utils/middleware/ApiService";
import ActivityLoader from "../../../atoms/ActivityLoader/ActivityLoader";
const Login = (props) => {
  let history = useHistory();
  const [errorMessages, setErrorMessages] = useState({});
  const [showLoader, setShowLoader] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [intialModel, setIntialModel] = useState(model);



  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setShowLoader(true)
    var { uname, pass } = document.forms[0];

    let payload = {
      email: uname.value,
      password: pass.value,
    };
    ApiService.post("/v1/login", payload, null, (res, err) => {
      if (err == null) {
        props.setUser({
          userInfo: res,
        });
        setShowLoader(false)
        history.push("/dashboard");
      } else {
        console.log(err);
        setErrorMessages({ message: err.message });
        setShowLoader(false)
      }
    });
  };

  // Generate JSX code for error message
  const renderErrorMessage = () => (
    <label className={styles.error}>{errorMessages.message}</label>
  );

  // JSX code for login form
  const renderForm = (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className={styles.inputContainer}>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage()}
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      {showLoader && <ActivityLoader show={showLoader} />}

      <div className={styles.app}>
        <img src={Logo} alt="logo" className={styles.logoStyle} />

        <div className={styles.loginForm}>
          <div className={styles.title}>Sign In</div>
          {renderForm}
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({ user: state.user }), {
  setUser,
  resetUser,
})(withRouter(Login));
