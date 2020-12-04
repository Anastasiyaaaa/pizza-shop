import React, {useContext,  useState} from 'react'
import Context from '../utility/context'
import AddPizzaButton from "./AddPizzaButton";
import RemovePizzaButton from "./RemovePizzaButton";

export default function PizzaDetails(props) {
    const [detailsQuantity, setDetailsQuantity] =  useState(0);
    const {cartPizzaDetails, setCartPizzaDetails, detailsPriceTotal, setDetailsPriceTotal, addDetails,currPrice, setCurrPrice,detailsPrice, setDetailsPrice} = useContext(Context);
    const {id, title, name, price} = props.detail;

    const addDetail = () =>{
        setDetailsQuantity(detailsQuantity + 1);
        setDetailsPriceTotal(detailsPriceTotal + price);
        setCurrPrice(currPrice + (price));
        const idDetails = id + "";
        const isSet = cartPizzaDetails.find(e => e.id === idDetails);
        console.log(isSet)
        if (isSet === undefined) {
            console.log(cartPizzaDetails)
            setCartPizzaDetails([...cartPizzaDetails, {id: idDetails, q: 1 }])
        }else{
            setCartPizzaDetails(cartPizzaDetails.map( e => {
                if (e.id === idDetails){
                    e.q += 1
                }
                return e
            }))
        }
    }

    console.log(cartPizzaDetails)
    const removeDetail = () =>{
        setDetailsQuantity(detailsQuantity - 1);
        setDetailsPriceTotal(detailsPriceTotal - price);
        setCurrPrice(currPrice - (price));
        const idDetails = id + ""; // e.id === idDetails console.log(e)
        console.log(detailsQuantity)
        if (detailsQuantity <= 1){
            setCartPizzaDetails( cartPizzaDetails.filter(e => e.id !== idDetails));
        }else{
            setCartPizzaDetails(cartPizzaDetails.map( e => {
                if (e.id === idDetails){
                    e.q -= 1
                }
                return e
            }))
        }
    }

    return (
        <li>
            <span>{name}</span>
            <AddPizzaButton add={addDetail} quantity={detailsQuantity}/>
            <RemovePizzaButton remove={removeDetail}  quantity={detailsQuantity}/>
        </li>
    )
}








