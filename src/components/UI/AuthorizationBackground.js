import Container from './Container';
import rockets from '../../assets/images/Asset 7@4x 1.png';
import image from '../../assets/images/Group 11020.png';
import classes from './AuthorizationBachground.module.css'

const AuthorizationBackground = (props) =>{
    return <Container>
 <div className={classes.background}>
    <img className={classes.image1} src={image} alt='img1' />
    <img className={classes.image2} src={rockets} alt='img2' />
    {props.children}
 </div>
    </Container>
}

export default AuthorizationBackground;