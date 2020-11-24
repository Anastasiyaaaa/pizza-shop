import React, {useEffect, useState, useContext} from 'react'
import Context from './Utility/context'
import './App.css';
import Header from './Header/Header';
import Main from './Main';
import {categories, pizzas} from "./Utility/db";



export default function App() {
    const [totalPrice, setTotalPrice] =  useState(0);
    const [totalQuantity, setTotalQuantity] =  useState(0);
    const [selectedCategory, setSelectedCategory] =  useState(categories[0].id);
    const [cartPizza, setCartPizza] =  useState([]);
    const [cartPizzaDetails, setCartPizzaDetails] =  useState([]);

    useEffect(()=>{
        const pizza = localStorage.getItem('pizza') || [];
        setCartPizza(JSON.parse(pizza));
        const pizzaDetails = localStorage.getItem('pizzaDetails') || [];
        setCartPizzaDetails(JSON.parse(pizzaDetails));
        const price = localStorage.getItem('price') || 0;
        setTotalPrice(JSON.parse(price));
        const quantity = localStorage.getItem('quantity') || 0;
        setTotalQuantity(JSON.parse(quantity));
    }, [])

    useEffect(()=>{
        localStorage.setItem('pizza', JSON.stringify(cartPizza))
    }, [cartPizza])
    useEffect(()=>{
        localStorage.setItem('pizzaDetails', JSON.stringify(cartPizzaDetails))
    }, [cartPizzaDetails])
    useEffect(()=>{
        localStorage.setItem('price', JSON.stringify(totalPrice))
    }, [totalPrice])
    useEffect(()=>{
        localStorage.setItem('quantity', JSON.stringify(totalQuantity))
    }, [totalQuantity])

    return (
        <Context.Provider value={{cartPizzaDetails, setCartPizzaDetails, selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza}}>
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        </Context.Provider>
    );
}

