import React from "react"

export const Category = props =>{
    const { catList, active, onSetActive } = props;

    const catElem = [...catList].map( cat => (
            <li 
                key={cat.id} 
                className={`d-block my-3 py-2 px-2 rounded-start ${active === cat.id? 'bg-light': ""}`} 
                onClick={ () => onSetActive(cat.id) }>
                {cat.id==="default" ? "All of Tasks" : cat.text}
            </li>
        )
    )
    
    return(
        <ul>
            {catElem}
        </ul>

    )
}