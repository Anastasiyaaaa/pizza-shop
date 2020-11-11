import React, {useContext, useEffect, useState} from 'react'
import Context from './context'
import {categories, pizzas} from "./db";
import PizzaBlock from "./PizzaBlock";



export default function PizzaS(props) {
    let categoryID;
    const {setSelectedCategory, selectedCategory} = useContext(Context);
    const arr =  [];

    if (props.title !== undefined ) {
        categoryID = (categories.find(e => e.title === props.title)).id;
    } else {categoryID = categories[0].id}

    useEffect(() => {
        setSelectedCategory(categoryID)
    });
    console.log(categoryID);

    const pizzaForCategory = pizzas.filter(e =>  e.category === selectedCategory);
    // const category = categories.find(e => e.title === property.title);
    // console.log(categoryID)
    // const products =
    // console.log(categoryID);
    console.log(pizzaForCategory);
    return (
        <div className="content__items">
            {
                categoryID === 0 ?
                pizzas.map((e,i) => <PizzaBlock arr={arr} key={i} pizza={e}/> ) :
                pizzaForCategory.map((e,i) => <PizzaBlock arr={arr} key={i} pizza={e}/> )
            }
        </div>
    )
}