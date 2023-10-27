import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import Container from "../UI/Container";
import ErrorModal from "./ErrorModal";
import Card from "../UI/Card";
import axios from "axios";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = (props) => {
  const [errorMessage, seterrorMessage] = useState(null);

  const [isErrorModalVisible, setErrorModalVisible] = useState(true);
  const [formInvalidModal, setFormInvalidModal] = useState(false);



 
  const hideErrorModal = () => {
    setErrorModalVisible(false);
  };

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
  } = useInput((value) => value.trim().length === 11);

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
    reset: lastnameResetHandler,
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
   /*   nameResetHandler();
     lastnameResetHandler();
     emailResetHandler();
     idResetHandler();
     numberResetHandler();
     passwordResetHandler();
     repeatedPasswordResetHandler();
     genderResetHandler();
     dateResetHandler(); */

    let formIsValid = false;
   
    
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

    if(!formIsValid){
      setFormInvalidModal(true)
     
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
        const response = await axios.post(
          "http://3.87.117.73:3000/user/signup",
          userData
        );
        if (response.status === 200) {
    
          console.log(response.data);
      }
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.message);

        seterrorMessage(error.response.data.message);
        
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
            className={`${classes.one} ${
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
      {formInvalidModal && isErrorModalVisible && <ErrorModal onClose={hideErrorModal}><p>Please complete all inputs</p></ErrorModal>}
      {errorMessage && isErrorModalVisible && <ErrorModal onClose={hideErrorModal}>{errorMessage}</ErrorModal>}
    </Container>
  );
};

export default RegistrationForm;
