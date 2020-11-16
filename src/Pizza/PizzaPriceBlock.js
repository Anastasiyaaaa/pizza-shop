
import React, {useContext, useEffect, useState} from 'react'
import AddPizzaButton from "./AddPizzaButton";
import Context from "../Utility/context";

export default function PizzaPriceBlock(props) {
    const {currQuantity, addPizza, detailsPrice, detailsQuantity} = useContext(Context);
    const {currPrice} = props;
    return(
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">{currPrice === undefined ? detailsPrice : currPrice} ₽</div>
            <AddPizzaButton />
        </div>
    )
}