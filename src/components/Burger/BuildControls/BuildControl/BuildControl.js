
import React from 'react';
import classes from './BuildControl.css';

const buildControl=(props)=>{
    const maximumLimit=props.maximum;
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button className={classes.button} onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className={classes.button} onClick={props.added} disabled={maximumLimit>=6}>More</button>
        </div>
    );
}


export default buildControl;