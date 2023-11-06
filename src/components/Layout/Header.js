import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Container from "../UI/Container";
import headerLogo from "../../assets/images/Layer_1.png";

const Header = (props) => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  
  const burgershowHandler =() =>{
    setBurgerMenu(prevState => !prevState);
  }



  return (
    <header>
      <Container>
        <div className={classes.header}>
          <div className={classes.image}>
            <Link to="/">
              <img src={headerLogo} alt={"header Logo"} />
            </Link>
          </div>
          <div className={classes.nav}>
            <ul className={classes.links}>
              <li>
                {" "}
                <Link to='/entrepreneurship' className={classes.link}>მეწარმეობა</Link>
              </li>
              <li>
                {" "}
                <Link to="/registration" className={classes.link}>
                  რეგისტრაცია
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/aboutus" className={classes.link}>
                  ჩვენს შესახებ
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/news" className={classes.link}>
                  სიახლეები
                </Link>
              </li>
              <li>
                {" "}
                <Link className={classes.link}>კონტაქტი</Link>
              </li>
            </ul>
            <div className={classes.lang}>
              <Link to='/faq'>
                <span>FAQ</span>
              </Link>
              <Link>
                <span>EN</span>
              </Link>
            </div>
            <div className={classes.authorisation}>
              <Link to="/authorisation">ავტორიზაცია</Link>
            </div>
          </div>
          <div onClick={burgershowHandler} className={classes.burgericon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          { burgerMenu &&    <div className={classes.burgernav}>
            <ul className={classes.burgerlinks}>
              <li>
                {" "}
                <Link to='/entrepreneurship' className={classes.burgerlink}>მეწარმეობა</Link>
              </li>
              <li>
                {" "}
                <Link to="/registration" className={classes.burgerlink}>
                  რეგისტრაცია
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/aboutus" className={classes.burgerlink}>
                  ჩვენს შესახებ
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/news" className={classes.burgerlink}>
                  სიახლეები
                </Link>
              </li>
              <li>
                {" "}
                <Link className={classes.burgerlink}>კონტაქტი</Link>
              </li>
            </ul>
            <div className={classes.burgerlang}>
              <Link to='/faq'>
                <span>FAQ</span>
              </Link>
              <Link>
                <span>EN</span>
              </Link>
            </div>
            <div className={classes.burgerauthorisation}>
              <Link to="/authorisation">ავტორიზაცია</Link>
            </div>
          </div>}
        </div>
      </Container>
    </header>
  );
};

export default Header;
