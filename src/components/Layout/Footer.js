import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import Container from "../UI/Container";
import footerImgage from "../../assets/images/Layer_1.png";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <div className={classes.footertop}>
          <div className={classes.footerimage}>
            <Link to="/">
              <img src={footerImgage} alt="footer" />
            </Link>
          </div>
          
          <ul className={classes.links}>
            <li>
              {" "}
              <Link >მეწარმეობა</Link>
            </li>
            <li>
              {" "}
              <Link >ინვესტიცია</Link>
            </li>
            <li>
              {" "}
              <Link >ჩვენს შესახებ</Link>
            </li>
            <li>
              {" "}
              <Link >სიახლეები</Link>
            </li>
            <li>
              {" "}
              <Link >კონტაქტი</Link>
            </li>
            <li>
              {" "}
              <Link >FAQ</Link>
            </li>
          </ul>
          <div className={classes.footericontitle}>
            <div>
              <h4>გამოგვყევით სოციალურ ქსელებში</h4>
            </div>
            <div className={classes.footericon}>
              <Link to='https://www.youtube.com/' target="_blank" className={classes.icon}>
                {" "}
                <BiLogoYoutube className={classes.youtube} />
              </Link>
              <Link to='https://www.linkedin.com/' target="_blank" className={classes.icon}>
                {" "}
                <BiLogoLinkedin />{" "}
              </Link>
              <Link to='https://www.facebook.com/' target="_blank" className={classes.icon}>
                {" "}
                <GrFacebookOption />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.footerbottom}>
          <div className={classes.footerlink}>
            <Link>წესები და პირობები</Link>
          </div>
          <div className={classes.footerlink}>
            <Link>ყველა უფლება დაცულია</Link>
          </div>
          <div className={classes.footerlastlink}>
            <Link>დამზადებულია DEALIN მიერ</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
