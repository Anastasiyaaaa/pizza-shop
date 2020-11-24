import React from 'react'


export default function RemovePizzaButton(props) {
    const {remove, quantity} = props;

    return(
        <div onClick={ () => { quantity > 0 ? remove() : console.log(" ")} } className="button button--outline button--add">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 9h24v6h-24z"/></svg>
            <span>Удалить</span>
        </div>
    )
}