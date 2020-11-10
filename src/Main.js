import React, {useEffect, useState} from 'react'
import Context from './context'


import Routes from './router'
import {useRoutes} from 'hookrouter';
import {categories} from "./db";



export default function Main() {

     const routeResult = useRoutes(Routes);
     const [selectedCategory, setSelectedCategory] =  useState(categories[categories.length - 1].id);

    console.log(selectedCategory)

    return (
        <Context.Provider value={{selectedCategory, setSelectedCategory}}>
            <div className="content">
                <div className="container">
                    {routeResult}
                </div>
            </div>
        </Context.Provider>
    )
};

