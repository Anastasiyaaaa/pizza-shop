import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {pizzas} from "../Utility/db";
import {categories} from "../Utility/db";
import PizzaSize from "./PizzaSize";
import PizzaType from "./PizzaType";
import AddPizzaButton from "./AddPizzaButton";
import PizzaTypeSize from "./PizzaTypeSize";
import PizzaPriceBlock from "./PizzaPriceBlock";



export default function PizzaDetails(props) {
    const {currQuantity, addPizza, currSize, setCurrSize, currType, currPrice, setCurrType, meme} = useContext(Context);
    const {imageUrl, name, types, sizes, price, category, rating, id} = pizzas[props.id];
    console.log(currPrice, currType)
    console.log(meme)



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
            <PizzaTypeSize types={types} sizes={sizes}/>
            <PizzaPriceBlock currPrice={currPrice}/>
        </div>

    )
}