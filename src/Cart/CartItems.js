import React, {useEffect, useState, useContext}  from 'react'
import Context from "../Utility/context";
import CartItemBlock from "./CartItemBlock";

export default function CartItems() {

    const {cartPizza} = useContext(Context);
    console.log(cartPizza)
    return (
        <div className="content__items">
            {cartPizza.map((e,i) => <CartItemBlock key={i} pizza={e} />)}
        </div>
    )
}