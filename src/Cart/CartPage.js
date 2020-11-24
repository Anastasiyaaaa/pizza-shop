import React, {useContext} from 'react'
import Context from '../Utility/context'
import CartEmpty from "./CartEmpty";
import CartContent from "./CartContent";

export default function CartPage() {
    const {cartPizza} = useContext(Context);

    return (
        <div className="container container--cart">
            { cartPizza.length === 0
                ?
                <CartEmpty />
                :
                <CartContent />
            }
        </div>
    )
}