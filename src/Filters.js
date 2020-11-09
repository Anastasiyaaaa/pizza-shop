import React, {useEffect, useState} from 'react'
import Context from './context'
import Sort from './Sort'
import Categories from './Categories'


export default function Filters() {

    return (
        <div className="content__top">
            <Categories />
            <Sort />
        </div>
    )
}