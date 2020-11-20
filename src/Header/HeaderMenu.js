import React, {useContext, useState, useEffect} from 'react'
import Context from '../Utility/context'
import {A} from 'hookrouter';

export default function HeaderMenu() {
    const {setSelectedCategory, setCartPizzaDetails} = useContext(Context);
    // useEffect(() =>  );
    // setCartPizzaDetails([])
    return (
            <ul className='menu'>
                <li onClick={() => setCartPizzaDetails([])}>
                    <A href="/categories">Категории</A>
                </li>
                <li onClick={() => {setSelectedCategory(0); setCartPizzaDetails([])}}>
                    <A href="/pizza/all">Товары</A>
                </li>
            </ul>
    )
}
