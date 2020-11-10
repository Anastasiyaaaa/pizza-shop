import React, {useEffect, useState} from 'react'
import Context from './context'
import {A} from 'hookrouter';

export default function HeaderMenu() {


    return (
            <ul className='menu'>
                <li> <A href="/">Категории</A></li>
                <li> <A href="/pizza">Товары</A></li>
            </ul>
    )
}
