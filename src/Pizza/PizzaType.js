import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'


export default function PizzaType(props) {
    const {currType, changeType} = useContext(Context);

    return(
        <li onClick={() => changeType(props.type)} className={currType === props.type ? 'active' : ''}>{props.type === 0 ? "тонкое" : "традиционное"}</li>
    )
}