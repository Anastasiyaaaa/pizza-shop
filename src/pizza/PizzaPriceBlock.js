import React, {useContext} from 'react'
import AddPizzaButton from "./AddPizzaButton";
import Context from "../utility/context";

export default function PizzaPriceBlock(props) {
    const {addPizza, detailsPrice} = useContext(Context);
    const {price, quantity} = props;

    return(
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">{price === undefined ? detailsPrice : price} ₽</div>
            <AddPizzaButton add={addPizza} quantity={quantity}/>
        </div>
    )
}