import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {additions} from "../Utility/db";
import PizzaDetails from "./PizzaDetails";
import AddPizzaButton from "./AddPizzaButton";
import PizzaPriceBlock from "./PizzaPriceBlock";




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
// <PizzaPriceBlock price={detailsPrice} quantity={detailsQuantity}/>








