import React, {useContext} from 'react'
import Context from '../utility/context'
import {pizzas} from "../utility/db";
import PizzaBlock from "./PizzaBlock";



export default function PizzaS(props) {
    const {selectedCategory} = useContext(Context);

    let pizza = pizzas.filter(e =>  e.category === selectedCategory);

    if (props.id !== undefined ) {
        pizza = pizzas.filter(e => e.id === +props.id);
    }else if (selectedCategory === 0){
        pizza = pizzas;
    }

    return (
        <div className="content__items">
            { pizza.map((e,i) => <PizzaBlock key={i} pizza={e} pizzaDetails={(props.id !== undefined)}/>) }
        </div>
    )
}
