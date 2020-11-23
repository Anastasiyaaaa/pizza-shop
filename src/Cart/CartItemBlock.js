import React, {useEffect, useState, useContext}  from 'react'
import Context from "../Utility/context";
import {additions, categories, pizzas} from "../Utility/db";
import CartItemQuantity from "./CartItemQuantity";
import CartItemRemove from "./CartItemRemove";
import {A} from "hookrouter";
import PizzaDetailsBlock from "../Pizza/PizzaDetailsBlock";
import CartItemDetails from "./CartItemDetails";

export default function CartItemBlock(props) {
    const {cartPizza, setCartPizza, setCurrQuantity, currQuantity, setTotalQuantity, totalQuantity, setTotalPrice, totalPrice} = useContext(Context);


    const { details, id, idCategory, idDetails, idTypeSize, price, q, size, type} = props.pizza;
    const [cartItemId, setCartItemId] = useState(id)
    const [cartItemIdCategory, setCartItemIdCategory] = useState(idCategory)
    const [cartItemIdDetails, setCartItemIdDetails] = useState(idDetails)
    const [cartItemDetails, setCartItemDetails] = useState(details)
    const [cartItemIdTypeSize, setCartItemIdTypeSize] = useState(idTypeSize)
    const [cartItemQuantity, setCartItemQuantity] = useState(q)
    console.log(idDetails)
    // setCurrQuantity(currQuantity + 1);
    // setTotalQuantity(totalQuantity + 1);


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
    }, [cartItemQuantity])



    // console.log(cartPizza)
    // // console.log(idCategory)
    //
    // console.log(totalQuantity)
    // console.log("full")
    return (

        <div className="cart__item" id={props.index}>
            <div className="cart__item-img">
                <A href={`/pizza/${categories[idCategory].title}/${id}`} className="cart__item-img">
                <img className="pizza-block__image"
                     src={pizzas[cartItemId].imageUrl}
                     alt="Pizza" />
                </A>
            </div>
            <div className="cart__item-info">
                <h3>{pizzas[cartItemId].name}</h3>
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