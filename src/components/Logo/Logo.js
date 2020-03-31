import React from 'react';
import classes from './Logo.css';

import logo from  '../../assets/images/logo.jpg';

const logoApp=(props)=>{
    return (
        <div style={{height:props.height,width:props.width}}>
            <img src={logo} atl="burger_logo" className={classes.Logo}/>
        </div>
    );
}


export default logoApp;