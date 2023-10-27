import React from 'react';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        {props.children} 
       
      </div>
      <button className={classes.button} onClick={props.onClose}>Close</button>
    </div>
  );
};

export default ErrorModal;