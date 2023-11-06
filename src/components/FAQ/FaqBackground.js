import Container from "../UI/Container";
import classes from './FaqBackground.module.css'

const FacBackground = (props) => {
  return (
    <Container>
      <div className={classes.background}>
        <h2 className={classes.backgroundh2}>ხშირად დასმული კითხვები</h2>
        {props.children}
      </div>
    </Container>
  );
};

export default FacBackground;
