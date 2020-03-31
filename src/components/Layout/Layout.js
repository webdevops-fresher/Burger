import React, { useState } from 'react';
import classes from './Layout.css';


import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state={
        sideDrawerClicked:false
    }
    sideDrawerClickedHandler=()=>{
        this.setState({sideDrawerClicked:!this.state.sideDrawerClicked});
    }
    render() {
        return (
            <div>
                <div>
                    <ToolBar clicked={this.sideDrawerClickedHandler}/>
                    {this.state.sideDrawerClicked===true ?  <SideDrawer clicked={this.sideDrawerClickedHandler}/> : null}
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;