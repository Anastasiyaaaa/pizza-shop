import React, {useEffect, useState, useContext}  from 'react'
import Context from "../Utility/context";
import {additions} from "../Utility/db";
import CartItemBlock from "./CartItemBlock";

export default function CartItemDetails(props) {
    const {detail} = props;
    console.log(detail);

    return (
        <li className="content__items">
            {additions[detail.id].name} <span>{detail.q}</span>
        </li>
    )
}