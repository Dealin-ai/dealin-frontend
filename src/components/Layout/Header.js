import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Container from "../UI/Container";
import headerLogo from "../../assets/images/Layer_1.png";

const Header = (props) => {
  return (
    <header>
      <Container>
        <div className={classes.header}>
          <div className={classes.image}>
          <Link to='/'><img src={headerLogo} alt={"header Logo"} /></Link>  
          </div>
          <ul className={classes.links}>
          <li> <Link className={classes.link}>მეწარმეობა</Link></li> 
          <li> <Link to='/registration' className={classes.link}>რეგისტრაცია</Link></li> 
          <li> <Link to='/aboutus' className={classes.link}>ჩვენს შესახებ</Link></li> 
          <li> <Link to='/news' className={classes.link}>სიახლეები</Link></li> 
          <li> <Link className={classes.link}>კონტაქტი</Link></li> 
          </ul>
          <div className={classes.lang}>
           <Link><span>FAQ</span></Link> 
           <Link><span>EN</span></Link> 
          </div>
          <div className={classes.authorisation}>
            <Link to='/authorisation'>ავტორიზაცია</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
