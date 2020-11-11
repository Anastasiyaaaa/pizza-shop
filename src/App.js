import React, {useEffect, useState, useContext} from 'react'
import Context from './context'
import './App.css';
import Header from './Header';
import Main from './Main';
import {categories, pizzas} from "./db";



export default function App() {
    const [totalPrice, setTotalPrice] =  useState(0);
    const [totalQuantity, setTotalQuantity] =  useState(0);
    const [selectedCategory, setSelectedCategory] =  useState(categories[0].id);

    return (
        <Context.Provider value={{selectedCategory, setSelectedCategory, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity}}>
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        </Context.Provider>
    );
}

