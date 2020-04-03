import React from 'react';
import classes from './BuildControls.css';


import BuildControl from './BuildControl/BuildControl';


const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'}
];


const buildControls=(props)=>{
    const buttonsDisabled=props.disabled;
    
    return (
        <div className={classes.BuildControls}>
            <h4>Cart Price:${props.price}</h4>
            {props.maximum>=6 ?<div><h4>Maximum of only six ingredients can be customized!<small>
                Proceed to checkout or remove items
                </small>
                </h4></div>:null}
            {controls.map((ctrl,index)=>{
                return <BuildControl label={ctrl.label} key={index} 
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientsRemoved(ctrl.type)}
                disabled={buttonsDisabled[ctrl.type]}
                maximum={props.maximum}
                />
            })}
            <button className={classes.Ordernow} disabled={props.maximum<=0} onClick={props.orderNow}>Order Now</button>
        </div>
    );
}



export default buildControls;
