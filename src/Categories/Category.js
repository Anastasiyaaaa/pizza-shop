import React, {useEffect, useState, useContext} from 'react'
import Context from '../Utility/context'
import {A} from "hookrouter";


export default function Category(props){
    const {selectedCategory,setSelectedCategory} = useContext(Context);

    return(
        <li className={props.id === selectedCategory ? "active" : ""} onClick={() => setSelectedCategory(props.id)}> <A href={`/pizza/${props.title}`} title={props.title}>{props.name}</A></li>
    )
}
