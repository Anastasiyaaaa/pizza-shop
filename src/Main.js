import React, {useEffect, useState, useContext} from 'react'
import Context from './Utility/context'


import Routes from './Utility/router'
import {useRoutes} from 'hookrouter';
import {categories} from "./Utility/db";



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

