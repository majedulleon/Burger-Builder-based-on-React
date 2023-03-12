import React from "react";
import '../Ingredient/Ingredient.css';
import BreadTop from "../../../assets/images/top.png";
import BreadSalad from "../../../assets/images/salad.png";
import BreadMeat from "../../../assets/images/meat.png";
import BreadCheese from "../../../assets/images/cheese.png";
import BreadBottom from "../../../assets/images/bottom.png";

let Ingredient = (props) => {

    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt="breadbottom" /></div>
            break;

        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt="breadtop" /></div>
            break;

        case 'salad':
            ingredient = <div><img src={BreadSalad} alt="salad" /></div>
            break;

        case 'meat':
            ingredient = <div><img src={BreadMeat} alt="meat" /></div>
            break;

        case 'cheese':
            ingredient = <div><img src={BreadCheese} alt="cheese" /></div>
            break;

        default:
            ingredient = null;
    }
    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;