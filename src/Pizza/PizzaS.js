import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {categories, pizzas} from "../Utility/db";
import PizzaBlock from "./PizzaBlock";



export default function PizzaS(props) {
    const {selectedCategory, cartPizza} = useContext(Context);
    // useEffect(() => console.log(cartPizza))
    // let pizza;
    let pizza = pizzas.filter(e =>  e.category === selectedCategory);

    if (props.id !== undefined ) {
        pizza = pizzas.filter(e => e.id === +props.id);
    }else if (selectedCategory === 0){
        pizza = pizzas;
    }

    // setPizzaMaps(selectedCategory === 0 ? pizzas : pizzaForCategory)
console.log(pizza);
    return (
        <div className="content__items">
            { pizza.map((e,i) => <PizzaBlock key={i} pizza={e} className={props.id !== undefined ? "pizza-block_details" : " "}/>) }
        </div>
    )
}









//
// import React, {useContext, useEffect, useState} from 'react'
// import Context from '../Utility/context'
// import {categories, pizzas} from "../Utility/db";
// import PizzaBlock from "./PizzaBlock";
//
//
//
// export default function PizzaS(props) {
//     console.log(props)
//
//     let categoryID;
//     const {setSelectedCategory, selectedCategory} = useContext(Context);
//     const [pizza, setPizza] =  useState(pizzas);
//
//     if (props.title !== undefined ) {
//         categoryID = (categories.find(e => e.title === props.title)).id;
//     } else {categoryID = categories[0].id}
//
//     useEffect(() => {
//         setSelectedCategory(categoryID)
//     });
//
//     if (props.id !== undefined ) {
//         // newp = pizzas.filter(e => e.id === +props.id);
//         setPizza(pizza.filter(e => e.id === +props.id));
//
//     }
//     const pizzaForCategory = pizzas.filter(e =>  e.category === selectedCategory);
//
//     // const pizzaForCategory = pizzas.filter(e =>  e.category === selectedCategory);
//
//     return (
//         <div className="content__items">
//             {
//                 categoryID === 0 ?
//                     pizza.map((e,i) => <PizzaBlock key={i} pizza={e}/> ) :
//                     props.id !== undefined ?
//                         pizza.map((e,i) => <PizzaBlock key={i} pizza={e}/> ) :
//                         pizzaForCategory.map((e,i) => <PizzaBlock key={i} pizza={e}/> )
//             }
//         </div>
//     )
// }