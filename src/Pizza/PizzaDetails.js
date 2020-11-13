import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {pizzas} from "../Utility/db";
import {categories} from "../Utility/db";
import PizzaSize from "./PizzaSize";
import PizzaType from "./PizzaType";
import AddPizzaButton from "./AddPizzaButton";



export default function PizzaDetails(props) {
    console.log(pizzas[props.id])
    const {currQuantity, addPizza, currSize, setCurrSize, currType, setCurrType} = useContext(Context);
    const {imageUrl, name, types, sizes, price, category, rating, id} = pizzas[props.id];


    const changeType = (type) =>{
        setCurrType(type);
    }
    const changeSize = (size) =>{
        setCurrSize(size);
    }

    return (
        <div className="pizza-block pizza-block_details" id={id}>
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((e,i) => <PizzaType key={i} type={e}/>)}
                </ul>
                <ul>
                    {sizes.map((e,i) => <PizzaSize key={i} size={e}/>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price}  ₽</div>
                {/*<AddPizzaButton addPizza={addPizza}/>*/}
            </div>
        </div>

    )
}