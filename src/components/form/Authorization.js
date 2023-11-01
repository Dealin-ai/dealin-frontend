import React from "react";
import useInput from "../../hooks/use-input";
import classes from "./Authorization.module.css";
import Card from "../UI/Card";
import AuthorizationBackground from "../UI/AuthorizationBackground";

const Authorization = (props) => {
  const {
    value: enteredEmail,
    isValid: enteredEmailisValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHAndler,
    inputBlureHandler: enteredEmailBlureHandler,
    reset: enteredEmailResetHAndler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlureHandler: enteredPasswordBlureHandler,
    reset: enteredPasswordResetHandler,
  } = useInput((value) => value.trim() !== "");

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!enteredEmailisValid && !enteredPasswordIsValid) {
      return;
    }
    enteredPasswordResetHandler();
    enteredEmailResetHAndler();

    console.log(enteredEmail, enteredPassword);
    let formIsValid = false;

    if (enteredEmailisValid && enteredPasswordIsValid) {
      formIsValid = true;
    }
    if (formIsValid) {
      const userData = {
        email: enteredEmail,
        password: enteredPassword,
      };

      try {
        const response = await fetch(
          "https://food-app-8adf3-default-rtdb.firebaseio.com/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (response.ok) {
          console.log("data was sent");
        } else {
          console.log("data was not sent");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AuthorizationBackground>
      <Card>
        <form
          onSubmit={formSubmissionHandler}
          className={classes.authorizationForm}
        >
          <div className={classes.formtitle}>
            <h1>ავტორიზაცია</h1>
          </div>
          <div className={`${enteredEmailHasError ? classes.invalid : ""}`}>
            <label htmlFor="enteredemail">ელ-ფოსტა</label>
            <input
              id="enteredemail"
              value={enteredEmail}
              onChange={enteredEmailChangeHAndler}
              onBlur={enteredEmailBlureHandler}
              type="email"
            />
            {enteredEmailHasError && (
              <p className={classes.texterror}>Please Enter Email!</p>
            )}
          </div>
          <div className={`${enteredPasswordHasError ? classes.invalid : ""}`}>
            <label htmlFor="enteredpassword">პასვორდი</label>
            <input
            id="enteredpassword"
              value={enteredPassword}
              onChange={enteredPasswordChangeHandler}
              onBlur={enteredPasswordBlureHandler}
              type="password"
            />
            {enteredPasswordHasError && (
              <p className={classes.texterror}>Please Enter Password!</p>
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

export default Authorization;
