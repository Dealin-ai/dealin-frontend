import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./Entrepreneur.module.css";

const Entrepreneur = (props) => {
    const [fulltext, setFullText] = useState(false);
    
    
const fulltextHandler = () =>{
    setFullText(prevstate => !prevstate)
}

  return (
    <Container>
      <div className={classes.entrepreneurmain}>
        <div className={classes.flex}>
          <h2>{props.title}</h2>
          <Link onClick={fulltextHandler}>ვრცლად</Link>
        </div>
        <div id='text' className={`${fulltext ? classes.fulltext : classes.text}`}>
         {props.description}
        </div>
      </div>
    </Container>
  );
};

export default Entrepreneur;
