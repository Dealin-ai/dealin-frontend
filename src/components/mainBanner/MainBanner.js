import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./MainBanner.module.css";
import Container from "../UI/Container";
import asset1 from "../../assets/images/Asset 1@4x 3.png";
import assetSeaze from "../../assets/images/SEIZE.png";
import assetDeal from "../../assets/images/DEAL.png";
import assetThe from "../../assets/images/THE.png";

const MaunBanner = () => {
  return (
    <Container>
      <div className={classes.banner}>
        <div className={classes.title}>
          <h1>გინდა გახდე ინვესტორი ან მეწარმე?</h1>
          <Link>დაიწყე ახლა!</Link>
        </div>
        <div className={classes.imagecard}>
          <motion.img
            initial={{ opacity: 0, scale: 0.5, y: 30}}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring", }, y: 0}}
            className={classes.imgae1}
            src={asset1}
            alt={"asset"}
          />
          <motion.img
          initial={{ opacity: 0, scale: 0.5, y: -50}}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring", }, y: 0}}
          className={classes.imgae2} src={assetSeaze} alt={"seaze"} />
          <motion.img 
           initial={{ opacity: 0, scale: 0.5, x: -100}}
           animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring", }, x: 0}}
          className={classes.imgae3} src={assetThe} alt={"the"} />
          <motion.img
           initial={{ opacity: 0, scale: 0.5, y: 50}}
           animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring", }, y: 0}}
          className={classes.imgae4} src={assetDeal} alt={"deal"} />
        </div>
      </div>
    </Container>
  );
};

export default MaunBanner;
