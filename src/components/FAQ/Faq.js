import { useState } from "react";

import classes from "./Faq.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Faq = (props) => {
  const [showText, setShowText] = useState(false);

  const showTextHandler = () => {
    setShowText((prevstate) => !prevstate);
  };

  return (
    <>
      <div className={classes.faqmain}>
        <div className={classes.flex}>
          <h2>{props.title}</h2>
          <div onClick={showTextHandler}>
            {showText ? (
              <FaMinus className={classes.icon} />
            ) : (
              <FaPlus className={classes.icon} />
            )}
          </div>
        </div>
        <div
          className={
            !showText
              ? `${classes.text}`
              : `${classes.text} ${classes.fulltext}`
          }
        >
          {props.description}
        </div>
      </div>
    </>
  );
};

export default Faq;
