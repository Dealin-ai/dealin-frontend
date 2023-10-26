import { News } from "./News";
import classes from "./NewsHomepage.module.css";
import Container from "../UI/Container";
const NewsHomepage = () => {
  return (
    <Container>
      <div>
        <h1>სიახლეები</h1>
      </div>
      <div className={classes.newscard}>
        <News />
      </div>
    </Container>
  );
};

export default NewsHomepage;
