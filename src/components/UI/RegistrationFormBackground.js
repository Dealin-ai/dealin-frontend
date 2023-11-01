import Container from "./Container";
import classes from './RegistrationFormBackground.module.css'
import seize from "../../assets/images/SEIZE.png";
import the from "../../assets/images/THE.png";
import deal from "../../assets/images/DEAL.png";
import rocket from "../../assets/images/Asset 6@4x 1.png";
import rockets from "../../assets/images/Asset 7@4x 1.png";

const RegistrationFormBackground = (props) => {
  return (
    <Container>
      <div className={classes.background}>
        <img className={classes.seize} src={seize} alt="img1" />
        <img className={classes.the} src={the} alt="img2" />
        <img className={classes.deal} src={deal} alt="img3" />
        <img className={classes.rocket} src={rocket} alt="img4" />
        <img className={classes.rockets} src={rockets} alt="img5" />
        {props.children}
      </div>

    </Container>
  );
};

export default RegistrationFormBackground;
