import React, {useEffect, useState, useContext} from 'react'
import Context from './context'
import HeaderCart from './HeaderCart'
import HeaderMenu from './HeaderMenu'



export default function Header() {

    return (

        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width='38' src='./pizza-logo.svg' alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <HeaderMenu />
                <HeaderCart />
            </div>
        </div>


    )
}