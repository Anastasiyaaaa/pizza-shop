import React, {useContext, useState} from 'react'
import Context from '../Utility/context'
import {A} from 'hookrouter';

export default function HeaderMenu() {
    const {setSelectedCategory} = useContext(Context);

    return (
            <ul className='menu'>
                <li> <A href="/categories">Категории</A></li>
                <li onClick={() => setSelectedCategory(0)}> <A href="/pizza/all">Товары</A></li>
            </ul>
    )
}
