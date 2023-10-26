
import { Link } from "react-router-dom";
import classes from "./NewsItem.module.css";
import { HiArrowUpRight } from "react-icons/hi2";

import newsimage from "../../assets/images/newsbackground1.png";
const NewsItem = (props) => {
  return (
    <Link to="/news/newsdetail" className={classes.newslink}>
      <div className={classes.flex}>
        <div className={classes.newscard}>
          <img src={newsimage} alt={"news"} />
          <div className={classes.newstop}>
            <div className={classes.news1}>გაიგე მეტი</div>
            <div className={classes.news2}>
              {" "}
              <HiArrowUpRight />
            </div>
          </div>
          <div className={classes.news3}>
            რა შესაძლებლობებს გაძლევს DEALIN-ს?
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;