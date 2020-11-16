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


    return (
        <Context.Provider value={{selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity, cartPizza, setCartPizza}}>
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        </Context.Provider>
    );
}

