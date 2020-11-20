import React, {useEffect, useState, useContext}  from 'react'
import Context from "../Utility/context";
import {additions, pizzas} from "../Utility/db";
import CartItemQuantity from "./CartItemQuantity";

export default function CartItemBlock(props) {
    const { details, id, idCategory, idDetails, idTypeSize, price, q, size, type} = props.pizza;
    const {cartPizza} = useContext(Context);
    const [cartItemId, setCartItemId] = useState(id)
    const [cartItemIdCategory, setCartItemIdCategory] = useState(idCategory)
    const [cartItemIdDetails, setCartItemIdDetails] = useState(idDetails)
    const [cartItemDetails, setCartItemDetails] = useState(details)
    const [cartItemIdTypeSize, setCartItemIdTypeSize] = useState(idTypeSize)
    const [cartItemQuantity, setCartItemQuantity] = useState(q)

    // console.log(details)
    // console.log(idCategory)

    console.log(type)
    console.log("full")
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="pizza-block__image"
                     src={pizzas[cartItemId].imageUrl}
                     alt="Pizza" />
            </div>
            <div className="cart__item-info">
                <h3>{pizzas[cartItemId].name}</h3>
                <p> {type === 0 ? 'тонкое': 'традиционное'} тесто, {size} см.</p>
            </div>
            <CartItemQuantity cartItemQuantity={cartItemQuantity}/>
            <div className="cart__item-price">
                <b>{price}</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                              fill="#EB5A1E" />
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                    </svg>

                </div>
            </div>
        </div>
    )
}