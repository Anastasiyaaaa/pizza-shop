import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {categories, pizzas} from "../Utility/db";
import AddPizzaButton from "./AddPizzaButton";
import {A} from "hookrouter";
import PizzaTypeSize from "./PizzaTypeSize";
import PizzaPriceBlock from "./PizzaPriceBlock";



export default function PizzaBlock(props) {
    // const [currQuantity, setCurrQuantity] =  useState(0);
    const {totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, cartPizza, setCartPizza, openPizzaDetails, selectedCategory} = useContext(Context);
    const {imageUrl, name, types, sizes, price, category, rating, id} = props.pizza;


    const [currType, setCurrType] =  useState(types.length === 2 ? 0 : types[0]);
    const [currSize, setCurrSize] =  useState(26);
    const [currPrice, setCurrPrice] =  useState(price);

    const currQuantityFull =  cartPizza.filter(e => e.id === id).reduce((acc, curr) => acc + curr.q, 0 );

    const [currQuantity, setCurrQuantity] =  useState(0);
//     // useEffect(() => setCurrQuantity(t))
//     setCurrQuantity(t)

    const sizeCoefficients = {26: 0, 30: 1, 40: 2}
    const typeCoefficient  = 0.1;
    const sizeCoefficient  = 0.15;

    const addPizza = () =>{
        setCurrQuantity(currQuantity + 1);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + currPrice);
        console.log(currQuantity)
        const idDetails = id +""+ currSize +""+ currType;
        const isSet = cartPizza.find(e => e.idDetails === +idDetails)
        if (isSet !== undefined) {
            isSet.q += 1;
        } else {setCartPizza([...cartPizza, {id: id, idDetails: +idDetails, q: 1 }])}

    }
    console.log(cartPizza)


    const changeType = (type) =>{
        setCurrType(type);
    }
    const changeSize = (size) =>{
        setCurrSize(size);
    }


    useEffect(() => {
        setCurrPrice(Math.floor(price + ((price * typeCoefficient) * currType) + ((price * sizeCoefficient) * sizeCoefficients[currSize]) ))
    },[currSize, currType]);
    // categories[selectedCategory].title
    console.log(currQuantityFull, "currQuantityFull")
    console.log(currQuantity, "currQuantity")

    useEffect(() =>  setCurrQuantity(currQuantityFull))
    return (
        <Context.Provider value={{changeSize, addPizza, currSize, setCurrSize, currType, setCurrType, changeType}}>
            <div className={`pizza-block ${props.className}`}>
                <A href={`/pizza/${categories[category].title}/${id}`} id={id}>
                    <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
                </A>
                <h4 className="pizza-block__title">{name}</h4>
                <PizzaTypeSize types={types} sizes={sizes}/>
                <PizzaPriceBlock currPrice={currPrice} currQuantity={currQuantity}/>
            </div>
        </Context.Provider>
    )
}