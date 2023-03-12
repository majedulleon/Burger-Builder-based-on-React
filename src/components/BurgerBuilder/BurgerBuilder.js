import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import Summary from "./Summary/Summary";

let INGREDIENT_PRICES = {
    salad: 30,
    cheese: 50,
    meat: 80
}

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ],
        totalPrice: 80,
        modalOpen: false,
        purchaseAble: false
    }

    updatePurchaseAble = (ingredients) => {
        let sum = ingredients.reduce((sum, element) => {
            return sum + element.amount;
        }, 0);
        this.setState({
            purchaseAble: sum > 0
        })
    }
    addIngredientHandle = (type) => {

        let ingredients = [...this.state.ingredients];
        let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) item.amount++;
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice });
        this.updatePurchaseAble(ingredients);
    }

    removeIngredientHandle = (type) => {
        let ingredients = [...this.state.ingredients];
        let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice });
        this.updatePurchaseAble(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.state.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                        purchaseAble={this.state.purchaseAble} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Checkout</ModalHeader>
                    <ModalBody>
                        <h4>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h4>
                        <Summary ingredients={this.state.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleModal}>Continue To Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>


        );
    }
}

export default BurgerBuilder;