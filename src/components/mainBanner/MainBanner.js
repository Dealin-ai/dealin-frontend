import { Link } from "react-router-dom";
import classes from "./MainBanner.module.css";
import Container from "../UI/Container";
import asset1 from "../../assets/images/Asset 1@4x 3.png";
import assetSeaze from "../../assets/images/SEIZE.png";
import assetDeal from "../../assets/images/DEAL.png";
import assetThe from "../../assets/images/THE.png";

const MainBanner = () => {
  return (
    <Container>
      <div className={classes.banner}>
        <div className={classes.title}>
          <h1>გინდა გახდე ინვესტორი ან მეწარმე?</h1>
          <Link>დაიწყე ახლა!</Link>
        </div>
        <div className={classes.imagecard}>
          <img className={classes.imgae1} src={asset1} alt={"asset"} />
          <img className={classes.imgae2} src={assetSeaze} alt={"seaze"} />
          <img className={classes.imgae3} src={assetThe} alt={"the"} />
          <img className={classes.imgae4} src={assetDeal} alt={"deal"} />
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
