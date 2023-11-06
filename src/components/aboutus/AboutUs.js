import React from "react";
import Container from "../UI/Container";
import classes from "./AboutUs.module.css";
import aboutusimage from "../../assets/images/newsbackground1.png";

const AboutUs = (props) => {
  return (
    <Container>
      <div className={classes.aboutusmain}>
        <h2>ჩვენს შესახებ</h2>
        <div className={classes.flex}>
          <div className={classes.image}>
            <img src={aboutusimage} alt="img" />
          </div>
          <div className={classes.text}>
            კეთილი იყოს თქვენი მობრძანება ჩვენს HTML და CSS კურსში! ამ
            ყოვლისმომცველ პროგრამაში ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის
            სამყაროს და მოგიმზადებთ უნარებითა და ცოდნით განსაცვიფრებელი და
            საპასუხო ვებსაიტების შესაქმნელად. ხართ თუ არა დამწყები, წინასწარი
            გამოცდილების გარეშე, ან შუალედური დეველოპერი, რომელიც ცდილობს თქვენი
            უნარების გამკაცრებას, ეს კურსი განკუთვნილია ყველა დონის
            შემსწავლელთათვის.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
