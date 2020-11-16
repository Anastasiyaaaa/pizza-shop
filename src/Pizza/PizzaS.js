import React, {useContext, useEffect, useState} from 'react'
import Context from '../Utility/context'
import {categories, pizzas} from "../Utility/db";
import PizzaBlock from "./PizzaBlock";



export default function PizzaS(props) {
    const {selectedCategory} = useContext(Context);

    if (props.id !== undefined ) {
        const newp = pizzas.map(e => e.id === props.id);
    }

    const pizzaForCategory = pizzas.filter(e =>  e.category === selectedCategory);
    const pizzaMap = selectedCategory === 0 ? pizzas : pizzaForCategory;

    return (
        <div className="content__items">
            { pizzaMap.map((e,i) => <PizzaBlock key={i} pizza={e}/>) }
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