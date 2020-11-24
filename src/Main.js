import React, {useState, useContext} from 'react'
import Context from './Utility/context'

import Routes from './Utility/router'
import {useRoutes} from 'hookrouter';



export default function Main() {
    const {cartPizzaDetails, setCartPizzaDetails,selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza} = useContext(Context)
    const routeResult = useRoutes(Routes);
    const [detailsQuantity, setDetailsQuantity] =  useState(22);
    const [detailsPrice, setDetailsPrice] =  useState(800);

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

