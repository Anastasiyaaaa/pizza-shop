import React, {useEffect, useState, useContext} from 'react'
import Context from './Utility/context'


import Routes from './Utility/router'
import {useRoutes} from 'hookrouter';
import {categories} from "./Utility/db";



export default function Main() {
    const {cartPizzaDetails, setCartPizzaDetails,selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza} = useContext(Context)
    const routeResult = useRoutes(Routes);
    const [detailsQuantity, setDetailsQuantity] =  useState(22);
    const [detailsPrice, setDetailsPrice] =  useState(800);

    // const addPizza = () =>{
    //     setCurrQuantity(currQuantity + 1);
    //     setTotalQuantity(totalQuantity + 1);
    //     setTotalPrice(totalPrice + currPrice);
    //     console.log(currQuantity)
    //     const idTypeSize = id +""+ currSize +""+ currType;
    //     const isSet = cartPizza.find(e => e.idTypeSize === +idTypeSize)
    //     if (isSet !== undefined) {
    //         isSet.q += 1;
    //         isSet.totalQ = currQuantity + 1;
    //     } else {setCartPizza([...cartPizza, {id: id, totalQ: currQuantity + 1, idTypeSize: +idTypeSize, q: 1 }])}
    //
    // }

    return (
        <Context.Provider value={{cartPizzaDetails, setCartPizzaDetails, detailsQuantity, setDetailsQuantity, selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza, detailsPrice, setDetailsPrice}}>
            <div className="content">
                <div className="container">
                    {routeResult}
                </div>
            </div>
        </Context.Provider>
    )
};

