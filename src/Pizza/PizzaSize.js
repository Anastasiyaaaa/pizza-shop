import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'

export default function PizzaSize(props) {
    const {changeSize, currSize} = useContext(Context);
    return(
        <li onClick={() => changeSize(props.size)} className={currSize === props.size ? 'active' : ''}>{props.size}</li>
)
}