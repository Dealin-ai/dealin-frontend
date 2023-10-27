
import classes from './FlexWarap.module.css';


export const FlexWrap = (props) =>{
    return <div className={classes.flex}>
        {props.children}
    </div>
};

export const FlexNoWrap = (props) =>{
    return <div className={classes.flexnowrap}>
        {props.children}
    </div>
}
