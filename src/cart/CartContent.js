import React from 'react'
import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";

export default function CartContent() {

    return (
        <div className="cart">
            <CartHeader />
            <CartItems />
            <CartFooter />
        </div>
    )
}