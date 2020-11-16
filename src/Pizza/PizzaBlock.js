import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {categories, pizzas} from "../Utility/db";
import AddPizzaButton from "./AddPizzaButton";
import {A} from "hookrouter";
import PizzaTypeSize from "./PizzaTypeSize";
import PizzaPriceBlock from "./PizzaPriceBlock";



export default function PizzaBlock(props) {
    const {totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, cartPizza, setCartPizza, openPizzaDetails, selectedCategory} = useContext(Context);
    const {imageUrl, name, types, sizes, price, category, rating, id} = props.pizza;
    const [currQuantity, setCurrQuantity] =  useState(0);
    const [currType, setCurrType] =  useState(types.length === 2 ? 0 : types[0]);
    const [currSize, setCurrSize] =  useState(26);
    const [currPrice, setCurrPrice] =  useState(price);


    const sizeCoefficients = {26: 0, 30: 1, 40: 2}
    const typeCoefficient  = 0.1;
    const sizeCoefficient  = 0.15;

    const addPizza = () =>{
        setCurrQuantity(currQuantity + 1);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + currPrice);
        const idFull = id +""+ currSize +""+ currType;
        const isSet = cartPizza.find(e => e.id === +idFull)
        if (isSet !== undefined) {
            isSet.q += 1
        } else {setCartPizza([...cartPizza, {id: +idFull, q: 1 }])}
    }

    const changeType = (type) =>{
        setCurrType(type);
    }
    const changeSize = (size) =>{
        setCurrSize(size);
    }


    useEffect(() => {
        /*switch (currSize) {
            case 30:
                switch (currType) {
                    case 1:
                        setCurrPrice(price + 15);
                        break;
                    default: setCurrPrice(price + 10);
                }
                break;
            case 40:
                switch (currType) {
                    case 1:
                        setCurrPrice(price + 20);
                        break;
                    default: setCurrPrice(price + 15);
                }
                break;
            default:
                switch (currType) {
                    case 1:
                        setCurrPrice(price + 5);
                        break;
                    default: setCurrPrice(price);
            }
        }*/
        setCurrPrice(price + ((price * typeCoefficient) * currType) + ((price * sizeCoefficient) * sizeCoefficients[currSize]) )
    },[currSize, currType]);
    // categories[selectedCategory].title

    return (
        <Context.Provider value={{currQuantity, changeSize, addPizza, currSize, setCurrSize, currType, setCurrType, changeType}}>
            <div className="pizza-block">
                <A href={`/pizza/${categories[category].title}/${id}`} id={id}>
                    <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
                </A>
                <h4 className="pizza-block__title">{name}</h4>
                <PizzaTypeSize types={types} sizes={sizes}/>
                <PizzaPriceBlock currPrice={currPrice}/>
            </div>
        </Context.Provider>
    )
}