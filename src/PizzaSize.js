import React, {useContext, useEffect, useState} from 'react'
import Context from './context'

export default function PizzaSize(props) {
    const {currSize, changeSize} = useContext(Context);
    return(
        <li onClick={() => changeSize(props.size)} className={currSize === props.size ? 'active' : ''}>{props.size}</li>
)
}