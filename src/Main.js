import React, {useEffect, useState} from 'react'
import Context from './context'


import Routes from './router'
import {useRoutes} from 'hookrouter';



export default function Main() {
     useEffect( () => console.log('Refresh'));
     const routeResult = useRoutes(Routes);
    return (
            <div className="content">
                <div className="container">
                    {routeResult}
                </div>
            </div>
    )
};

