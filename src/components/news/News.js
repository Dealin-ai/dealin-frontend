import Container from "../UI/Container";
import classes from "./News.module.css";
import NewsItem from "./NewsItem";
import { FlexWrap } from '../UI/FelxWrap'

const DUMMY_NEWS = [
  {
    id: "n1",
    title: "news 1",
  },
  {
    id: "n2",
    title: "news 2",
  },
  {
    id: "n3",
    title: "news 3",
  },
  {
    id: "n4",
    title: "news 4",
  },
  {
    id: "n5",
    title: "news 5",
  },

];

export const News = (props) =>{
  return (
   <>
      {DUMMY_NEWS.map((newsitem) => (
      <NewsItem
        classname={props.classname}
        key={newsitem.id}
        id={newsitem.id}
        title={newsitem.title}
      />
    ))}
</>
  )
}

const NewsList = () => {
  return (
    <Container>
      <div className={classes.newsdiv}>
        <div className={classes.newstitle}>
          <h1>სიახლეები</h1>
        </div>
        <FlexWrap>
          <News />
          </FlexWrap>
      </div>
    </Container>
  );
};
export default NewsList;
