import { motion } from "framer-motion";
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
        <motion.img 
        initial={{ opacity: 0, x: -150}}
        animate={{ opacity: 1, transition: { duration: 1,  type: "spring", }, x: 0}}
        className={classes.seize} src={seize} alt="img1" />
        <motion.img 
         initial={{ opacity: 0, x: 150}}
         animate={{ opacity: 1, transition: { duration: 1,  type: "spring", }, x: 0}}
        className={classes.the} src={the} alt="img2" />
        <motion.img 
         initial={{ opacity: 0, x: -150}}
         animate={{ opacity: 1, transition: { duration: 1,  type: "spring", }, x: 0}}
        className={classes.deal} src={deal} alt="img3" />
        <motion.img 
         initial={{ opacity: 0, scale: 0.5, y: 150}}
         animate={{ opacity: 1, scale:1, transition: { duration: 1,  type: "spring", }, y: 0}}
        className={classes.rocket} src={rocket} alt="img4" />
        <motion.img 
          initial={{ opacity: 0, scale: 0.5, y: 150}}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring", }, y: 0}}
        className={classes.rockets} src={rockets} alt="img5" />
        {props.children}
      </div>

    </Container>
  );
};

export default RegistrationFormBackground;
