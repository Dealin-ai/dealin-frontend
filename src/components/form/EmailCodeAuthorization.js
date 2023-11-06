import React from "react";
import useInput from "../../hooks/use-input";
import classes from "./Authorization.module.css";
import Card from "../UI/Card";
import AuthorizationBackground from "../UI/AuthorizationBackground";

const EmailCodeAuthorization = (props) => {
 

  const {
    value: enteredCode,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlureHandler: enteredPasswordBlureHandler,
    reset: enteredPasswordResetHandler,
  } = useInput((value) => value.trim() !== "");

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!enteredPasswordIsValid) {
      return;
    }
    enteredPasswordResetHandler();
    

    console.log(enteredCode);
    let formIsValid = false;

    if (enteredPasswordIsValid) {
      formIsValid = true;
    }
    if (formIsValid) {
      const userData = {
       password: enteredCode,
      };

      
    }
  };

  return (
    <AuthorizationBackground>
      <Card>
        <form 
          onSubmit={formSubmissionHandler}
          className={`${classes.authorizationForm} ${classes.marginbottom}` }
        >
          <div className={classes.formtitle}>
            <h1>შეიყვანეთ კოდი</h1>
          </div>
          
          <div className={`${enteredPasswordHasError ? classes.invalid : ""}`}>
            <label htmlFor="enteredpassword">კოდი</label>
            <input
            id="enteredpassword"
              value={enteredCode}
              onChange={enteredPasswordChangeHandler}
              onBlur={enteredPasswordBlureHandler}
              type="password"
            />
            {enteredPasswordHasError && (
              <p className={classes.texterror}>Please Enter Code!</p>
            )}
          </div>
          <div className={classes.button}>
            <button>ავტორიზაცია</button>
          </div>
        </form>
      </Card>
    </AuthorizationBackground>
  );
};

export default EmailCodeAuthorization;
