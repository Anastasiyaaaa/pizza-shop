
import React, {useContext, useEffect, useState} from 'react'
import AddPizzaButton from "./AddPizzaButton";

export default function PizzaPriceBlock(props) {
    const {currPrice} = props;
    return(
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">{currPrice}  ₽</div>
            <AddPizzaButton />
        </div>
    )
}