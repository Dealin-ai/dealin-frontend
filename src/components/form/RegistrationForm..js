import React from "react";
import useInput from "../../hooks/use-input";
import Container from "../UI/Container";
import Card from "../UI/Card";
import axios from "axios";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlureHandler: nameBlureHandler,
    reset: nameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlureHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredId,
    isValid: enteredIdIsValid,
    hasError: idHasError,
    valueChangeHandler: idChangeHandler,
    inputBlureHandler: idBlurHandler,
    reset: idResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: enteredNumberHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlureHandler: numberBlurHandler,
    reset: numberResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlureHandler: passwordBlureHandler,
    reset: passwordResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: repeatedPassword,
    isValid: repeatedPasswordIsValid,
    hasError: repeatetPasswordHasError,
    valueChangeHandler: repeatedPasswordChangeHandler,
    inputBlureHandler: repeatedPasswordBlureHandler,
    reset: repeatedPasswordResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredGender,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderChangeHandler,
    inputBlureHandler: genderBlurHandler,
    reset: genderResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlureHandler: dateBlureHandler,
    reset: dateResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastname,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameCHangeHandler,
    inputBlureHandler: lastnameBlureHandler,
  } = useInput((value) => value.trim() !== "");
  const validPasswords = repeatedPassword === enteredPassword;

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredIdIsValid &&
      !enteredNumberIsValid &&
      !passwordIsValid &&
      !dateIsValid &&
      !lastnameIsValid
    ) {
      return;
    }
    if (!validPasswords) {
      console.log("invalid password");
      return;
    }
    // nameResetHandler();
    // emailResetHandler();
    // idResetHandler();
    // numberResetHandler();
    // passwordResetHandler();
    // repeatedPasswordResetHandler();
    // genderResetHandler();
    // dateResetHandler();

    let formIsValid = false;
    console.log(enteredDate.toString(), "birthdate");
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredIdIsValid &&
      enteredNumberIsValid &&
      passwordIsValid &&
      repeatedPasswordIsValid &&
      genderIsValid
    ) {
      formIsValid = true;
    }
    if (formIsValid) {
      const userData = {
        lastName: enteredLastname,
        firstName: enteredName,
        idCardNumber: enteredId,
        birthDate: enteredDate,
        gender: enteredGender,
        phoneNumber: enteredNumber,
        email: enteredEmail,
        password: enteredPassword,
      };

      try {
        const data = await axios.post(
          `${process.env.REACT_APP_SERVER_HOST}/user/signup`,
          userData
        );
        alert("code has sent to your number");
      } catch (error) {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Card>
        <form onSubmit={formSubmissionHandler} className={classes.form}>
          <div className={[classes.two, classes.formtitle].join(" ")}>
            <h1>დარეგისტრირდით</h1>
          </div>

          <div
            className={`${classes.one} ${nameHasError ? classes.invalid : ""}`}
          >
            <label htmlFor="name">სახელი </label>
            <input
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlureHandler}
              type="text"
              id="name"
            />
            {nameHasError && (
              <p className={classes.texterror}>Name must not be empty!</p>
            )}
          </div>
          <div
            className={`${classes.one} ${nameHasError ? classes.invalid : ""}`}
          >
            <label htmlFor="name">გვარი</label>
            <input
              value={enteredLastname}
              onChange={lastnameCHangeHandler}
              onBlur={lastnameBlureHandler}
              type="text"
              id="lastname"
            />
            {lastnameHasError && (
              <p className={classes.texterror}>Lastname must not be empty!</p>
            )}
          </div>
          <div
            className={`${classes.one} ${idHasError ? classes.invalid : ""}`}
          >
            <label htmlFor="id">პირადი ნომერი</label>
            <input
              value={enteredId}
              onChange={idChangeHandler}
              onBlur={idBlurHandler}
              type="number"
              id="id"
            />
            {idHasError && (
              <p className={classes.texterror}>Id must not be empty!</p>
            )}
          </div>
          <div
            className={`${classes.one} ${dateHasError ? classes.invalid : ""}`}
          >
            <label htmlFor="birthyear">დაბადების თარიღი</label>
            <input
              value={enteredDate}
              onChange={dateChangeHandler}
              onBlur={dateBlureHandler}
              type="date"
              id="birthyear"
            />
            {dateHasError && (
              <p className={classes.texterror}>Pleace Choose the Date!</p>
            )}
          </div>
          <div
            className={`${classes.one} ${
              genderHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="gender">სქესი</label>
            <select
              value={enteredGender}
              onChange={genderChangeHandler}
              onBlur={genderBlurHandler}
              id="gender"
              name="gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {genderHasError && (
              <p className={classes.texterror}>Select Gender!</p>
            )}
          </div>
          <div
            className={`${classes.two} ${
              enteredNumberHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="phonenumber">ტელეფონის ნომერი</label>
            <input
              value={enteredNumber}
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
              type="number"
              id="phonenumber"
            />
            {enteredNumberHasError && (
              <p className={classes.texterror}>Number must not be empty!</p>
            )}
          </div>
          <div
            className={`${classes.two} ${emailHasError ? classes.invalid : ""}`}
          >
            <label htmlFor="email">ელ-ფოსტა</label>
            <input
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              type="email"
              id="email"
            />
            {emailHasError && (
              <p className={classes.texterror}>Email must not be empty!</p>
            )}
          </div>
          <div
            className={`${classes.two} ${
              passwordHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">პაროლი</label>
            <input
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlureHandler}
              type="password"
              id="password"
            />
            {passwordHasError && (
              <p className={classes.texterror}>Password must not be empty!</p>
            )}
          </div>
          <div
            className={`${classes.two} ${
              repeatetPasswordHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="passwordrepeate">გაიმეორეთ პაროლი</label>
            <input
              value={repeatedPassword}
              onChange={repeatedPasswordChangeHandler}
              onBlur={repeatedPasswordBlureHandler}
              type="password"
              id="passwordrepeate"
            />
            {repeatetPasswordHasError && (
              <p className={classes.texterror}>Password must not be empty!</p>
            )}
            {!validPasswords && (
              <p className={classes.texterror}>Password Is Invalid!</p>
            )}
          </div>
          <div className={classes.button}>
            <button>რეგისტრაცია</button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
