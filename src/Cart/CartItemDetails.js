import React from 'react'
import {additions} from "../Utility/db";

export default function CartItemDetails(props) {
    const {detail} = props;

    return (
        <li className="content__items">
            {additions[detail.id].name} <span>{detail.q}</span>
        </li>
    )
}