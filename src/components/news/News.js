import { Link } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./News.module.css";
import NewsItem from "./NewsItem";
import { FlexWrap } from "../UI/FelxWrap";

export const DUMMY_NEWS = [
  {
    id: "n1",
    title: "news 1",
    description: "this is news 1",
    image: [
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnSfmueEBZPVgTQ7H3YoRD1W9x06oY_5A6FhHdPdFIKX5OYHaQIPUMY1VMog4IaAi7Uc&usqp=CAU'
       ],
  },
  {
    id: "n2",
    title: "news 2",
    description: "this is news 2",
    image: [
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "n3",
    title: "news 3",
    description: "this is news 3",
    image:
     [ "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdxG-JSuchSSWP1UAEkvBTTwrD3vnliPd8rQTyKMCtD5PG9Mx_jN1CgS92uSUcIIqCxE&usqp=CAU'
     ]
  },
  {
    id: "n4",
    title: "news 4",
    description: "this is news 4",
    image: [
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: "n5",
    title: "news 5",
    description: "this is news 5",
    image: [
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       ],
  },
];

export const News = (props) => {
  return (
    <>
      {DUMMY_NEWS.map((newsitem) => (
        <Link
          to={`/news/${newsitem.id}`}
          key={newsitem.id}
          className={`${classes.newslink} ${props.classname}`}
        >
          <NewsItem
            classname={props.classname}
            key={newsitem.id}
            id={newsitem.id}
            title={newsitem.title}
          />
        </Link>
      ))}
    </>
  );
};

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
