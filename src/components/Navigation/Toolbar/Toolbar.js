import React from 'react';
import classes from './Toolbar.css';


import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';



const toolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <button onClick={props.clicked}>SideDrawer</button>
            <div><Logo height="80%"/></div>
            <div>
                <NavigationItems></NavigationItems>
            </div>
            <nav>

            </nav>
        </header>
    );
}



export default toolBar;
