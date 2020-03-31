import React from 'react';
import classes from './Modal.css';


import BackDrop from '../BackDrop/Backdrop';


const modal = (props) => {
    return (
        <div>
            <BackDrop show={props.show} revert={props.revertOrder}></BackDrop>
            <div className={classes.Modal} style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}>
                {props.children}
            </div>
        </div>
    );
}


export default modal;


