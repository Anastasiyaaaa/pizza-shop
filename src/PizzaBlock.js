import React, {useContext, useEffect, useState} from 'react'
import Context from './context'
import {categories} from "./db";
import PizzaSize from "./PizzaSize";
import PizzaType from "./PizzaType";
import AddPizzaButton from "./AddPizzaButton";



export default function PizzaBlock(props) {
    const {totalQuantity, setTotalQuantity, totalPrice, setTotalPrice} = useContext(Context);
    const {imageUrl, name, types, sizes, price, category, rating, id} = props.pizza;
    const [currQuantity, setCurrQuantity] =  useState(0);
    const [currType, setCurrType] =  useState(0);
    const [currSize, setCurrSize] =  useState(26);
    const [currPrice, setCurrPrice] =  useState(price);
    const [arr1, setArr] =  useState(props.arr);
    const arr = props.arr;




    const addPizza = () =>{
        setCurrQuantity(currQuantity + 1);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + currPrice);
        // setArr(arr1.push({id: id }));
        // arr.push({id: id })
    }
    useEffect(() => {arr.push({id: id })}, [totalQuantity])
    console.log(arr)
    // +""+ currSize +""+ currType
    const changeType = (type) =>{
        setCurrType(type);
    }
    const changeSize = (size) =>{
        setCurrSize(size);
    }

    useEffect(() => {
        switch (currSize) {
            case 30:
                switch (currType) {
                    case 1:
                        setCurrPrice(price + 15);
                        break;
                    default: setCurrPrice(price + 10);
                }
                break;
            case 40:
                switch (currType) {
                    case 1:
                        setCurrPrice(price + 20);
                        break;
                    default: setCurrPrice(price + 15);
                }
                break;
            default:
                switch (currType) {
                    case 1:
                        setCurrPrice(price + 5);
                        break;
                    default: setCurrPrice(price);
            }
        }
    },[currSize, currType]);


    return (
        <Context.Provider value={{currQuantity, changeSize, addPizza, currSize, setCurrSize, currType, setCurrType, changeType}}>
            <div className="pizza-block" id={id}>
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((e,i) => <PizzaType key={i} type={e}/>)}
                    </ul>
                    <ul>
                        {sizes.map((e,i) => <PizzaSize key={i} size={e}/>)}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">{currPrice}  ₽</div>
                    <AddPizzaButton addPizza={addPizza}/>
                </div>
            </div>
        </Context.Provider>
    )
}