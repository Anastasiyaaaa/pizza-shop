import React, {useEffect, useState, useContext}  from 'react'
import Context from "../Utility/context";
import CartItemBlock from "./CartItemBlock";

export default function CartItems() {

    const {cartPizza, setCartPizza,setTotalQuantity, totalQuantity, setTotalPrice, totalPrice} = useContext(Context);


    const removePizza = (idDetails, idTypeSize, price, quantity) => {
        console.log(idDetails);
        console.log(idTypeSize);

        // setCartPizza(cartPizza.map((e) => {
        //     console.log(e)
        //     // console.log(e.idTypeSize);
        //     // console.log(e.idDetails);
        //
        //     // if (e.idTypeSize !== idTypeSize && e.idDetails !== idDetails){
        //     //     return e
        //     // }
        // }));
        let t = cartPizza.filter((e) => (e.idTypeSize !== idTypeSize || e.idDetails !== idDetails))
            // console.log(e.idTypeSize !== idTypeSize && e.idDetails !== idDetails)
            // console.log(e.idTypeSize)
            // console.log(idTypeSize)
            // console.log(idDetails)
            // console.log(e.idDetails)
            //
            // console.log("check")

        console.log(t)
        console.log("remove")

        setTotalQuantity(totalQuantity - quantity);
        setTotalPrice(totalPrice - (price * quantity));
        setCartPizza([... cartPizza.filter((e) => (e.idTypeSize !== idTypeSize || e.idDetails !== idDetails))])


        console.log()
        console.log()

    }
    // useEffect(() => setCartPizza([...cartPizza]))
    // console.log(totalQuantity)
    console.log(cartPizza)
    return (
        <div className="content__items">
            {cartPizza.map((e,i) => <CartItemBlock key={i} pizza={e} index={i} removePizza={removePizza}/>)}
        </div>
    )
}