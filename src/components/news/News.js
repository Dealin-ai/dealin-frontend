import Container from "../UI/Container";
import classes from "./News.module.css";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <Container>
      <div className={classes.newsdiv}>
        <div className={classes.newstitle}>
          <h1>სიახლეები</h1>
        </div>
        <NewsItem />
      </div>
    </Container>
  );
};
export default News;