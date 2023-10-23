import { useState } from "react";

const useInput = (validateValue) =>{
    const [enteredValue, setenteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setenteredValue(event.target.value);
    
      };

      const inputBlureHandler =(event) =>{
        event.preventDefault();
        setIsTouched(true);
      }
      const reset = () => {
        setenteredValue('')
        setIsTouched(false)
      }

    return {
        value : enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlureHandler,
        reset
    }
}

export default useInput;