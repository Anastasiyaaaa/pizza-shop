import React, {useEffect, useState, useContext}  from 'react'
import Context from "../utility/context";
import {categories, pizzas} from "../utility/db";
import CartItemQuantity from "./CartItemQuantity";
import CartItemRemove from "./CartItemRemove";
import {A} from "hookrouter";
import CartItemDetails from "./CartItemDetails";

export default function CartItemBlock(props) {
    const {cartPizza, setCartPizza, setTotalQuantity, totalQuantity, setTotalPrice, totalPrice} = useContext(Context);


    const { details, id, idCategory, idDetails, idTypeSize, price, q, size, type} = props.pizza;
    const [cartItemQuantity, setCartItemQuantity] = useState(q)
    console.log(idDetails)


    const removeItem = () => {
        setCartItemQuantity(cartItemQuantity - 1)
        setTotalQuantity(totalQuantity - 1);
        setTotalPrice(totalPrice - price);console.log(cartPizza[props.index])
    }
    const addItem = () => {
        console.log(cartItemQuantity)
        setCartItemQuantity(cartItemQuantity + 1)
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + price);console.log(cartPizza[props.index]);
    }
    useEffect(() => {
        cartPizza.map((e, i) => {
            if(e.idTypeSize === idTypeSize && e.idDetails === idDetails){
                e.q = cartItemQuantity;
            }
        })
        localStorage.setItem('pizza', JSON.stringify(cartPizza))
    }, [cartItemQuantity])

    console.log(cartPizza)

    return (

        <div className="cart__item" id={props.index}>
            <div className="cart__item-img">
                <A href={`/pizza/${categories[idCategory].title}/${id}`} className="cart__item-img">
                <img className="pizza-block__image"
                     src={pizzas[id].imageUrl}
                     alt="Pizza" />
                </A>
            </div>
            <div className="cart__item-info">
                <h3>{pizzas[id].name}</h3>
                <p> {type === 0 ? 'тонкое': 'традиционное'} тесто, {size} см.</p>
            </div>
            <CartItemQuantity cartItemQuantity={cartItemQuantity} addItem={addItem} removeItem={removeItem}/>
            <div className="cart__item-price">
                <b>{price}</b>
            </div>
            <CartItemRemove removePizza={props.removePizza} index={props.index} price={price} idTypeSize={idTypeSize} idDetails={idDetails} quantity={cartItemQuantity}/>
            { idDetails &&
                <div className="cartDetails">
                    <h3>Дополнение: </h3>
                    <ul >{details.map((e, i) => <CartItemDetails key={i} detail={e} /> )}</ul>
                </div>
            }
        </div>


    )
}