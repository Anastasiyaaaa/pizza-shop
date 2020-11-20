import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {categories, pizzas} from "../Utility/db";
import PizzaBlock from "./PizzaBlock";



export default function PizzaS(props) {
    const {selectedCategory, cartPizza} = useContext(Context);
    // useEffect(() => console.log(cartPizza))
    // let pizza;
    let pizza = pizzas.filter(e =>  e.category === selectedCategory);

    if (props.id !== undefined ) {
        pizza = pizzas.filter(e => e.id === +props.id);
    }else if (selectedCategory === 0){
        pizza = pizzas;
    }

    // setPizzaMaps(selectedCategory === 0 ? pizzas : pizzaForCategory)
console.log(pizza);
    return (
        <div className="content__items">
            { pizza.map((e,i) => <PizzaBlock key={i} pizza={e} pizzaDetails={(props.id !== undefined) ? true : false}/>) }
        </div>
    )
}
