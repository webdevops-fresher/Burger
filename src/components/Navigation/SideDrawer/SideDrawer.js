import React from 'react';


import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer=(props)=>{
    return (
        <div className={classes.SideDrawer}>
            <button onClick={props.clicked}>Close Menu</button>
            <Logo height="60px" width="60px"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}


export default sideDrawer;