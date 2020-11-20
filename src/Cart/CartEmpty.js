import React from 'react';
import {A} from 'hookrouter'

export default function CartEmpty() {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая 😕 </h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="./empty-cart.png" alt="Empty cart"/>
            <A href="/categories" className="button button--black">
                <span>Вернуться назад</span>
            </A>
        </div>
    )
}