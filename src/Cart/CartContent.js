import React, {useContext} from 'react'
import Context from '../Utility/context'
import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";

export default function CartContent() {
    const {cartPizza} = useContext(Context);
    console.log(cartPizza)
    return (
        <div className="cart">
            <CartHeader />
            <CartItems />
            <CartFooter />
        </div>
    )
}