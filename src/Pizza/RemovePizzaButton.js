import React, {useEffect, useState, useContext} from 'react'
import Context from '../Utility/context'

export default function RemovePizzaButton(props) {

    const {remove} = props;
    const {currPrice, setCurrPrice, detailsPriceTotal} = useContext(Context);


    return(
        <div onClick={() => remove()} className="button button--outline button--add">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 9h24v6h-24z"/></svg>
            <span>Удалить</span>
        </div>
    )
}