import React, {useContext}  from 'react'
import Context from "../utility/context";
import CartItemBlock from "./CartItemBlock";

export default function CartItems() {

    const {cartPizza, setTotalQuantity, totalQuantity, setTotalPrice, totalPrice} = useContext(Context);
    const removePizza = (idDetails, idTypeSize, price, quantity) => {
        setTotalQuantity(totalQuantity - quantity);
        setTotalPrice(totalPrice - (price * quantity));
    }

    return (
        <div className="content__items">
            {cartPizza.map((e,i) => <CartItemBlock key={i} pizza={e} index={i} removePizza={removePizza}/>)}
        </div>
    )
}