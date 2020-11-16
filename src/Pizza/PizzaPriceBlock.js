
import React, {useContext, useEffect, useState} from 'react'
import AddPizzaButton from "./AddPizzaButton";
import Context from "../Utility/context";

export default function PizzaPriceBlock(props) {
    const {addPizza, detailsPrice, detailsQuantity} = useContext(Context);
    const {currPrice, currQuantity} = props;
    console.log(props, 'currQuantityFullButton')

    return(
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">{currPrice === undefined ? detailsPrice : currPrice} ₽</div>
            <AddPizzaButton currQuantity={currQuantity}/>
        </div>
    )
}