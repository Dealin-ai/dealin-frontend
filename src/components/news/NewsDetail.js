import Container from "../UI/Container";
import classes from "./NewsDetail.module.css";

const NewsDetail = (props) => {
  return (
    <Container>
      <div className={classes.newsdetailcontainer}>
        <h2>{props.title}</h2>
        <div className={classes.newsdetaildescrtiption}>
          {props.description}
        </div>
        <div className={classes.newsdetailimages}>
          {Array.isArray(props.image) ? (
            props.image.map((imageUrl, index) => (
              <div key={index} className={classes.newsdetailimage}>
                {" "}
                <img
                  key={index}
                  src={imageUrl}
                  alt={`news ${index + 1}`}
                />{" "}
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default NewsDetail;
