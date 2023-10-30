import React, { useState,useEffect } from "react";
import { motion } from 'framer-motion';
import Container from "../UI/Container";
import classes from './MainScrollbar.module.css'
import mainscrollbarimage from '../../assets/images/Asset 1@4x 4.png'

const MainScrollbar = (props) => {
    const [rotationAngle, setRotationAngle] = useState(0);

    const handleScroll = () => {
        const scrollDiv = document.querySelector('#scrollmain');
        const scrollPercentage = scrollDiv.scrollTop / (scrollDiv.scrollHeight - scrollDiv.clientHeight);
        const newRotationAngle = scrollPercentage * 360;
        setRotationAngle(newRotationAngle);
      };

      useEffect(() => {
        // Attach the scroll event listener to the .scrollmain div
        const scrollDiv = document.querySelector('#scrollmain');
        scrollDiv.addEventListener('scroll', handleScroll);
    
        return () => {
          // Clean up the event listener when the component unmounts
          scrollDiv.removeEventListener('scroll', handleScroll);
        };
      }, []);
   

  return (
    <Container>
      <div  className={classes.scrollmain}>
        <h2>რა შესაძლებლობებს გაძლევს DEALIN-ს?</h2>
        <div id='scrollmain' className={classes.flex}>
          <div className={classes.scrolltext}>
            კეთილი იყოს თქვენი მობრძანება ჩვენს HTML და CSS კურსში! ამ ყოვლის
            მომცველ პროგრამაში ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის სამყაროს და
            მოგიმზადებთ უნარებითა და ცოდნით განსაცვიფრებელი და საპასუხო
            ვებსაიტების შესაქმნელად. ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის
            სამყაროს დაკეთილი იყოს თქვენი მობრძანება ჩვენს HTML და CSS კურსში! ამ ყოვლის
            მომცველ პროგრამაში ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის სამყაროს და
            მოგიმზადებთ უნარებითა და ცოდნით განსაცვიფრებელი და საპასუხო
            ვებსაიტების შესაქმნელად. ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის
            სამყაროს დაკეთილი იყოს თქვენი მობრძანება ჩვენს HTML და CSS კურსში! ამ ყოვლის
            მომცველ პროგრამაში ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის სამყაროს და
            მოგიმზადებთ უნარებითა და ცოდნით განსაცვიფრებელი და საპასუხო
            ვებსაიტების შესაქმნელად. ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის
            სამყაროს დაკეთილი იყოს თქვენი მობრძანება ჩვენს HTML და CSS კურსში! ამ ყოვლის
            მომცველ პროგრამაში ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის სამყაროს და
            მოგიმზადებთ უნარებითა და ცოდნით განსაცვიფრებელი და საპასუხო
            ვებსაიტების შესაქმნელად. ჩვენ ჩავუღრმავდებით ვებ დეველოპმენტის
            სამყაროს და
          </div>
          <div className={classes.scrollimg} >
           <motion.img src={mainscrollbarimage} alt='scrollimage' style={{ transform: `rotate(${-rotationAngle}deg)`}}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainScrollbar;
