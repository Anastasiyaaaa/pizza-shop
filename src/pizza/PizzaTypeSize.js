
import React from 'react'
import PizzaSize from "./PizzaSize";
import PizzaType from "./PizzaType";

export default function PizzaTypeSize(props) {
    const {types, sizes} = props;
    return(
        <div className="pizza-block__selector">
            <ul>
                {types.map((e, i) => <PizzaType key={i} type={e}/>)}
            </ul>
            <ul>
                {sizes.map((e, i) => <PizzaSize key={i} size={e}/>)}
            </ul>
        </div>
    )
}
