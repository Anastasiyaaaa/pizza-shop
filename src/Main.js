import React, {useState, useContext} from 'react'
import Context from './utility/context'

import Routes from './utility/router'
import {useRoutes} from 'hookrouter';



export default function Main() {
    const {cartPizzaDetails, setCartPizzaDetails,selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza} = useContext(Context)
    const routeResult = useRoutes(Routes);
    const [detailsPrice, setDetailsPrice] =  useState(0);

    return (
        <Context.Provider value={{cartPizzaDetails, setCartPizzaDetails, selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza, detailsPrice, setDetailsPrice}}>
            <div className="content">
                <div className="container">
                    {routeResult}
                </div>
            </div>
        </Context.Provider>
    )
};

