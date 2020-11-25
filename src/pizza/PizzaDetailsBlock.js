import React, {useContext, useState} from 'react'
import Context from '../utility/context'
import {additions} from "../utility/db";
import PizzaDetails from "./PizzaDetails";

export default function PizzaDetailsBlock(props) {
    const {detailsPriceTotal, setDetailsPriceTotal, cartPizzaDetails, setCartPizzaDetails} = useContext(Context);
    const {currPrice, setCurrPrice} = props;
    const [detailsPrice, setDetailsPrice] =  useState(0);

    return (
        <Context.Provider value={{cartPizzaDetails, setCartPizzaDetails, currPrice, setCurrPrice,detailsPrice, setDetailsPrice, detailsPriceTotal, setDetailsPriceTotal}} >
            <div className="pizza-block__selector">
                <ul className='pizza_details'>
                    { additions.map((e, i) => <PizzaDetails key={i} detail={e}/>) }
                </ul>
            </div>
        </Context.Provider>
    )
}








