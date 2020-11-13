import React, {useEffect, useState, useContext} from 'react'
import Context from '../Utility/context'
import {A} from "hookrouter";


export default function Category(props){
    const {selectedCategory} = useContext(Context);
console.log(selectedCategory);
    return(
        <li className={props.id === selectedCategory ? "active" : ""}> <A href={`/pizza/${props.title}`} title={props.title}>{props.name}</A></li>
    )
}
