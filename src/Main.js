import React, {useEffect, useState, useContext} from 'react'
import Context from './context'


import Routes from './router'
import {useRoutes} from 'hookrouter';
import {categories} from "./db";



export default function Main() {
    const routeResult = useRoutes(Routes);

    return (

            <div className="content">
                <div className="container">
                    {routeResult}
                </div>
            </div>
    )
};

