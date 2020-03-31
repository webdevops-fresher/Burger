
import React from 'react';
import classes from './OrderSummary.css';

const orderSummary = (props) => {
    const ingredientKeys = Object.keys(props.ingredients);
    const ingredientSummary = 
        ingredientKeys.map((igKey,index) => {
            return <li key={index}>{igKey}:{props.ingredients[igKey]}</li>
        })
        
    return (
        <div className={classes.SUMMARY}>
            <h4>Order Summary</h4>
            <p>A delicious burger served with:</p>
            <ul className={classes.INGREDIENT_LIST}>
                {ingredientSummary}
            </ul>
            <strong>Total Price:${props.price}</strong>
            <button className={classes.CANCEL_BUTTON} onClick={props.cancelOrder}>Cancel Order</button>
            <button className={classes.CHECKOUT_BUTTON}>Proceed To Checkout</button>
        </div>
    );
}


export default orderSummary;
