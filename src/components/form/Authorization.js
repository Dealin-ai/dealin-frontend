import React from "react";
import classes from "./Authorization.module.css";
import Card from "../UI/Card";
import Container from "../UI/Container";

const Authorization = (props) => {
  return (
    <Container>
      <Card>
        <form className={classes.authorizationForm}>
          <div className={classes.formtitle}>
            <h1>ავტორიზაცია</h1>
          </div>
          <div>
            <label>ელ-ფოსტა</label>
            <input />
          </div>
          <div>
            <label>პასვორდი</label>
            <input />
          </div>
          <div className={classes.button}>
            <button>ავტორიზაცია</button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Authorization;
