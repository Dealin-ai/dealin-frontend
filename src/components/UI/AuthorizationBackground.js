import { motion } from 'framer-motion';
import Container from './Container';
import rockets from '../../assets/images/Asset 7@4x 1.png';
import image from '../../assets/images/Group 11020.png';
import classes from './AuthorizationBachground.module.css'

const AuthorizationBackground = (props) =>{
    return <Container>
 <div className={classes.background}>
    <motion.img 
    initial={{ opacity: 0, scale: 0.5,}}
    animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring",}, }}
    className={classes.image1} src={image} alt='img1' />
    <motion.img 
          initial={{ opacity: 0, scale: 0.5, y: 150}}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1,  type: "spring",}, y: 0}}
    className={classes.image2} src={rockets} alt='img2' />
    {props.children}
 </div>
    </Container>
}

export default AuthorizationBackground;