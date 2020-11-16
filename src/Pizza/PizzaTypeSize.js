
import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
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

// import React, {useContext, useEffect, useState} from 'react'
// import Context from '../Utility/context'
//
//
// export default function PizzaType(props) {
//     const {currType, changeType} = useContext(Context);
//
//     return(
//         <li onClick={() => changeType(props.type)} className={currType === props.type ? 'active' : ''}>{props.type === 0 ? "тонкое" : "традиционное"}</li>
//     )
// }
// import React, {useContext, useEffect, useState} from 'react'
// import Context from '../Utility/context'
//
// export default function PizzaSize(props) {
//     const {currSize, changeSize} = useContext(Context);
//     return(
//         <li onClick={() => changeSize(props.size)} className={currSize === props.size ? 'active' : ''}>{props.size}</li>
//     )
// }