import React from 'react'


export default function PizzaMain() {
    const align = {textAlign: 'center', padding: '20px 0'};
    const width = { width: "50%"}
    return(
        <div style={align}>
            <img style={width}
             src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg"
             alt="Pizza" />
             <h1>Best PIZZA in the world</h1>
        </div>
    )
}
