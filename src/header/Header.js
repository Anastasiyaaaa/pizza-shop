import React from 'react'
import {A} from "hookrouter";
import HeaderCart from './HeaderCart'
import HeaderMenu from './HeaderMenu'



export default function Header() {

    return (
        <div className="header">
            <div className="container">
                <A href="/" className="header__logo">
                    <img width='38' src='http://localhost:3000/pizza-logo.svg' alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </A>
                <HeaderMenu />
                <HeaderCart />
            </div>
        </div>
    )
}