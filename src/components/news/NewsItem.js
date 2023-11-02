import classes from "./NewsItem.module.css";
import { HiArrowUpRight } from "react-icons/hi2";

import newsimage from "../../assets/images/newsbackground1.png";
const NewsItem = (props) => {
  return (
    <div className={classes.newscard}>
      <img src={newsimage} alt={"news"} />
      <div className={classes.newstop}>
        <div className={classes.news1}>გაიგე მეტი</div>
        <div className={classes.news2}>
          {" "}
          <HiArrowUpRight />
        </div>
      </div>
      <div className={classes.news3}>{props.title}</div>
    </div>
  );
};

export default NewsItem;
