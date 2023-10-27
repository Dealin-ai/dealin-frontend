import { News } from "./News";
import classes from "./NewsHomepage.module.css";
import Container from "../UI/Container";
import {FlexNoWrap} from '../UI/FelxWrap'
const NewsHomepage = () => {
  return (
    <Container>
      <div className={classes.h1}>
        <h1>სიახლეები</h1>
      </div>
      <FlexNoWrap>
        <News classname={classes.flexauto}/>
      </FlexNoWrap>
    </Container>
  );
};

export default NewsHomepage;
