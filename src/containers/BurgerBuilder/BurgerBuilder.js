import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-orders';



const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        maximumCustomisable: 0,
        orderNowClicked:false
    }


    onIngredientAdded = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients,

        };
        updatedIngredients[type] = newCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        const oldQuantity = this.state.maximumCustomisable;
        const newQuantity = oldQuantity + 1;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients, maximumCustomisable: newQuantity });

    }


    onRemoveIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients,

        };
        updatedIngredients[type] = newCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        const oldQuantity = this.state.maximumCustomisable;
        const newQuantity = oldQuantity - 1;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients, maximumCustomisable: newQuantity });

    }

    orderNowHandler=()=>{
        console.log('orderNowClicked');
        this.setState({orderNowClicked:true});
        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:"Vignesh",
                address:"Chennai"
            }
        }
        axios.post('/orders.json',order).then(response=>{
            console.log(response);
        })
    }

    revertOrderHandler=()=>{
        this.setState({orderNowClicked:false});
    }

 

    render() {
        const disabledLessButtons = {
            ...this.state.ingredients
        }

        for (let key in disabledLessButtons) {
            disabledLessButtons[key] = disabledLessButtons[key] <= 0
        }

        return (
            <div>
                <Modal show={this.state.orderNowClicked} revertOrder={this.revertOrderHandler}>
                    <OrderSummary ingredients={this.state.ingredients} cancelOrder={this.revertOrderHandler} 
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.onIngredientAdded}
                    ingredientsRemoved={this.onRemoveIngredient}
                    disabled={disabledLessButtons}
                    price={this.state.totalPrice}
                    maximum={this.state.maximumCustomisable}
                    orderNow={this.orderNowHandler}
                />
            </div>
        );
    }
}

export default BurgerBuilder;