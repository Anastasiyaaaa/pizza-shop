import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {additions, categories, pizzas} from "../Utility/db";
import AddPizzaButton from "./AddPizzaButton";
import {A} from "hookrouter";
import PizzaTypeSize from "./PizzaTypeSize";
import PizzaPriceBlock from "./PizzaPriceBlock";
import PizzaDetails from "./PizzaDetails";
import PizzaDetailsBlock from "./PizzaDetailsBlock";



export default function PizzaBlock(props) {
    // const [currQuantity, setCurrQuantity] =  useState(0);
    const {selectedCategory, cartPizzaDetails, setCartPizzaDetails, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, cartPizza, setCartPizza} = useContext(Context);
    const {imageUrl, name, types, sizes, price, category, rating, id} = props.pizza;

    const [detailsPriceTotal, setDetailsPriceTotal] =  useState(0);
    const [currType, setCurrType] =  useState(types[0]);
    const [currSize, setCurrSize] =  useState(sizes[0]);
    const [currPrice, setCurrPrice] =  useState(price);


    const currQuantityFull =  cartPizza.filter(e => e.id === id).reduce((acc, curr) => acc + curr.q, 0 );

    const [currQuantity, setCurrQuantity] =  useState(0);

    const sizeCoefficients = {26: 0, 30: 1, 40: 2}
    const typeCoefficient  = 0.1;
    const sizeCoefficient  = 0.15;

    const addPizza = () =>{
        setCurrQuantity(currQuantity + 1);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + currPrice);
        console.log(cartPizzaDetails);

        // const idDetailsConnect =[...cartPizzaDetails.map(e => e.id+""+e.q)]
        // const idDetailsConnect = cartPizzaDetails !== [] ? cartPizzaDetails.reduce((acc, curr) => acc + curr.id+ "" +curr.q, '') : [];
        const idDetailsConnect = cartPizzaDetails.reduce((acc, curr) => acc + curr.id+ "" +curr.q, '') || undefined;

        console.log(idDetailsConnect)

        const idTypeSize = id +""+ currSize +""+ currType;
        const isSet = cartPizza.find(e => e.idTypeSize === +idTypeSize && e.idDetails === idDetailsConnect)
        if (isSet !== undefined) {
            cartPizza.map(e => {
                if (e.idTypeSize === +idTypeSize && e.idDetails === idDetailsConnect) {
                    e.q += 1;
                    e.details= [...cartPizzaDetails];
                }
            })
            setCartPizza([...cartPizza])
        } else {setCartPizza([...cartPizza, {id: id, idCategory: selectedCategory, idDetails: idDetailsConnect, price: currPrice, size: currSize, type: currType, idTypeSize: +idTypeSize, q: 1, details: [...cartPizzaDetails] }])}

    }
    console.log(selectedCategory)

    console.log(cartPizza)


    const changeType = (type) =>{
        setCurrType(type);
    }
    const changeSize = (size) =>{
        setCurrSize(size);
    }




    useEffect(() => {
        setCurrPrice(Math.floor(price + ((price * typeCoefficient) * currType) + ((price * sizeCoefficient) * sizeCoefficients[currSize]) + detailsPriceTotal ))
    },[currSize, currType]);
    
    useEffect(() =>  {
        setCurrQuantity(currQuantityFull);
    })
    return (
        <Context.Provider value={{cartPizzaDetails, setCartPizzaDetails, detailsPriceTotal, setDetailsPriceTotal, totalPrice, setTotalPrice, changeSize, addPizza, currSize, setCurrSize, currType, setCurrType, changeType, setCurrPrice}}>
            <div className={props.pizzaDetails ? `pizza-block pizza-block_details`: 'pizza-block' }>
                <A href={`/pizza/${categories[category].title}/${id}`} id={id}>
                    <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
                </A>
                <h4 className="pizza-block__title">{name}</h4>
                <PizzaTypeSize types={types} sizes={sizes}/>
                <PizzaPriceBlock price={currPrice} quantity={currQuantity}/>
            </div>
            { props.pizzaDetails && <PizzaDetailsBlock setCurrPrice={setCurrPrice} currPrice={currPrice} /> }
        </Context.Provider>
    )
}