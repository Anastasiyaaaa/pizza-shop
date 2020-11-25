import React from 'react'
import {categories} from "../utility/db";
import Category from "./Category";

export default function Categories(){

    return(
        <div className="categories">
            <ul>
                {categories.map((e) =><Category key={e.id} title={e.title} id={e.id} name={e.name} />)}
            </ul>
        </div>
    )
}
