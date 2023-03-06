import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

let Main = (props) => {
    return (
        <div>
            <Header />
            <BurgerBuilder />
        </div>
    );
}

export default Main;