import React, {useEffect, useState, useContext} from 'react'
import Context from './Utility/context'

import {pizzas} from "./Utility/db";
import Routes from './Utility/router'
import {useRoutes} from 'hookrouter';
import {categories} from "./Utility/db";



export default function Main() {
    const routeResult = useRoutes(Routes);
    const contextProps =  useContext(Context);

    //pizza start
    const {totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, cartPizza, setCartPizza, selectedCategory, setSelectedCategory} = useContext(Context);

    const [currPizzaProps, setCurrProps] =  useState(pizzas[0]);
    const {imageUrl, name, types, sizes, price, category, rating, id} = currPizzaProps;
    const [currType, setCurrType] =  useState(types.length === 2 ? 0 : types[0]);
    const [currSize, setCurrSize] =  useState(26);
    const [currPrice, setCurrPrice] =  useState(price);

    const quantityWasAdded =  cartPizza.filter(e => e.id === id).reduce((acc, curr) => acc + curr.q, 0 );
    const [currQuantity, setCurrQuantity] =  useState(quantityWasAdded || 0);

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
    //pizza end

    console.log(contextProps)
    return (
            <Context.Provider value={{setSelectedCategory, selectedCategory, currQuantity, currPrice, changeSize, addPizza, currSize, setCurrSize, currType, setCurrType, changeType, currPizzaProps, setCurrProps}} >
                <div className="content">
                    <div className="container">
                        {routeResult}
                    </div>
                </div>
           </Context.Provider>
    )
};

